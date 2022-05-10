import * as React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SetUserDialog from "../components/SetUserDialog";
import ProfileDataTable from "../components/ProfileData";
import { UserContext, ThemeContext } from "../context/user-context";

const Profile = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { user, setUser } = React.useContext(UserContext);
  const userContext = React.useContext(UserContext)

  
  // const [city, setCity] = React.useState(user.address.city);
  const [newUser, setNewUser] = React.useState(user);
  
  const [userWeather, setUserWeather] = React.useState({
    icon: "",
    description: "",
    temperature: "",
    city: "",
    timezone: "",
    date: new Date().toDateString(),
  });
  
  
  let theUser = userContext.user 
  console.log(theUser);
  async function FetchWeather(){
    const apiKey = "8cb9ca89adb9413e84bec37a165b0c9a";
    fetch(`https://api.weatherbit.io/v2.0/current?city=${theUser.address.city}&key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      let tempData = {
        icon: `https://www.weatherbit.io/static/img/icons/${data["data"][0]["weather"]["icon"]}.png`,
        description: `${data["data"][0]["weather"]["description"]}`,
        temperature: data["data"][0]["temp"],
        timezone: data["data"][0]["timezone"],
        city: data["data"][0]["city_name"],
      };
      setUserWeather(tempData);
      // console.log(tempData);
    });
  }

  React.useEffect(() => {
    FetchWeather()
  }, [user , FetchWeather]);

  return (
    <Box
      sx={{
        padding: "32px",
        background: theme ? "transparent" : "rgba(1,1,1,.9)",
        color: theme ? "grey" : "#eee",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <Paper
            elevation={5}
            sx={{
              minHeight: "80vh",
              padding: "40px",
              background: theme ? "transparent" : "rgba(1,1,1,.8)",
            }}
          >
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  //   background: "pink",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: theme ? "grey" : "#eee",

                  }}
                >
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user.name} src="/image.png" />
                  </IconButton>
                  <Typography
                    sx={{
                      margin: "0 21px",
                    }}
                  >
                    {user.name}
                  </Typography>
                </Box>
                <SetUserDialog />
              </Box>
              <ProfileDataTable />
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={5}
            sx={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme ? "grey" : "#eee",
              background: theme ? "transparent" : "rgba(1,1,1,.8)",
            }}
          >
            <Stack>
              <img
                src={userWeather.icon}
                width="200px"
                height="200px"
                style={{
                  objectFit: "contain",
                }}
              />
              <Typography align="center" sx={{ margin: "8px 0" }} variant="h2">
                {userWeather.temperature}
                {"°C"}
              </Typography>
              <Typography align="center" sx={{ margin: "8px 0" }} variant="h4">
                {userWeather.city}
              </Typography>
              <Typography align="center" sx={{ margin: "8px 0" }} variant="h5">
                {userWeather.timezone}
              </Typography>
              <Typography
                align="center"
                sx={{ margin: "8px 0" }}
                variant="small"
              >
                {userWeather.date}
              </Typography>
              <Typography align="center" sx={{ margin: "8px 0" }} variant="h5">
                {userWeather.description}
              </Typography>
              <Button onClick={()=>{
                FetchWeather()
              }}>Refresh</Button>
            </Stack>
          </Paper>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Profile;
