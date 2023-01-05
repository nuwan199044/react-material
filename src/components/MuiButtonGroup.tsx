import { Stack, Button, ButtonGroup } from "@mui/material";

export const MuiButtonGroup = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row">
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          color="primary"
          size="small"
          aria-aria-label="vertical button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          color="secondary"
          size="small"
          aria-aria-label="horizontol button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
