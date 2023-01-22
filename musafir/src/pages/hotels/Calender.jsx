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

  return (<Box style={{color:"white",}}>
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
      color: 'black',
      borderRadius:"10px",
      // height:"40px",
    
    },
  }} {...startProps} />
            <Box sx={{ mx: 2,color:"white" }}> to </Box>
            <TextField InputProps={{
    style: {
      color: 'black',
      borderRadius:"10px",
      // height:"40px",
      // padding:"10px",
      
    },
  }}{...endProps} />
          </React.Fragment>
        )}
        />
    </LocalizationProvider>
  
        </Box>
  );
}
