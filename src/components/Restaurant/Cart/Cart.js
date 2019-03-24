import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import ItemController from "../Menu/ItemController/ItemController";
import Button from "@material-ui/core/Button";
import * as ordersActions from "../../../actions/order";
import { bindActionCreators } from "redux";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "5%"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Cart extends Component {
  state = { cartArray: [] };

  componentDidMount = () => {
    const cartArray = Object.values(this.props.cart);
    this.setState({
      cartArray
    });
  };

  handleSubmit = () => {
    const order = {
      restaurantid: this.props.restaurant._id,
      orderitems: this.state.cartArray
    };
    // this.props.actions.submitOrder();
    console.log("sending order: ", order);
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;

    let itemsList = <div>No items in cart</div>;

    if (this.state.cartArray.length > 0) {
      itemsList = (
        <React.Fragment>
          <List>
            {this.state.cartArray.map(item => (
              <ListItem key={item._id}>
                <ListItemText
                  primary={item.name}
                  secondary={`Amount: ${item.quantity}`}
                />
                <ListItemText primary={`ILS ${item.price}`} />
                <ItemController item={item} />
              </ListItem>
            ))}
          </List>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            ORDER
          </Button>
        </React.Fragment>
      );
    }

    return <div className={classes.root}>{itemsList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.orders.cart,
    restaurant: state.restaurants.curRestaurant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        submitOrder: ordersActions.submitOrder
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Cart));
