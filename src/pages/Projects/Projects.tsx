import React from "react";
import {
  Box, Card, CardContent, CardActions, Button, Typography, Stack, IconButton
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


function LinkButton({
  type,
  href,
  fullWidth
}: { type: "github" | "nuget" | "live"; href: string; fullWidth?: boolean }) {
  const { t } = useTranslation();
  const label =
    type === "github" ? t("projects.btn.github")
      : type === "nuget" ? t("projects.btn.nuget")
        : t("projects.btn.live");

  const leftIcon =
    type === "github" ? <FontAwesomeIcon icon={faGithub} />
      : type === "nuget" ? <Box component="span" sx={{ fontWeight: 900 }}>NuGet</Box>
        : <FontAwesomeIcon icon={faExternalLinkAlt} />;

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      color="primary"
      size="small"
      startIcon={leftIcon}
      fullWidth={fullWidth}
      sx={{
        borderRadius: 999,
        textTransform: "none",
        justifyContent: "center",
        width: { xs: "100%", sm: "auto" }
      }}
    >
      {label}
    </Button>
  );
}

export default function ProjectsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  function scrollBy(delta: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {t("projects.intro")}
      </Typography>

      <Box
        sx={{
          position: "relative",
          borderColor: "divider",
          borderRadius: 3,
          p: { xs: 1, sm: 2 }
        }}
      >
        {/* Setas */}
        <IconButton
          onClick={() => scrollBy(-480)}
          sx={{
            position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
            zIndex: 2, bgcolor: "background.paper", border: 1, borderColor: "divider", "&:hover": { bgcolor: "background.paper" }
          }}
          aria-label="Anterior"
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={() => scrollBy(480)}
          sx={{
            position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
            zIndex: 2, bgcolor: "background.paper", border: 1, borderColor: "divider", "&:hover": { bgcolor: "background.paper" }
          }}
          aria-label="Próximo"
        >
          <ChevronRightIcon />
        </IconButton>

        {/* Faixa do carrossel */}
        <Box
          ref={trackRef}
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: { xs: "85%", sm: "60%", md: "45%" }, // responsivo: quantos cards cabem
            gap: 2,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            px: { xs: 4, md: 6 } // espaço para as setas
          }}
        >
          {projects.map(p => (
            <Card
              component={RouterLink}
              to={`/projects/${p.slug}`}
              key={p.id}
              elevation={0}
              sx={{
                borderRadius: 3,
                border: 1,
                borderColor: "divider",
                background: (theme) =>
                  theme.palette.mode === "light"
                    ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                    : "linear-gradient(180deg, #101826 0%, #0d1420 100%)",
                scrollSnapAlign: "center",
                textDecoration: "none"
              }}
            >
              {/* Imagem do projeto */}
              <Box
                component="img"
                src={p.image}
                alt=""
                sx={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderTopLeftRadius: (theme) => theme.shape.borderRadius * 3,
                  borderTopRightRadius: (theme) => theme.shape.borderRadius * 3
                }}
              />

              <CardContent sx={{ minHeight: 130 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
                  {t(p.titleKey)}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {t(p.descKey)}
                </Typography>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  sx={{ width: "100%" }}
                >
                  {p.links.map(link => (
                  <LinkButton 
                    key={link.type}
                    type={link.type} 
                    href={link.href} 
                    fullWidth={isMobile} />
                  ))}
                </Stack>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
