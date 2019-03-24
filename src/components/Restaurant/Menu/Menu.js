import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import ItemController from "./ItemController/ItemController";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Menu extends Component {
  render() {
    const { classes } = this.props;
    const { menu } = this.props;

    return (
      <List className={classes.root}>
        {menu.map(item => (
          <ListItem key={item._id}>
            <ListItemText primary={item.name} secondary={item.category} />
            <ListItemText primary={`ILS ${item.price}`} />
            <ItemController item={item} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Menu);
