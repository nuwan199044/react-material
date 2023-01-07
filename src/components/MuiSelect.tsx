import { useState } from "react";
import { Stack, Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ country });
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handleMultiSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Stack spacing={2} direction="row">
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          label="Select Country Multiple"
          select
          value={countries}
          onChange={handleMultiSelectChange}
          fullWidth
          SelectProps={{ multiple: true }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};
