import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Security as SecurityIcon, Devices, Key } from "@mui/icons-material";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);

  const handlePasswordUpdate = () => {
    alert("Password updated successfully! (Simulation)");
  };

  return (
    <Box sx={{ maxWidth: 850, margin: "0 auto" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Security Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Configure security features to protect your developer dashboard credentials.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Side - Passwords & 2FA */}
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Key color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Change Password
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Current Password"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="New Password"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm New Password"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  onClick={handlePasswordUpdate}
                  sx={{
                    px: 3,
                    borderRadius: 2,
                    fontWeight: "bold",
                    backgroundColor: "#1565c0",
                    "&:hover": { backgroundColor: "#0d47a1" },
                  }}
                >
                  Update Password
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <SecurityIcon color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Two-Factor Authentication (2FA)
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
              Add an additional layer of safety to your account by requiring an auth token in addition to your username and password.
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={twoFactor}
                  onChange={(e) => setTwoFactor(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="subtitle2" fontWeight="600">
                  {twoFactor ? "2FA Enabled" : "Enable Two-Factor Authentication"}
                </Typography>
              }
            />
          </Paper>
        </Grid>

        {/* Right Side - Active Sessions */}
        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3, height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Devices color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Active Sessions
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Currently logged-in devices.
            </Typography>
            <List>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Devices fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Chrome / Windows 11 (This Device)"
                  secondary="New Delhi, India • Active now"
                  primaryTypographyProps={{ variant: "body2", fontWeight: "600" }}
                  secondaryTypographyProps={{ variant: "caption" }}
                />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ my: 1 }} />
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Devices fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Safari / iOS 17.5"
                  secondary="Mumbai, India • 3 hours ago"
                  primaryTypographyProps={{ variant: "body2", fontWeight: "500" }}
                  secondaryTypographyProps={{ variant: "caption" }}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Security;
