import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CurrencySelection() {
  const [currency, setCurrency] = React.useState('INR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  // if (window.screen.width <= 700) {
  //   return (
  //     <FormControl sx={{ m: 1, minWidth: 50 }}>
  //       <InputLabel >currency</InputLabel>
  //       <Select
  //         labelId="demo-simple-select-autowidth-label"
  //         id="demo-simple-select-autowidth"
  //         value={currency}
  //         onChange={handleChange}
  //         autoWidth
  //         label="currency"
  //       >
  //         <MenuItem value='INR'>INR</MenuItem>
  //         <MenuItem value='USD'>USD</MenuItem>
  //         <MenuItem value='EUR'>EUR</MenuItem>
  //       </Select>
  //     </FormControl>
  //   );
  // }

  return (
    <div>
      <select class="form-select button button-small margin-left-s" aria-label="currency" onChange={handleChange}>
        <option selected>INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="AUD">AUD</option>
      </select>
    </div>
  );
}