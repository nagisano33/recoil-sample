import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";

import React, { FC } from "react";

interface IProps {
  mask?: string;
  inputFormat?: string;
}

/**
 * MUI DatePicker のラッパー
 * @returns 関数コンポーネント
 */
export const MyLuxonDatePicker: FC<IProps> = ({
  mask = "____/__/__",
  inputFormat = "yyyy/MM/dd",
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DatePicker
        mask={mask}
        inputFormat={inputFormat}
        label="abc"
        onChange={() => undefined}
        value={DateTime.fromJSDate(new Date())}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};
