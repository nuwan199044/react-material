import { Stack, Chip, Avatar} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';

export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1','Chip 2','Chip 3']);
    const handleDelete = (clickedChip: string) => {
        setChips((chips) => chips.filter(chip => chip !== clickedChip))
    }
  return (
    <Stack direction="row" spacing={2}>
        <Chip label="Chip 1" color='primary' size='medium' />
        <Chip label="Chip 2" color='secondary' size='medium' icon={<FaceIcon />} />
        <Chip label="Chip 3" color='success' size='medium' variant='outlined' avatar={<Avatar>V</Avatar>} />
        <Chip label="Chip 4" color='error' size='medium' onClick={() => alert("clicked!")} onDelete={() => alert("deleted!")}/>
        {
            chips.map((chip) => <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>)
        }
    </Stack>
  )
}
