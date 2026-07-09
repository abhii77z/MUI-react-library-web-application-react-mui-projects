import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import { ExpandMore, Search, Email, Description } from "@mui/icons-material";

const faqs = [
  {
    question: "How do I customize the sidebar options?",
    answer: "You can modify the menu configuration directly inside src/config/menuItems.js. Simply add or update the structure of the objects in that file and import any corresponding icons from @mui/icons-material.",
  },
  {
    question: "Is this portfolio mobile-friendly?",
    answer: "Yes! All components are designed with responsive layout structures using Material-UI Grid systems and fluid spacing to ensure a premium look across smartphones, tablets, and desktops.",
  },
  {
    question: "How can I deploy this application?",
    answer: "You can easily deploy it by running 'npm run build' to bundle the application assets. The output build/ folder can then be hosted on platforms like GitHub Pages, Vercel, Netlify, or Firebase Hosting.",
  },
  {
    question: "What version of React is this app using?",
    answer: "This application is running on React 19, coupled with the latest Material-UI (MUI v7) components, styling utilities, and react-router-dom v6.",
  },
];

const Help = () => {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ maxWidth: 850, margin: "0 auto" }}>
      <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Help Center
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Find answers to frequently asked questions or get in touch with our team.
          </Typography>
        </Box>
        <TextField
          placeholder="Search FAQs..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ bgcolor: "background.paper", borderRadius: 2, width: 280 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="disabled" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Accordions */}
      <Box sx={{ mb: 6 }}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={1}
              sx={{
                mb: 1.5,
                borderRadius: 2,
                "&:before": { display: "none" },
                "&.Mui-expanded": { margin: "0 0 12px 0" },
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 3, py: 1 }}>
                <Typography variant="subtitle1" fontWeight="600">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 1, bgcolor: "action.hover" }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
            <Typography color="text.secondary" variant="body2">
              No matching questions found. Try searching for other topics.
            </Typography>
          </Paper>
        )}
      </Box>

      {/* Contact Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Email color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Email Support
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Have custom questions? Drop an email to our support team and we will get back to you.
            </Typography>
            <Button variant="outlined" size="small" sx={{ borderRadius: 2 }}>
              Contact Us
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Description color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Read Documentation
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Explore advanced development configuration guidelines and framework integration notes.
            </Typography>
            <Button variant="outlined" size="small" sx={{ borderRadius: 2 }}>
              Open Docs
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Help;
