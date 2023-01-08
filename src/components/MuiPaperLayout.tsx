import { Paper, Stack, Box } from "@mui/material";

export const MuiPaperLayout = () => {
  return (
    <Stack spacing={2}>
      <Paper sx={{ padding: "50px" }} elevation={1}>
        <Stack spacing={2} direction="row" sx={{ border: "1px solid" }}>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              padding: "8px",
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            Box 1
          </Box>
          <Box width={50} height={50} p={1} bgcolor="success.light">
            Box 2
          </Box>
        </Stack>
      </Paper>
      <Paper sx={{ padding: "50px" }} elevation={4}>
        <Stack spacing={2} direction="row" sx={{ border: "1px solid" }}>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              padding: "8px",
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            Box 1
          </Box>
          <Box width={50} height={50} p={1} bgcolor="success.light">
            Box 2
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
};
