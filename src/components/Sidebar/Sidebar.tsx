import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { SidebarHeader } from "./SidebarHeader";
import { styled } from "@mui/material/styles";
import { Icon } from "../Icon";
import { menuItems } from "./items";
import { colors } from "../../styles";

const SidebarNavigationItem = styled(ListItem)(() => ({
  padding: "0",
  "&:not(:last-child)": {
    marginBottom: "0.25em",
  },
  "& .MuiListItem-root": {
    "& .MuiListItemButton-root": {
      padding: "0.5em 0.75em",
    },
  },
}));

export const Sidebar = () => {
  return (
    <Drawer open variant="permanent">
      <SidebarHeader />
      <Divider />
      <Box>
        <List disablePadding>
          {menuItems.map((menuItem) => (
            <SidebarNavigationItem key={menuItem.path}>
              <ListItemButton>
                <Stack direction="row" spacing={1.5}>
                  {menuItem.iconName && (
                    <ListItemIcon color={colors.gray500}>
                      <Icon name={menuItem.iconName} />
                    </ListItemIcon>
                  )}
                  <ListItemText slotProps={{ primary: { color: "primary" } }}>
                    {menuItem.label}
                  </ListItemText>
                </Stack>
              </ListItemButton>
            </SidebarNavigationItem>
          ))}
        </List>
      </Box>
      <Box>{/* Sidebar footer content here */}</Box>
    </Drawer>
  );
};
