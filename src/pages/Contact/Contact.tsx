import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { contacts } from "@/data/contacts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function iconFor(id: "email" | "linkedin" | "github" | "tiktok") {
  switch (id) {
    case "email":
      return faEnvelope;
    case "linkedin":
      return faLinkedin;
    case "github":
      return faGithub;
    case "tiktok":
      return faTiktok;
  }
}

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {t("contact.intro")}
      </Typography>

      <Box
        sx={{ borderColor: "divider", borderRadius: 3, p: { xs: 1, sm: 2 } }}
      >
        <Grid container spacing={2} alignItems="stretch">
          {contacts.map((c) => (
            <Grid key={c.id} item xs={12} md={6} sx={{ display: "flex" }}>
              <Card
                elevation={0}
                sx={{
                  flex: 1,
                  display: "flex",
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                      : "linear-gradient(180deg, #101826 0%, #0d1420 100%)",
                }}
              >
                <CardActionArea
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  sx={{ flex: 1, display: "flex" }}
                >
                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      p: { xs: 2, md: 3 },
                      minHeight: 100,
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Chip
                        icon={
                          <Box
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <FontAwesomeIcon icon={iconFor(c.id)} />
                          </Box>
                        }
                        label=""
                        sx={{
                          bgcolor: c.color || "primary.main",
                          "& .MuiChip-icon": { color: "#fff" },
                          borderRadius: "999px",
                          width: 48,
                          height: 48,
                        }}
                      />
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 800, lineHeight: 1.2 }}
                        >
                          {t(`${c.i18nKey}.title`)}
                        </Typography>
                        {!!c.handle && (
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {c.handle}
                          </Typography>
                        )}
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 0.5,
                            display: "inline-block",
                            color: "primary.main",
                            fontWeight: 700,
                          }}
                        >
                          {t("contact.cta").toUpperCase()}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
