import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as restaurantsActions from "../../actions/restaurants";

const styles = theme => ({
  card: {
    width: "18rem",
    marginTop: "8%",
    boxSizing: "border-box"
  },
  media: {
    height: 120
  },
  link: {
    textDecoration: "none"
  },
  linkText: {
    width: "40%",
    fontWeight: 900,
    margin: "30px",
    "&:hover": {
      borderBottom: `3px solid ${theme.palette.primary.light}`
    }
  }
});

class RestaurantsList extends Component {
  componentDidMount = () => {
    this.props.actions.getRestaurants();
  };

  render() {
    const { classes } = this.props;
    const restaurants = this.props.restaurants.map(restaurant => (
      <Card key={restaurant._id} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={restaurant.image}
          title="restaurant image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {restaurant.name}
          </Typography>
          <Typography component="p">
            {`City: ${restaurant.address.city}`}
            <br />
            {`Street: ${restaurant.address.street}`}
          </Typography>
        </CardContent>
        <Link className={classes.link} to={`/restaurant/${restaurant._id}`}>
          <Typography
            variant="h6"
            className={classes.linkText}
            color="primary"
            gutterBottom
          >
            Order Now
          </Typography>
        </Link>
      </Card>
    ));

    return <React.Fragment>{restaurants}</React.Fragment>;
  }
}

const mapStateToProps=(state) =>{
  return {
    restaurants: state.restaurants.restaurants
  };
}

const mapDispatchToProps=(dispatch) =>{
  return {
    actions: bindActionCreators(
      {
        getRestaurants: restaurantsActions.getRestaurants
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RestaurantsList));
