import { Box, Link, Breadcrumbs, Typography} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const MuiBreadcrumbs = () => {
  return (
    <Box width={500} m={5}>
        <Breadcrumbs separator={<ArrowForwardIosIcon />}>
            <Link href='#' variant='h6'>Home</Link>
            <Link href='#' variant='h6'>Catelog</Link>
            <Link href='#' variant='h6'>Accessories</Link>
            <Typography variant='h6'>Shoue</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<ArrowForwardIosIcon />} maxItems={2}>
            <Link href='#' variant='h6'>Home</Link>
            <Link href='#' variant='h6'>Catelog</Link>
            <Link href='#' variant='h6'>Accessories</Link>
            <Typography variant='h6'>Shoue</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<ArrowForwardIosIcon />} maxItems={3} itemsAfterCollapse={2}>
            <Link href='#' variant='h6'>Home</Link>
            <Link href='#' variant='h6'>Catelog</Link>
            <Link href='#' variant='h6'>Accessories</Link>
            <Typography variant='h6'>Shoue</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<ArrowForwardIosIcon />} maxItems={3} itemsBeforeCollapse={2}>
            <Link href='#' variant='h6'>Home</Link>
            <Link href='#' variant='h6'>Catelog</Link>
            <Link href='#' variant='h6'>Accessories</Link>
            <Typography variant='h6'>Shoue</Typography>
        </Breadcrumbs>
    </Box>
  )
}
