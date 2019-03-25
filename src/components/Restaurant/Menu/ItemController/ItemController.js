import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";

class ItemController extends Component {
  render() {
    return (
      <div>
        <Icon
          onClick={() => {
            this.props.addToCart(this.props.item);
          }}
          color="primary"
        >
          <i className="fas fa-plus-circle" />
        </Icon>
        <Icon
          onClick={() => {
            this.props.removeFromCart(this.props.item._id);
          }}
          color="primary"
        >
          <i className="fas fa-minus-circle" />
        </Icon>
      </div>
    );
  }
}

export default ItemController;
