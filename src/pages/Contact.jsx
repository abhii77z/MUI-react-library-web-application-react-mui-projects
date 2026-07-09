import { Box, TextField, Button, Paper, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 500,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Contact Me
        </Typography>

        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            paddingY: 1,
            backgroundColor: "#1565c0",
            ":hover": { backgroundColor: "#0d47a1" },
          }}
        >
          SEND MESSAGE
        </Button>
      </Paper>
    </Box>
  );
}
