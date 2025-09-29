import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "@/theme/useColorMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const routes = [
  { labelKey: "nav.about", path: "/" },
  { labelKey: "nav.projects", path: "/projects" },
  { labelKey: "nav.experience", path: "/experience" },
  { labelKey: "nav.skills", path: "/skills" },
  { labelKey: "nav.contact", path: "/contact" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const { mode, toggle } = React.useContext(ColorModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = Math.max(
    0,
    routes.findIndex(
      (r) => r.path === (location.pathname === "/" ? "/" : location.pathname)
    )
  );

  const FLAG_BY_LANG: Record<string, "br" | "us"> = { pt: "br", en: "us" };
  const curFlag = FLAG_BY_LANG[i18n.language] ?? "br";

  function handleLangChange() {
    const next = i18n.language === "pt" ? "en" : "pt"; // <-- use pt/en no i18n
    i18n.changeLanguage(next);
    localStorage.setItem("lng", next);
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box display="flex" justifyContent="flex-end" gap={1} mb={2}>
        <Tooltip
          title={
            i18n.language === "pt"
              ? "Switch to english"
              : "Mudar para português"
          }
        >
          <IconButton
            size="small"
            onClick={handleLangChange}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              width: 36,
              height: 36,
            }}
            aria-label={i18n.language === "pt" ? "Português" : "English"}
          >
            <img
              alt={i18n.language === "pt" ? "Português" : "English"}
              src={`https://flagcdn.com/24x18/${curFlag}.png`}
              srcSet={`https://flagcdn.com/48x36/${curFlag}.png 2x`} /* retina */
              width="24"
              height="18"
              style={{ display: "block", borderRadius: 4 }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title={mode === "light" ? "Dark mode" : "Light mode"}>
          <IconButton
            size="small"
            onClick={toggle}
            sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
          >
            <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
          </IconButton>
        </Tooltip>
      </Box>

      <Typography variant="h2" component="h1" gutterBottom>
        {t("name")}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t("role")}
      </Typography>

      <Box mt={3} mb={4}>
        <Tabs
          value={currentIndex}
          onChange={(_, idx) => navigate(routes[idx].path)}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              mr: 1,
              p: 1,
            },
            "& .Mui-selected": {
              backgroundColor: "action.selected",
            },
          }}
        >
          {routes.map((r) => (
            <Tab key={r.path} label={t(r.labelKey)} />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
          minHeight: 240,
          p: 3,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
