import { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  console.log({ rating });
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        precision={0.5}
        size="large"
        value={rating}
        onChange={handleChange}
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
