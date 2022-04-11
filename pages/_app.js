import React from "react";
import Navbar from "../components/Navbar";
import { UserContext, ThemeContext  ,LoggedContext} from "../context/user-context";
import { users } from "../data/users";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(UserContext);
  // const {user,setUser} = React.useContext(UserContext)
  // const [user,setUser] = React.useState("John Reece")
  const [user, setUser] = React.useState(users[0]);
  const [theme, setTheme] = React.useState(false);
  const [logged , setLogged] = React.useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LoggedContext.Provider value={{logged , setLogged}}>

      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
      </LoggedContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
