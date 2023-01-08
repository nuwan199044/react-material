import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://sharij.online/wp-content/uploads/2019/01/Mini7.jpg"
        />
        <CardContent>
          <Typography component="div" variant="h5" gutterBottom>
            React
          </Typography>
          <Typography component="div" variant="body1" color="gray">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is maintained by
            Meta and a community of individual developers and companies.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
