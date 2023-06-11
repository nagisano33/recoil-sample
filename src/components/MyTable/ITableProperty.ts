/**
 * テーブルのプロパティインターフェース
 */
export interface ITableProperty<T extends object> {
  /**
   * ヘッダーの種類
   */
  headerType: TTableHeaderType;

  /**
   * 各値の名前
   */
  titles: Record<keyof T, string>;
}

/**
 * ヘッダーの種類
 */
type TTableHeaderType = "row" | "column" | "both";
