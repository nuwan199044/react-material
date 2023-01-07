import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "Javascript", "Typescript", "Python", "SQL"];

type Skill = {
  id: number;
  label: string;
};

const skillList = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillList}
        value={skill}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
