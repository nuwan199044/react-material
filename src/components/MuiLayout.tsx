import { Box } from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
      <Box component="span">MuiLayout</Box>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          padding: "16px",
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        MuiLayout
      </Box>
      <Box
        width={100}
        height={100}
        p={2}
        bgcolor='success.light'
      >
        MuiLayout
      </Box>
    </>
  );
};
