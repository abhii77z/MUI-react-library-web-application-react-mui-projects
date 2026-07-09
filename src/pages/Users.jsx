import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const mockUsers = [
  { id: 1, name: "Alice Vance", email: "alice@example.com", role: "Product Manager", status: "Active", avatar: "A" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Tech Lead", status: "Away", avatar: "B" },
  { id: 3, name: "Charlie Ding", email: "charlie@example.com", role: "UI/UX Designer", status: "Active", avatar: "C" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Frontend Developer", status: "Offline", avatar: "D" },
  { id: 5, name: "Evan Wright", email: "evan@example.com", role: "Backend Developer", status: "Active", avatar: "E" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Away":
      return "warning";
    default:
      return "default";
  }
};

const Users = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Team Members
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your project collaborators and check their active session states.
          </Typography>
        </Box>
        <TextField
          placeholder="Search members..."
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

      <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 3, overflow: "hidden" }}>
        <Table>
          <TableHead sx={{ bgcolor: "action.hover" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar sx={{ bgcolor: "primary.light", fontWeight: "bold", width: 40, height: 40 }}>
                        {user.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="600">
                          {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.primary">
                      {user.role}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      color={getStatusColor(user.status)}
                      size="small"
                      sx={{ fontWeight: "600", fontSize: "0.75rem" }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    No members match your search criteria.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
