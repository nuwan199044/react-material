import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text">TEXT</Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>

        <Button variant="text" href="https://www.google.com">
          TEXT
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("clicked")}
        >
          Send
        </Button>
        <IconButton color="success" size="medium" aria-label="send">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
