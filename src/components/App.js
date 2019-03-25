import React, { Component } from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import RestaurantContainer from "./containers/RestaurantContainer";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import RestaurantsList from "./Restaurant/RestaurantsList";
import * as authActions from "../actions/auth";
import Cart from "./Restaurant/Cart/Cart";
import Login from "./Auth/Login";
import jwt_decode from "jwt-decode";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AdminContainer from "./containers/AdminContainer";

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        this.props.actions.loginSuccess(token);
        this.props.history.push("/");
      } else {
        this.props.actions.logoutUser();
        this.props.history.push("/login");
      }
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    let routes = <Route exact path="/login" component={Login} />;

    if (this.props.isAuth) {
      if (this.props.role === "user") {
        routes = (
          <MainContainer>
            <Switch>
              <Route path="/restaurant/:id" component={RestaurantContainer} />
              <Route exact path="/" component={RestaurantsList} />
              <Route exact path="/cart" component={Cart} />
              <Redirect to="/" />
            </Switch>
          </MainContainer>
        );
      } else if (this.props.role === "owner") {
        routes = (
          <MainContainer>
            <Switch>
              <Route exact path="/admin/" component={AdminContainer} />
              <Route exact path="/" component={AdminContainer} />
              <Redirect to="/" />
            </Switch>
          </MainContainer>
        );
      }
    }

    return <div className="app">{routes}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loginSuccess: authActions.loginSuccess,
        logoutUser: authActions.logoutUser
      },
      dispatch
    )
  };
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    role: state.auth.user.role
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
