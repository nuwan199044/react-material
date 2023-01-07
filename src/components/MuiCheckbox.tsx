import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormHelperText
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const MuiCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ checked });
  console.log({ skills });
  const handleTACCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleSkillsCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let isExist = skills.indexOf(event.target.value);
    if (isExist === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={checked} onChange={handleTACCheck} />}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Like"
          control={
            <Checkbox
              icon={<ThumbUpOffAltIcon />}
              checkedIcon={<ThumbUpIcon />}
            />
          }
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillsCheckbox} />}
            />
            <FormControlLabel
              label="CSS"
              control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillsCheckbox} />}
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={<Checkbox value="javscript" checked={skills.includes('javscript')} onChange={handleSkillsCheckbox} />}
            />
          </FormGroup>
          <FormHelperText>This is error</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
