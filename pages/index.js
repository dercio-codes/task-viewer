import React from "react";
import { Typography, Box } from "@mui/material";
import ToDo from "../components/ToDo";
import { ToDosArr } from "../data/ToDosArr";
import { UserContext, ThemeContext } from "../context/user-context";
import SetUserDialog from "../components/SetUserDialog";

export default function Home() {
  const { user, setUser } = React.useContext(UserContext);
  const { theme, setTheme } = React.useContext(ThemeContext);

  // console.log(user);
  return (
    <div
      style={{
        background: theme ? "transparent" : "rgba(1,1,1,.9)",
        color: theme ? "grey" : "#eee",
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        Special To Dos
      </Typography>
      <Box sx={{ m: "32px auto", display: "flex", justifyContent: "center" }}>
        <SetUserDialog />
      </Box>
      {ToDosArr.map((todo, index) => {
        // console.log(user);
        if (todo.userId === user.id) {
          return <ToDo key={index} title={todo.title} value={todo.completed} />;
        }
      })}
      <div
        style={{
          margin: "0 auto",
          width: "100%",
        }}
      ></div>
    </div>
  );
}
