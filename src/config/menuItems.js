import { Home, Info, Contacts, People, Settings, Help, AccountCircle, Security } from "@mui/icons-material";

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "About", icon: <Info />, path: "/about" },
  { text: "Contact", icon: <Contacts />, path: "/contact" },
  { text: "Users", icon: <People />, path: "/users" },
  {
    text: "Settings",
    icon: <Settings />,
    subItems: [
      { text: "Profile", icon: <AccountCircle />, path: "/settings/profile" },
      { text: "Security", icon: <Security />, path: "/settings/security" },
    ],
  },
  { text: "Help", icon: <Help />, path: "/help" },
];

export default menuItems;
