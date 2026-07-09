import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import menuItems from "../config/menuItems";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const handleClick = (text) => {
    setOpenMenus((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <React.Fragment key={item.text}>
        <ListItem
          button
          component={item.path ? Link : "div"}
          to={item.path || ""}
          onClick={item.subItems ? () => handleClick(item.text) : null}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
          {item.subItems ? (openMenus[item.text] ? <ExpandLess /> : <ExpandMore />) : null}
        </ListItem>
        {item.subItems && (
          <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {renderMenuItems(item.subItems)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {renderMenuItems(menuItems)}
      </List>
    </Drawer>
  );
};

export default Sidebar;
