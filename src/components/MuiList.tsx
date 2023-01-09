import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const MuiList = () => {
  return (
    <Box width={300}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 1"
              secondary="List item 1 secondary"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List Item 1"
            secondary="List item 1 secondary"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List Item 1"
            secondary="List item 1 secondary"
          />
        </ListItem>
      </List>
    </Box>
  );
};
