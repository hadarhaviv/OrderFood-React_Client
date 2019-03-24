import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    width: "100%"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  grow: {
    flexGrow: 1
  },
  menuItem: {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    "& i": {
      color: "white"
    }
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    const title = "Tasty Food";
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link className={classes.menuItem} to="/">
              <Typography variant="h6" color="inherit">
                {title}
              </Typography>
            </Link>
            <div className={classes.grow} />
            <Link className={classes.menuItem} to="/cart">
              <MenuItem>
                <i className="fas fa-shopping-cart" />
              </MenuItem>
            </Link>
            <Button color="inherit">
              <Link className={classes.menuItem} to="/login">
                Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
