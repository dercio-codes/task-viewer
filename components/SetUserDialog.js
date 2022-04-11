import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { users } from "../data/users";
import { UserContext, ThemeContext } from "../context/user-context";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const { user, setUser } = React.useContext(UserContext);
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          background: theme ? "transparent" : "rgba(1,1,1,.9)",
          color: theme ? "grey" : "#eee",
        }}
      >
        Set backup account
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        {users.map((user, index) => (
          <ListItem
            button
            onClick={() => {
              setUser(user);
              console.log(user);
              handleListItemClick(user.email);
            }}
            key={user.id}
            sx={{
              background: theme ? "transparent" : "rgba(1,1,1,.9)",
              color: theme ? "grey" : "#eee",
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.email} />
          </ListItem>
        ))}

        <ListItem
          sx={{
            background: theme ? "transparent" : "rgba(1,1,1,.9)",
            color: theme ? "grey" : "#eee",
          }}
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SetUserDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Account
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
