import React from "react";
import Navbar from "../components/Navbar";
import {
  UserContext,
  ThemeContext,
  LoggedContext,
} from "../context/user-context";
import { users } from "../data/users";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState(users[0]);
  const [theme, setTheme] = React.useState(false);
  const [logged, setLogged] = React.useState(false);
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "setUser":
        return setUser(state);
      case "removeUser":
        return setUser(null);
      default:
        return setUser(users[0]);
    }
  };
  const [userReducer, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LoggedContext.Provider value={{ logged, setLogged }}>
        <UserContext.Provider value={{ userReducer, dispatch, user, setUser }}>
          <Navbar />
          <Component {...pageProps} />
        </UserContext.Provider>
      </LoggedContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
