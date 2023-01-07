import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [firstName, setFirstName] = useState<String>("");
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          label="First Name"
          value={firstName}
          required
          error={!firstName}
          helperText={!firstName ? 'Required': 'OK'}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField variant="filled" label="Last Name" />
        <TextField variant="standard" label="City" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="Address" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="Input" size="small" required helperText="This is required" />
        <TextField variant="outlined" label="Password" size="small" type="password" />
        <TextField variant="outlined" label="Read Only" size="small" InputProps={{ readOnly:true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="Price" size="small" InputProps={{ startAdornment:<InputAdornment position="start">$</InputAdornment> }} />
        <TextField variant="outlined" label="Weight" size="small" InputProps={{ endAdornment:<InputAdornment position="end">kg</InputAdornment> }} />
      </Stack>
    </Stack>
  );
};
