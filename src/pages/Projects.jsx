import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { GitHub, Launch, Code } from "@mui/icons-material";

const projects = [
  {
    title: "AI Chat Tutor Backend",
    description: "A secure Django and REST-based backend server managing database connections, authentication, and integration with the Gemini API to power live tutoring chats.",
    tags: ["Django", "Python", "REST API", "Gemini API"],
    category: "Backend / AI",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "MUI Dashboard Template",
    description: "A premium responsive admin dashboard constructed using Material-UI v7 and React 19. Designed for state-of-the-art developer consoles.",
    tags: ["React", "MUI v7", "JavaScript"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Obesity Prediction Engine",
    description: "A machine learning pipeline built using Scikit-Learn that predicts obesity risks based on lifestyle habits and physical attributes, with a React Native app wrapper.",
    tags: ["Python", "Scikit-Learn", "React Native"],
    category: "Data Science / Mobile",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Projects Portfolio
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A collection of web applications, APIs, and machine learning projects I have built.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.title}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Chip
                    label={project.category}
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: "bold" }}
                  />
                  <Code color="disabled" />
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="filled" sx={{ bgcolor: "action.hover" }} />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: "space-between" }}>
                <IconButton href={project.github} target="_blank" size="small" color="inherit">
                  <GitHub />
                </IconButton>
                <Button
                  href={project.demo}
                  target="_blank"
                  variant="text"
                  endIcon={<Launch />}
                  size="small"
                  sx={{ fontWeight: "bold" }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
