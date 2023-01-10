import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is error alert</Alert>
      <Alert severity="warning">This is error alert</Alert>
      <Alert severity="info">This is error alert</Alert>
      <Alert severity="success">This is error alert</Alert>

      <Alert variant="outlined" severity="error">
        This is error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is error alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is error alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is error alert
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is error alert
      </Alert>
      <Alert variant="filled" severity="info" action={<Button color="inherit" size="small">UNDO</Button>}>
        <AlertTitle>Info</AlertTitle>
        This is error alert
      </Alert>
      <Alert variant="filled" severity="success" icon={<CheckBoxIcon color="inherit" />} onClose={() => alert("close alert")}>
        <AlertTitle>Success</AlertTitle>
        This is error alert
      </Alert>
    </Stack>
  );
};
