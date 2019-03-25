import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as ordersActions from "../../../actions/order";
import { bindActionCreators } from "redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
  state = { cartArray: [], totalPrice: 0 };

  componentDidMount = () => {
    const cartArray = Object.values(this.props.cart);
    let totalPrice = cartArray.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    this.setState({
      cartArray,
      totalPrice: totalPrice.toFixed(2)
    });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.orderComplete) {
      this.props.history.push("/");
    }
  };

  handleSubmit = () => {
    const order = {
      restaurantid: this.props.restaurant._id,
      orderitems: this.state.cartArray,
      userid: this.props.user.id
    };
    this.props.actions.submitOrder(order);
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;

    let itemsList = <div>No items in cart</div>;

    if (this.state.cartArray.length > 0) {
      itemsList = (
        <Paper>
          <List>
            {this.state.cartArray.map(item => (
              <ListItem key={item._id}>
                <ListItemText
                  primary={item.name}
                  secondary={`Amount: ${item.quantity}`}
                />
                <ListItemText primary={`ILS ${item.price * item.quantity}`} />
              </ListItem>
            ))}
          </List>
          <List>{`Total Price: ${this.state.totalPrice}`}</List>
        </Paper>
      );
    }

    return (
      <div className={classes.root}>
        <Button color="secondary">CANCEL</Button>
        <Typography variant="h2" gutterBottom>
          MY CART
        </Typography>
        {itemsList}
        <Button
          style={{ float: "right", zIndex: "10" }}
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
        >
          ORDER
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.orders.cart,
    loading: state.orders.loading,
    orderComplete: state.orders.orderComplete,
    restaurant: state.restaurants.curRestaurant,
    user: state.auth.user
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
