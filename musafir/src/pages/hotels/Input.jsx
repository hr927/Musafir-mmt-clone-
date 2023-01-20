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
        <Typography variant="h5">Select Filters</Typography>
        <Typography variant="h6">Suggested For You</Typography>
        <FormControlLabel
          control={<Checkbox name="check1" color="primary" />}
          label="Highly Recommended by Travellers"
        />
        <FormControlLabel
          control={<Checkbox name="check2" color="primary" />}
          label="Free Cancellation"
        />
        <FormControlLabel
          control={<Checkbox name="check3" color="primary" />}
          label="MMT ValueStays - Top Rated & Affordable"
        />
        <FormControlLabel
          control={<Checkbox name="check4" color="primary" />}
          label="Free Breakfast"
        />
        <FormControlLabel
          control={<Checkbox name="check5" color="primary" />}
          label="Highly-rated value for money stays"
        />
        <FormControlLabel
          control={<Checkbox name="check6" color="primary" />}
          label="Allows Unmarried Couples"
        />
        <FormControlLabel
          control={<Checkbox name="check7" color="primary" />}
          label="Entire Property"
        />
        <FormControlLabel
          control={<Checkbox name="check8" color="primary" />}
          label="Resort"
        />
        <Typography variant="h6">Price (per night)</Typography>
        <FormControlLabel
          control={
            <Checkbox
              value="0-2000"
            />
          }
          label={`₹ 0 - ₹ 2000 (148)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="2000-3000"
            />
          }
          label={`₹ 2000 - ₹ 3000 (167)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="3000-6500"
            />
          }
          label={`₹ 3000 - ₹ 6500 (159)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="6500-9500"
            />
          }
          label={`₹ 6500 - ₹ 9500 (29)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="9500-12500"
            />
          }
          label={`₹ 9500 - ₹ 12500 (7)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="12500-15000"
            />
          }
          label={`₹ 12500 - ₹ 15000 (4)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="15000-30000"
            />
          }
          label={`₹ 15000 - ₹ 30000 (4)`}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="30000+"
            />
          }
          label={`₹ 30000+ (2)`}
        />

      </Box>
  );
};

export default CheckboxComponent;