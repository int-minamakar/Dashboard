import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { APP_NAME } from "../Conestants/conestant";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MODELS } from "../Config/Models";
const OuterDiv = styled.div`
  margin-top: 5%;
  width: 80%;
  margin-left: 10%;
`;
const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfileMenu = Boolean(anchorEl);

  const handleLogout = () => {
    setAnchorEl(null);
    setAuth(false);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (event, status) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(status);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={event => toggleDrawer(event, false)}
      onKeyDown={event => toggleDrawer(event, false)}
    >
      <List>
        {MODELS.map(model => {
          return (
            <Link to={model.url}>
              <ListItem button key={model.name}>
                <ListItemIcon>
                  {model.icon !== undefined ? model.icon : <AccountCircle />}
                </ListItemIcon>
                <ListItemText primary={model.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={event => toggleDrawer(event, true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {APP_NAME}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={openProfileMenu}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <OuterDiv>{children}</OuterDiv>
      <Drawer open={open} onClose={event => toggleDrawer(event, false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
