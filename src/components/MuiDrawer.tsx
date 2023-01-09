import { useState } from "react";
import { Drawer, Box, Typography, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MuiDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsOpen(true)}>
        <MenuIcon />
    </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box width="250px" p={2} role="presentation" textAlign="center">
          <Typography variant="h6">Side Panel</Typography>
        </Box>
      </Drawer>
    </>
  );
};
