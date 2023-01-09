import { Stack, Avatar, AvatarGroup } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "primary.main" }}>CK</Avatar>
        <Avatar sx={{ bgcolor: "success.main" }}>BG</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="Jhon Doe"/>
        <Avatar src="https://i.pravatar.cc/150?img=4" alt="Jenny Doe"/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <Avatar src="https://i.pravatar.cc/150?img=4" />
          <Avatar src="https://i.pravatar.cc/150?img=5" />
          <Avatar src="https://i.pravatar.cc/150?img=6" />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar variant="square" sx={{ bgcolor: "primary.main", width:48, height:48 }}>CK</Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: "success.main", width:48, height:48 }}>BG</Avatar>
      </Stack>
    </Stack>
  );
};
