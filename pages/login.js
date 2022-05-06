import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { users } from "../data/users";
import { useRouter } from "next/router";
import {
  UserContext,
  LoggedContext,
  ThemeContext,
} from "../context/user-context";
import CircularProgress from "@mui/material/CircularProgress";

const login = () => {
  const router = useRouter();
  const { user, setUser } = React.useContext(UserContext);
  const [logged, setLogged] = React.useState(LoggedContext);
  const [processing, setProcessing] = React.useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);

  const [form, formData] = React.useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    formData((prevState) => ({ ...prevState, [name]: value }));

    // console.log("value typed is:", value);
  }

  const handleSubmit = (e) => {
    // console.log(form);
    setProcessing(true);
    users.map((authUser, index) => {
      let rightCredentials = authUser.username + authUser.id;
      if (rightCredentials === form.password) {
        // console.log(form.password);
        // console.log(authUser);
        setUser(user);
        router.push("/");
      }
    });
  };
  if (logged) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
          color: theme ? "grey" : "#eee",
          background: theme ? "transparent" : "rgba(1,1,1,.9)",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "600px",
            padding: "32px",
            margin: "auto auto",
            color: theme ? "grey" : "#eee",
            background: theme ? "transparent" : "rgba(1,1,1,.7)",
          }}
        >
          <Box component="form" noValidate autoComplete="off">
            <Typography variant="h2">Login</Typography>
            <TextField
              onChange={handleChange}
              name="username"
              label="username"
              value={form.username}
              variant="standard"
              sx={{
                width: "45%",
                background: theme ? "transparent" : "rgba(0,0,1,.9)",
                color: theme ? "grey" : "#eee",
              }}
            />
            <TextField
              onChange={handleChange}
              label="Password"
              type="password"
              name="password"
              value={form.passowrd}
              variant="standard"
              sx={{
                width: "45%",
                background: theme ? "transparent" : "rgba(0,0,1,.9)",
                color: theme ? "grey" : "#eee",

                marginLeft: "8px",
              }}
            />
            <Button
              onClick={handleSubmit}
              sx={{
                width: "100%",
                margin: "16px 0",
              }}
            >
              {processing ? <CircularProgress /> : "Log In"}
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }
};

export default login;
