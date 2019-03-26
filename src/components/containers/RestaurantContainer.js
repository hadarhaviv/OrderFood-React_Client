import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as restaurantsActions from "../../actions/restaurants";
import Menu from "../Restaurant/Menu/Menu";
import Typography from "@material-ui/core/Typography";
import * as orderActions from "../../actions/order";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class RestaurantContainer extends Component {
  state = {
    restaurantid: null
  };

  componentDidMount = () => {
    this.props.actions.getRestaurantById(this.props.match.params.id);
  };

  addToCart = item => {
    this.props.actions.addToCart(item);
  };

  handleCancel = () => {
    this.props.actions.cancelOrder();
    this.props.history.push("/");
  };

  removeFromCart = itemid => {
    this.props.actions.removeFromCart(itemid);
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Button onClick={this.handleCancel} color="secondary">
          CANCEL
        </Button>
        <Typography align="center" color="primary" variant="h2" gutterBottom>
          {this.props.restaurant.name}
        </Typography>
        <Button
          style={{ float: "right", zIndex: "10" }}
          variant="contained"
          color="primary"
        >
          <Link color="inherit" to="/cart">
            Checkout
          </Link>
        </Button>
        <Menu
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          menu={this.props.restaurant.menu || []}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurants.curRestaurant,
    cart: state.orders.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getRestaurantById: restaurantsActions.getRestaurantById,
        addToCart: orderActions.addToCart,
        removeFromCart: orderActions.removeFromCart,
        cancelOrder: orderActions.cancelOrder
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
