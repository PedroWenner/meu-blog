import { createTheme } from "@mui/material/styles";

export const buildTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === "light" ? "#1976d2" : "#90caf9" },
      background: {
        default: mode === "light" ? "#ffffff" : "#0b0f14",
        paper: mode === "light" ? "#ffffff" : "#0f141a",
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
      h2: { fontWeight: 800, letterSpacing: -0.5 },
      subtitle1: { color: mode === "light" ? "#5f6b7a" : "#8ea0b5" },
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 999,
            paddingInline: 16,
            minHeight: 36,
          },
        },
      },
    },
  });
