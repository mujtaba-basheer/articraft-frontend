import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Icon } from "../Icon";
import { menuItems, footerMenuItems } from "./items";
import { colors } from "../../styles/colors";
import { useState } from "react";

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

const SidebarFooterItem = styled(ListItem)(() => ({
  padding: "0",
  "&:not(:last-child)": {
    marginBottom: "0.25em",
  },
  "& .MuiListItemButton-root": {
    padding: "0.5em 0.75em",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: colors.gray50,
    },
  },
}));

const UserProfileSection = styled(Box)(() => ({
  padding: "1rem 0.75rem",
  borderTop: `1px solid ${colors.gray200}`,
  marginTop: "auto",
}));

const LogoSection = styled(Box)(() => ({
  padding: "1.5rem 1rem",
  display: "flex",
  alignItems: "center",
}));

// Logout icon component (using available icon as substitute)
const LogoutIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray400 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
  </Box>
);

interface User {
  email: string;
  role: string;
  name?: string;
}

interface SidebarProps {
  onPageChange?: (path: string) => void;
  user?: User | null;
  onLogout?: () => void;
}

export const Sidebar = ({ onPageChange, user, onLogout }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("/"); // Dashboard is default active
  
  const handleMenuClick = (path: string) => {
    setActiveItem(path);
    onPageChange?.(path); // Notify parent component of page change
    // Here you would typically handle routing
    console.log(`Navigating to: ${path}`);
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out...");
    onLogout?.();
  };

  // Helper functions for user display
  const getUserDisplayName = () => {
    if (user?.name) return user.name;
    if (user?.email) {
      const emailName = user.email.split('@')[0];
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }
    return "Vishal Shaw"; // fallback to original
  };

  const getUserEmail = () => {
    return user?.email || "Vishal@looptrack.ai"; // fallback to original
  };

  const getUserInitials = () => {
    if (user?.name) {
      const nameParts = user.name.split(" ");
      if (nameParts.length >= 2) {
        return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
      }
      return nameParts[0].charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "VS"; // fallback to original
  };

  return (
    <Drawer 
      open 
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Logo Section */}
      <LogoSection>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "4px",
              background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: colors.baseWhite,
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              L
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: colors.gray900,
            }}
          >
            LoopTrack
          </Typography>
        </Stack>
      </LogoSection>
      
      <Divider />
      
      {/* Main Navigation */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List disablePadding>
          {menuItems.map((menuItem) => {
            const isActive = activeItem === menuItem.path;
            return (
              <SidebarNavigationItem key={menuItem.path}>
                <ListItemButton
                  onClick={() => handleMenuClick(menuItem.path)}
                  sx={{
                    '&:hover': {
                      backgroundColor: colors.gray50,
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    {menuItem.iconName && (
                      <ListItemIcon 
                        sx={{ 
                          minWidth: 'auto',
                          color: isActive ? colors.blue600 : colors.gray500,
                        }}
                      >
                        <Icon name={menuItem.iconName} />
                      </ListItemIcon>
                    )}
                    <ListItemText 
                      primary={menuItem.label}
                      slotProps={{ 
                        primary: { 
                          sx: {
                            color: isActive ? colors.blue600 : colors.gray700,
                            fontWeight: isActive ? 600 : 500,
                            fontSize: '14px',
                          }
                        } 
                      }}
                    />
                  </Stack>
                </ListItemButton>
              </SidebarNavigationItem>
            );
          })}
        </List>
      </Box>

      {/* Footer Section */}
      <Box>
        <Divider sx={{ margin: '0.5rem 0' }} />
        
        {/* Support and Settings */}
        <List disablePadding>
          {footerMenuItems.map((menuItem) => {
            const isActive = activeItem === menuItem.path;
            return (
              <SidebarFooterItem key={menuItem.path}>
                <ListItemButton onClick={() => handleMenuClick(menuItem.path)}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <ListItemIcon 
                      sx={{ 
                        minWidth: 'auto',
                        color: isActive ? colors.blue600 : colors.gray500,
                      }}
                    >
                      <Icon name={menuItem.iconName} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={menuItem.label}
                      slotProps={{ 
                        primary: { 
                          sx: {
                            color: isActive ? colors.blue600 : colors.gray700,
                            fontSize: '14px',
                            fontWeight: isActive ? 600 : 500,
                          }
                        } 
                      }}
                    />
                  </Stack>
                </ListItemButton>
              </SidebarFooterItem>
            );
          })}
        </List>

        {/* User Profile Section */}
        <UserProfileSection>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar 
              sx={{ 
                width: 32, 
                height: 32,
                bgcolor: colors.gray800,
                fontSize: '12px',
                fontWeight: 600,
                color: colors.baseWhite,
              }}
            >
              {getUserInitials()}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  color: colors.gray900,
                  fontSize: '14px',
                  lineHeight: 1.2,
                }}
              >
                {getUserDisplayName()}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: colors.gray500,
                  fontSize: '12px',
                  lineHeight: 1.2,
                }}
                noWrap
              >
                {getUserEmail()}
              </Typography>
            </Box>
            <IconButton
              onClick={handleLogout}
              size="small"
              sx={{
                color: colors.gray400,
                '&:hover': {
                  backgroundColor: colors.gray50,
                  color: colors.gray600,
                },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Stack>
        </UserProfileSection>
      </Box>
    </Drawer>
  );
};