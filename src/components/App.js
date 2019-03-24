import React, { Component } from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import RestaurantContainer from "./containers/RestaurantContainer";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import RestaurantsList from "./Restaurant/RestaurantsList";
import * as authActions from "../actions/auth";
import Cart from "./Restaurant/Cart/Cart";
import Login from "./Auth/Login";
import setAuthToken from "../utills/setAuthToken";
import jwt_decode from "jwt-decode";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        this.props.actions.loginSuccess(token);
        this.props.history.push("/");
      }
      // store.dispatch(clearCurrentProfile());
      // store.dispatch(logoutUser());

      // window.location.href = "/login"
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="app">
        <Login />
        {/* <MainContainer>
          <Switch>
            <Route path="/restaurant/:id" component={RestaurantContainer} />
            <Route exact path="/" component={RestaurantsList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </MainContainer> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loginSuccess: authActions.loginSuccess
      },
      dispatch
    )
  };
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
