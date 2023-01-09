import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack direction='row' spacing={2} m={4}>
      <Link href="#">Link 1</Link>
      <Link href="#" color='secondary' underline="hover" variant="h3">Link 2</Link>
      <Typography variant="h5">
        <Link href="#" underline="none">Link 3</Link>
      </Typography>
    </Stack>
  );
};
