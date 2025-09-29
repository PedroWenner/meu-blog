import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import { experiences } from "@/data/experiences";
import type { Experience } from "@/data/experiences";
import { useTranslation } from "react-i18next";

function initials(name: string): string {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (
    parts[0].slice(0, 1) + parts[parts.length - 1].slice(0, 1)
  ).toUpperCase();
}

export default function ExperiencePage() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>(
    experiences[0]?.id || false
  );

  function onChange(id: string) {
    setExpanded((prev) => (prev === id ? false : id));
  }

  function formatPeriod(p: Experience["period"]): string {
    const months = t("experience.monthsShort", {
      returnObjects: true,
    }) as string[];
    function ym(x: string): string {
      const [y, m] = x.split("-");
      const idx = Math.max(0, Number(m) - 1);
      return months[idx] + " " + y;
    }
    const start = ym(p.start);
    const end = p.end ? ym(p.end) : t("experience.present");
    return start + " - " + end;
  }

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {t("experience.intro")}
      </Typography>

      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
          p: { xs: 1, sm: 2 },
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02))"
              : "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03))",
        }}
      >
        {experiences.map((item) => {
          const base = item.i18nKey;
          const role = t(base + ".role");
          const summary = t(base + ".summary");
          const activities = t(base + ".activities", {
            returnObjects: true,
          }) as string[];

          return (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={() => onChange(item.id)}
              disableGutters
              elevation={0}
              sx={{
                mb: 1.5,
                borderRadius: 2,
                overflow: "hidden",
                background: (theme) =>
                  theme.palette.mode === "light"
                    ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                    : "linear-gradient(180deg, #101826 0%, #0d1420 100%)",
                border: 1,
                borderColor: "divider",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: { xs: 1, sm: 2 },
                  py: 1,
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    gap: 2,
                    m: 0,
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: item.color || "primary.main",
                    width: 36,
                    height: 36,
                    fontWeight: 700,
                  }}
                >
                  {initials(item.company)}
                </Avatar>

                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    {role}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {formatPeriod(item.period)}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, pb: 2 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {summary}
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  {t("experience.activitiesTitle")}
                </Typography>
                <Stack component="ul" sx={{ pl: 2, mb: 2, gap: 0.5 }}>
                  {activities.map((a, i) => (
                    <Typography key={i} component="li" variant="body2">
                      {a}
                    </Typography>
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  {t("experience.techsTitle")}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {item.techs.map((tk) => (
                    <Chip
                      key={tk}
                      icon={<WorkIcon sx={{ fontSize: 16 }} />}
                      label={tk}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
