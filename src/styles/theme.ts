import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1D22",
      light: "rgba(28, 29, 34, 0.5",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: "1rem",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          ":hover": {
            backgroundColor: colors.gray50,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
        },
      },
    },
  },
});
