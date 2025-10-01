import React from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import {
    Box, Breadcrumbs, Link, Typography, Card, CardContent, Chip, Stack, Divider, Button
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";
import { getProjectBySlug } from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectDetail() {
    const { slug = "" } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const project = getProjectBySlug(slug);

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    if (!project) {
        return (
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Projeto não encontrado</Typography>
                <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/projects")}>
                    {t("projects.breadcrumb.projects")}
                </Button>
            </Box>
        );
    }

    const title = t(project.titleKey);
    const about = t(project.aboutKey);
    const features = project.featuresKeys.map(k => t(k));

    function labelForLink(type: "github" | "nuget" | "live") {
        switch (type) {
            case "github": return t("projects.btn.github");
            case "nuget": return t("projects.btn.nuget");
            case "live": return t("projects.btn.live");
        }
    }
    function iconForLink(type: "github" | "nuget" | "live") {
        switch (type) {
            case "github": return <FontAwesomeIcon icon={faGithub} />;
            case "nuget": return <Box component="span" sx={{ fontWeight: 900 }}>NuGet</Box>;
            case "live": return <FontAwesomeIcon icon={faExternalLinkAlt} />;
        }
    }

    return (
        <Box>
            {/* Breadcrumb */}
            <Breadcrumbs sx={{ mb: 2 }}>
                <Link component={RouterLink} to="/" underline="hover" color="inherit">
                    {t("projects.breadcrumb.home")}
                </Link>
                <Link component={RouterLink} to="/projects" underline="hover" color="inherit">
                    {t("projects.breadcrumb.projects")}
                </Link>
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>

            {/* Header do projeto */}
            <Card
                elevation={0}
                sx={{
                    mb: 2,
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    background: (theme) =>
                        theme.palette.mode === "light"
                            ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                            : "linear-gradient(180deg, #101826 0%, #0d1420 100%)"
                }}
            >
                <CardContent sx={{ display: "flex", gap: 2, alignItems: "flex-start", p: { xs: 2, md: 3 } }}>
                    <Box
                        component="img"
                        src={project.image}
                        alt=""
                        sx={{
                            width: 120, height: 120, objectFit: "cover",
                            borderRadius: 2, border: 1, borderColor: "divider", flexShrink: 0
                        }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                            {t(project.descKey)}
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
                            {t("projects.detail.technologies")}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                            {project.techs.map(tech => (
                                <Chip key={tech} label={tech} size="small" variant="outlined" />
                            ))}
                        </Stack>
                        
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {project.links.map(l => (
                                <Button
                                    key={l.type}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={iconForLink(l.type)}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        borderRadius: 999, 
                                        textTransform: "none", 
                                        justifyContent: "center", 
                                        width: { xs: "100%", sm: "auto" }
                                    }}
                                >
                                    {labelForLink(l.type)}
                                </Button>
                            ))}
                        </Stack>
                    </Box>
                </CardContent>
            </Card>

            {/* Seção: Sobre o Projeto */}
            <Card
                elevation={0}
                sx={{
                    mb: 2, borderRadius: 3, border: 1, borderColor: "divider",
                    background: (theme) =>
                        theme.palette.mode === "light"
                            ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                            : "linear-gradient(180deg, #101826 0%, #0d1420 100%)"
                }}
            >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                        {t("projects.detail.about")}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {about}
                    </Typography>
                </CardContent>
            </Card>

            {/* Seção: Funcionalidades */}
            <Card
                elevation={0}
                sx={{
                    borderRadius: 3, border: 1, borderColor: "divider",
                    background: (theme) =>
                        theme.palette.mode === "light"
                            ? "linear-gradient(180deg, #f7f9fc 0%, #f5f7fb 100%)"
                            : "linear-gradient(180deg, #101826 0%, #0d1420 100%)"
                }}
            >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>
                        {t("projects.detail.features")}
                    </Typography>
                    <Stack gap={1}>
                        {features.map((f, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    border: 1, borderColor: "divider", borderRadius: 2,
                                    px: 2, py: 1, bgcolor: "action.hover"
                                }}
                            >
                                <Typography variant="body2">{f}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}