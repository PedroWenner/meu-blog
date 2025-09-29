import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppShell from "@/layout/AppShell";
import AppRoutes from "@/routes/AppRoutes";
import { buildTheme } from "@/theme/theme";
import { ColorModeContext, useColorModeProvider } from "@/theme/useColorMode";
import "@/i18n";

export default function App() {
  const { mode, toggle } = useColorModeProvider();
  const theme = React.useMemo(() => buildTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppShell>
          <AppRoutes />
        </AppShell>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
