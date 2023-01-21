import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Box, Typography } from "@mui/material";

const CheckboxComponent = () => {
  return (
    <Box style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start'
      }} >
       


        
         

          <Typography variant="h6">Hotel Chains</Typography>
          <FormControlLabel
            control={<Checkbox value="Accor - Novotel & ibis" />}
            label="Accor - Novotel & ibis"
          />
          <FormControlLabel
            control={<Checkbox value="Clarks Inn" />}
            label="Clarks Inn"
          />
          <FormControlLabel
            control={<Checkbox value="Concept Hospitality" />}
            label="Concept Hospitality"
          />
          <FormControlLabel
            control={<Checkbox value="Ginger Hotels" />}
            label="Ginger Hotels"
          />
          <FormControlLabel
            control={<Checkbox value="Hilton & Doubletree" />}
            label="Hilton & Doubletree"
          />
          <FormControlLabel
            control={<Checkbox value="Hyatt" />}
            label="Hyatt"
          />
          <FormControlLabel
            control={<Checkbox value="IHG - Crowne Plaza, Holiday Inn & Intercontinental" />}
            label="IHG - Crowne Plaza, Holiday Inn & Intercontinental"
          />
          <FormControlLabel
            control={<Checkbox value="Lemon Tree" />}
            label="Lemon Tree"
          />
          <FormControlLabel
            control={<Checkbox value="Marriott, Westin & Le Meridien" />}
            label="Marriott, Westin & Le Meridien"
          />
          <FormControlLabel
            control={<Checkbox value="Orange Tiger" />}
            label="Orange Tiger"
          />
          <FormControlLabel
            control={<Checkbox value="Radisson, Park Plaza & Country Inn" />}
            label="Radisson, Park Plaza & Country Inn"
          />
          <FormControlLabel
            control={<Checkbox value="Royal Orchid" />}
            label="Royal Orchid"
          />
          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Sayaji Hotels"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="Taj"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="The Pride Hotels"
          />
          <FormControlLabel
            control={<Checkbox value="Wyndham - Ramada & Howard Johnson" />}
            label="Wyndham - Ramada & Howard Johnson"
          />
          <Typography variant="h5">Guests Love </Typography>
          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Swimming Pool

            (52)"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="
            Wi-Fi
            
            (448)"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="Spa

            (35)"
          />

          <Typography variant="h5">Booking Preference</Typography>
          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Entire Property
            (32)"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="Caretaker
            (176)"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="Instant Book
            (531"
          />
          <FormControlLabel
            control={<Checkbox value="Wyndham - Ramada & Howard Johnson" />}
            label="Homestays
            (85)"
          />
          <Typography variant="h5">House Rules</Typography>

          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Pets Allowed
            (68)"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="Bachelors Allowed
            (472)"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="Smoking Allowed
            (261)"
          />
          <FormControlLabel style={{fontSize:"1px",color:"red"}}
            control={<Checkbox value="Wyndham - Ramada & Howard Johnson" />}
            label="Allows Unmarried Couples
            (412)"
          />
      </Box>
  );
};

export default CheckboxComponent;
/*


const cities = {
    Mumbai: ['Marine Drive', 'Gateway of India', 'Juhu Beach'],
    Pune: ['Aga Khan Palace', 'Sinhagad Fort', 'Shaniwarwada'],
    Delhi: ['Red Fort', 'India Gate', 'Qutub Minar']
};

const value = Object.keys(cities).filter(key => key === 'Mumbai');
console.log(cities[value][0]);


const value = Object.keys(cities).filter(key => key === 'Mumbai');
console.log(cities[value]);

function getCityName(obj){
let filterCity = Object.keys(obj).filter(city => city === 'Mumbai');
return filterCity;
}

console.log(getCityName(cities)); // Output: ['Mumbai']
*/