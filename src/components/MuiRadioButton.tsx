import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl error>
      <FormLabel>Years Of Experience</FormLabel>
      <RadioGroup row onChange={handleChange} value={value}>
        <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
        <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
        <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
      </RadioGroup>
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
  );
};
