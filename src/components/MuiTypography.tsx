import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim
        aliquam sunt maiores, officia quia modi reprehenderit impedit,
        perspiciatis voluptatum necessitatibus repellat! Architecto a ex
        expedita ipsum et reiciendis ducimus.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat qui
        eius labore veritatis quo. Optio ipsa beatae fugiat molestias? Eum
        voluptatum tempora natus quidem voluptatibus dignissimos ipsam tempore
        distinctio unde.
      </Typography>

      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
    </div>
  );
};
