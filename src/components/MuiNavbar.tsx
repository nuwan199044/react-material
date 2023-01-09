import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Smart Inventory
        </Typography>
        <Stack spacing={2} direction="row">
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
