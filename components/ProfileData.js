import * as React from "react";
import { Table, Paper } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { users } from "../data/users";
import { UserContext, ThemeContext } from "../context/user-context";

export default function ProfileDataTable() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "32px",
        color: theme ? "grey" : "#eee",
        background: theme ? "transparent" : "rgba(1,1,1,.8)",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: theme ? "grey" : "#eee",
              }}
            >
              Username
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: theme ? "grey" : "#eee",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: theme ? "grey" : "#eee",
              }}
            >
              Location
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: theme ? "grey" : "#eee",
              }}
            >
              Phone
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: theme ? "grey" : "#eee",
              }}
            >
              Website
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: theme ? "grey" : "#eee",
                }}
              >
                {user.username}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme ? "grey" : "#eee",
                }}
              >
                {user.name}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme ? "grey" : "#eee",
                }}
              >
                {user.address.city}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme ? "grey" : "#eee",
                }}
              >
                {user.phone}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme ? "grey" : "#eee",
                }}
              >
                {user.website}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
