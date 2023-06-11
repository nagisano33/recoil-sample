import React, { ReactNode } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { ITableProperty } from "./ITableProperty";

type TTableValue = string | string[] | number | number[] | undefined;

// string 型の key に string, number, undefined のいずれかが紐づくと定義しておく
// 定義しておくことで、Object[key] の形でアクセス出来るようになる
export interface IDisplayable {
  [key: string]: TTableValue;
}

// 型引数 T に IDisplayable の型制約を付与しておく
export interface IRowHeaderTableProperty<T extends IDisplayable>
  extends ITableProperty<T> {
  /**
   * ヘッダーの種類
   */
  headerType: "row";

  /**
   * 行データ
   */
  rows: T;
}

// アロー関数のデフォルト値ありの引数は undefined にしなくても呼び出す側で省略出来る
const cellsFactory = (value: TTableValue, length: number = 1) => {
  return Array.isArray(value)
    ? [...value, ...new Array(value.length - length)]
    : [value, ...new Array(length - 1)];
};

/**
 * 行ヘッダーテーブル
 * @returns
 */
export const RowHeaderTable = <T extends IDisplayable>({
  titles,
  rows,
}: React.PropsWithChildren<IRowHeaderTableProperty<T>>) => {
  // keyof T でアサーションしないと map の中からアクセス出来ない
  const keys = Object.keys(rows) as (keyof T)[];
  const maxLength = keys
    .map((key) =>
      Array.isArray(rows[key]) ? (rows[key] as string[] | number[]).length : 1
    )
    .reduce((a, b) => Math.max(a, b));

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableBody>
          {keys.map((key) => (
            <TableRow
              key={key.toString()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ background: "#606060", color: "white" }}
                component="th"
                scope="row"
              >
                {titles[key]}
              </TableCell>
              {cellsFactory(rows[key], maxLength).map((cell, index) => (
                <TableCell key={index} component="td" scope="row">
                  {/* undefined でも大丈夫 */}
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
