import { Stack, Skeleton } from '@mui/material';

export const MuiSkeleton = () => {
  return (
    <Stack spacing={2} width={250}>
        <Skeleton variant='text' animation="wave"/>
        <Skeleton variant='circular' width={60} height={60} animation="wave"/>
        <Skeleton variant='rectangular' width={250} height={125} animation="wave"/>
    </Stack>
  )
}
