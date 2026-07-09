import { Box, Typography, Chip, Stack, Paper } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 700,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Me
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          I am a passionate Full Stack Developer who loves building modern web
          applications using React, Django, Python, and Machine Learning.
          I enjoy building smart AI-powered systems and clean UI/UX.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          Skills
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {[
            "React",
            "JavaScript",
            "Python",
            "Django",
            "Node.js",
            "AI / ML",
            "SQL",
            "HTML / CSS",
            "REST API",
          ].map((skill) => (
            <Chip key={skill} label={skill} sx={{ mb: 1 }} />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
