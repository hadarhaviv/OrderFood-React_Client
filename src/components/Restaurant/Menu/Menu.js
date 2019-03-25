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
    const { cart } = this.props;

    return (
      <List className={classes.root}>
        {menu.map(item => (
          <ListItem key={item._id}>
            <ListItemText primary={item.name} secondary={item.category} />
            <ListItemText
              primary={`ILS ${
                cart[item._id]
                  ? item.price * cart[item._id].quantity
                  : item.price
              }`}
            />
            <ListItemText
              primary={`Amount: ${
                cart[item._id] ? cart[item._id].quantity : 0
              }`}
            />
            <ItemController
              addToCart={this.props.addToCart}
              removeFromCart={this.props.removeFromCart}
              item={item}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Menu);
