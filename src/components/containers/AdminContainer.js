import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as restaurantsActions from "../../actions/restaurants";
import EditMenuItems from "../AdminViews/EditMenuItems";
import EditOpenHours from "../AdminViews/EditOpenHours";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class AdminContainer extends Component {
  componentDidMount = () => {
    this.props.actions.getRestaurantByOwner(this.props.userid);
  };

  updateMenu = menu => {
    this.props.actions.updateResMenu(
      Object.values(menu.menuItems),
      this.props.curRestaurant._id
    );
  };

  updateHours = openHours => {
    console.log(openHours);
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h3" gutterBottom>
          Admin Page
        </Typography>
        <Paper elevation={1}>
          <EditMenuItems
            updateMenu={this.updateMenu}
            menu={this.props.curRestaurant.menu}
          />
          <EditOpenHours openHours={this.props.curRestaurant.openhours} />
        </Paper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.auth.user.id,
    curRestaurant: state.restaurants.curRestaurant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getRestaurantByOwner: restaurantsActions.getRestaurantByOwner,
        updateResMenu: restaurantsActions.updateResMenu
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContainer);
