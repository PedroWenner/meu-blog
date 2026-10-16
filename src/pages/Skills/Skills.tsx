import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { skillGroups } from "@/data/skills";
import type { SkillId } from "@/data/skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faGit,
  faGithub,
  faGitlab,
  faJs,
  faNode,
  faReact,
  faAndroid,
  faPhp, faLaravel, faAngular, faVuejs
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faTerminal,
  faCloud,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import StorageIcon from "@mui/icons-material/Storage";
import LanIcon from "@mui/icons-material/Lan";
import ScienceIcon from "@mui/icons-material/Science";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";

// mapeia cada id para um ícone
function iconFor(id: SkillId) {
  switch (id) {
    case ".net":
      return <DeviceHubIcon sx={{ fontSize: 16 }} />;
    case "csharp":
      return <ScienceIcon sx={{ fontSize: 16 }} />;
    case "aspnet":
      return <WebAssetIcon sx={{ fontSize: 16 }} />;
    case "efcore":
      return <LanIcon sx={{ fontSize: 16 }} />;
    case "sqlserver":
      return <StorageIcon sx={{ fontSize: 16 }} />;
    case "postgres":
      return <FontAwesomeIcon icon={faDatabase} />;
    case "mongodb":
      return <FontAwesomeIcon icon={faDatabase} />;
    case "redis":
      return <FontAwesomeIcon icon={faServer} />;
    case "docker":
      return <FontAwesomeIcon icon={faDocker} />;
    case "k8s":
      return <FontAwesomeIcon icon={faCubes} />;
    case "node":
      return <FontAwesomeIcon icon={faNode} />;
    case "nestjs":
      return <LanIcon sx={{ fontSize: 16 }} />;
    case "prisma":
      return <ScienceIcon sx={{ fontSize: 16 }} />;

    case "react":
      return <FontAwesomeIcon icon={faReact} />;
    case "ts":
      return <ScienceIcon sx={{ fontSize: 16 }} />;
    case "js":
      return <FontAwesomeIcon icon={faJs} />;
    case "html":
      return <WebAssetIcon sx={{ fontSize: 16 }} />;
    case "css":
      return <WebAssetIcon sx={{ fontSize: 16 }} />;
    case "mui":
      return <WebAssetIcon sx={{ fontSize: 16 }} />;
    case "vite":
      return <ScienceIcon sx={{ fontSize: 16 }} />;
    case "webpack":
      return <DeviceHubIcon sx={{ fontSize: 16 }} />;
    case "zod":
      return <ScienceIcon sx={{ fontSize: 16 }} />;

    case "flutter":
      return <FontAwesomeIcon icon={faAndroid} />;
    case "dart":
      return <ScienceIcon sx={{ fontSize: 16 }} />;
    case "reactnative":
      return <FontAwesomeIcon icon={faReact} />;

    case "git":
      return <FontAwesomeIcon icon={faGit} />;
    case "github":
      return <FontAwesomeIcon icon={faGithub} />;
    case "gitlab":
      return <FontAwesomeIcon icon={faGitlab} />;
    case "azdevops":
      return <FontAwesomeIcon icon={faCloud} />;
    case "aws":
      return <FontAwesomeIcon icon={faCloud} />;
    case "linux":
      return <FontAwesomeIcon icon={faTerminal} />;
    case "bash":
      return <FontAwesomeIcon icon={faTerminal} />;
    case "n8n":
      return <ScienceIcon sx={{ fontSize: 16 }} />;
    case "advpl":
      return <ScienceIcon sx={{ fontSize: 16 }} />;
    case "php":
      return <FontAwesomeIcon icon={faPhp} />;
    case "laravel":
      return <FontAwesomeIcon icon={faLaravel} />;
    case "angular":
      return <FontAwesomeIcon icon={faAngular} />;
    case "vue":
      return <FontAwesomeIcon icon={faVuejs} />;
    default:
      return null;
  }
}

export default function SkillsPage() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {t("skills.intro")}
      </Typography>

      <Box
        sx={{
          borderColor: "divider",
          borderRadius: 3,
          p: { xs: 1, sm: 2 },
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={2} alignItems="stretch">
          {skillGroups.map((group) => (
            <Grid key={group.id} size={{ xs: 12, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                      : "linear-gradient(180deg, #101826 0%, #0d1420 100%)",
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    {t(`skills.categories.${group.id}`)}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {group.items.map((id) => (
                      <Chip
                        key={id}
                        icon={
                          <Box
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              "& svg": { fontSize: 14 },
                            }}
                          >
                            {iconFor(id)}
                          </Box>
                        }
                        label={t(`skills.items.${id}`)}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderRadius: 999,
                          px: 1,
                          "& .MuiChip-label": { fontWeight: 600 },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
