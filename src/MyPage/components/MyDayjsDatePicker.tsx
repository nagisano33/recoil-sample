import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import React, { FC } from "react";

interface IProps {
  mask?: string;
  inputFormat?: string;
}

/**
 * MUI DatePicker のラッパー
 * @returns 関数コンポーネント
 */
export const MyDayjsDatePicker: FC<IProps> = ({
  mask = "____/__/__",
  inputFormat = "YYYY/MM/DD",
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        mask={mask}
        inputFormat={inputFormat}
        label="abc"
        onChange={() => undefined}
        value={dayjs(new Date())}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};
