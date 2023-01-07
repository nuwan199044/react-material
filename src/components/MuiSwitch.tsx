import { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChecked}
            color="secondary"
            size="small"
          />
        }
      />
    </Box>
  );
};
