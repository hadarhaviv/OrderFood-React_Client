import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import NavBar from "../Navigation/NavBar";

const styles = theme => ({
  container: {
    paddingRight: "10px",
    paddingLeft: "10px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

class MainContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <div className={classes.container}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MainContainer);
