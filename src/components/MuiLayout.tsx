import { Box, Stack, Divider } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={0} direction="row" sx={{ border: "1px solid" }}>
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
      <Stack
        spacing={2}
        direction="column"
        sx={{ border: "1px solid" }}
        divider={<Divider orientation="horizontal" flexItem />}
      >
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
      <Stack spacing={0} direction="row-reverse" sx={{ border: "1px solid" }}>
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
      <Stack
        spacing={0}
        direction="column-reverse"
        sx={{ border: "1px solid" }}
      >
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
    </Stack>
  );
};
