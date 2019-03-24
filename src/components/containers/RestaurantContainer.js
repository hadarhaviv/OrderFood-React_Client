import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as restaurantsActions from "../../actions/restaurants";
import Menu from "../Restaurant/Menu/Menu";
import Typography from "@material-ui/core/Typography";

class RestaurantContainer extends Component {
  componentDidMount = () => {
    this.props.actions.getRestaurantById(this.props.match.params.id);
  };

  render() {
    return (
      <React.Fragment>
        <Typography color="primary" variant="h2" gutterBottom>
          {this.props.restaurant.name}
        </Typography>
        <Menu menu={this.props.restaurant.menu || []} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurants.curRestaurant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getRestaurantById: restaurantsActions.getRestaurantById
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
