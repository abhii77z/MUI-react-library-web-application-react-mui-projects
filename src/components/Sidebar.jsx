import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import menuItems from "../config/menuItems";
import { Link, useLocation } from "react-router-dom";

const DRAWER_WIDTH = 260;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  const handleClick = (text) => {
    setOpenMenus((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  const isSelected = (path) => {
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const active = isSelected(item.path);
      return (
        <React.Fragment key={item.text}>
          <ListItemButton
            component={item.path ? Link : "div"}
            to={item.path || undefined}
            onClick={
              item.subItems
                ? () => handleClick(item.text)
                : () => {
                    if (mobileOpen) handleDrawerToggle();
                  }
            }
            sx={{
              margin: "4px 12px",
              borderRadius: "8px",
              transition: "all 0.2s ease-in-out",
              color: active ? "primary.main" : "text.secondary",
              backgroundColor: active ? "action.selected" : "transparent",
              "&:hover": {
                backgroundColor: active ? "action.selected" : "action.hover",
                color: "primary.main",
                transform: "translateX(4px)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: active ? "primary.main" : "text.secondary",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: active ? 600 : 500,
                fontSize: "0.95rem",
              }}
            />
            {item.subItems ? (openMenus[item.text] ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
          {item.subItems && (
            <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2 }}>
                {renderMenuItems(item.subItems)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h6" fontWeight="bold" color="primary.main" sx={{ letterSpacing: 1 }}>
          DEV PORTFOLIO
        </Typography>
        <Typography variant="caption" color="text.secondary">
          MUI React Dashboard
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List sx={{ px: 1, flexGrow: 1 }}>
        {renderMenuItems(menuItems)}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer (Temporary) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            borderRight: "1px solid",
            borderColor: "divider",
            background: "linear-gradient(180deg, #fff0f3 0%, #ffffff 100%)", // Milky Rose theme
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer (Permanent) */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            borderRight: "1px solid",
            borderColor: "divider",
            background: "linear-gradient(180deg, #fff0f3 0%, #ffffff 100%)", // Milky Rose theme
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
