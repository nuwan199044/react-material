import { Stack, Badge} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Badge badgeContent={4}><EmailIcon /></Badge>
        <Badge badgeContent={4} color="secondary"><EmailIcon /></Badge>
        <Badge badgeContent={100} color="success"><EmailIcon /></Badge>
        <Badge badgeContent={100} color="success" max={999}><EmailIcon /></Badge>
        <Badge badgeContent={0} color="success" showZero><EmailIcon /></Badge>
        <Badge color="error" variant='dot'><EmailIcon /></Badge>
    </Stack>
  )
}
