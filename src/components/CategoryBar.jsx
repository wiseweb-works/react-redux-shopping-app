import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const CategoryBar = () => {
  return (
    <FormControl sx={{ width: '100vw', m: 1 }}>
      <RadioGroup
        row
        sx={{ justifyContent: 'center' }}
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        {/* MAP YAPILACAK */}
        <FormControlLabel
          sx={{ textTransform: 'capitalize' }}
          control={<Radio />}
          value="MAP"
          label="MAP"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryBar;
