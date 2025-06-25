import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "../Icon";
import { menuItems } from "./items";

export const Sidebar = () => {
  return (
    <Drawer open variant="permanent">
      {/* Sidebar header here containing logo */}
      <Divider />
      <Box>
        <List>
          {menuItems.map((menuItem) => (
            <ListItem key={menuItem.path}>
              <ListItemButton>
                {menuItem.iconName && (
                  <ListItemIcon>
                    <Icon name={menuItem.iconName} />
                  </ListItemIcon>
                )}
                <ListItemText>{menuItem.label}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>{/* Sidebar footer content here */}</Box>
    </Drawer>
  );
};
