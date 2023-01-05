import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiToggleButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatsChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
    console.log(updatedFormats);
  };
  return (
    <Stack spacing={2}>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting 1"
          value={formats}
          onChange={handleFormatsChange}
          size="large"
          color="info"
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
