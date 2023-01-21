import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Typography } from '@mui/material';

export default function Calendar() {
  const [value, setValue] = React.useState([null,null]);

  return (<Box style={{color:"white",marginTop:"10px"}}>
    <LocalizationProvider 
      dateAdapter={AdapterDayjs}
      localeText={  { start: 'Check-in', end: 'Check-out' }}
      >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment >
            <TextField   InputProps={{
    style: {
      color: 'white',
      borderRadius:"10px",
      height:"40px",
      backgroundColor:"rgb(35,57,81)"
    },
  }} {...startProps} />
            <Box sx={{ mx: 2,color:"white" }}> to </Box>
            <TextField InputProps={{
    style: {
      color: 'white',
      borderRadius:"10px",
      height:"40px",
      // padding:"10px",
      backgroundColor:"rgb(35,57,81)"
    },
  }}{...endProps} />
          </React.Fragment>
        )}
        />
    </LocalizationProvider>
  
        </Box>
  );
}
