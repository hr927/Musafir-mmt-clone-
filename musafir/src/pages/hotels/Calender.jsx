import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

export default function Calendar() {
  const [value, setValue] = React.useState([null, null]);
  const [departure, setDeparture] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");

  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: ["column", "column", "row"],
        gap: "2",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check In"
          value={departure}
          disablePast="true"
          onChange={(newValue) => {
            setDeparture(newValue);
          }}
          renderInput={(params) => <TextField {...params} error={false} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check Out"
          value={returnDate}
          disablePast="true"
          onChange={(newValue) => {
            setReturnDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} error={false} />}
        />
      </LocalizationProvider>
    </Box>
  );
}
