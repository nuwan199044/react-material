import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from '@mui/icons-material/Edit';

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      icon={<SpeedDialIcon openIcon={<EditIcon />}/>}
      ariaLabel="speed-dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
    >
      <SpeedDialAction icon={<ShareIcon />} tooltipOpen tooltipTitle="Share"/>
      <SpeedDialAction icon={<ContentCopyIcon />} tooltipOpen tooltipTitle="Copy"/>
      <SpeedDialAction icon={<PrintIcon />} tooltipOpen tooltipTitle="Print"/>
    </SpeedDial>
  );
};
