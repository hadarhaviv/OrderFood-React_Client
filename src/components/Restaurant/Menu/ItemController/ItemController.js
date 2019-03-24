import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../../../actions/order";

class ItemController extends Component {
  addToCart = () => {
    this.props.actions.addToCart(this.props.item);
  };

  removeFromCart = () => {
    this.props.actions.removeFromCart(this.props.item._id);
  };

  render() {
    return (
      <div>
        <Icon onClick={this.addToCart} color="primary">
          <i className="fas fa-plus-circle" />
        </Icon>
        <Icon onClick={this.removeFromCart} color="primary">
          <i className="fas fa-minus-circle" />
        </Icon>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addToCart: orderActions.addToCart,
        removeFromCart: orderActions.removeFromCart
      },
      dispatch
    )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemController);
