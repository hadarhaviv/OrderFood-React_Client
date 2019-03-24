import React, { Component } from "react";
import background from "../../img/background.jpg";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../actions/auth";

const styles = theme => ({
  loginContainer: {
    backgroundImage: `url("${background}")`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  container: {
    maxWidth: "250px",
    position: "absolute",
    top: "30%",
    left: "20%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Login extends Component {
  state = {
    role: "User",
    action: null,
    email: "",
    password: ""
  };

  componentDidMount = () => {
    this.setState({
      action: this.props.actions.userLogin
    });
  };

  onSwitch = () => {
    let role;
    let action;
    if (this.state.role === "User") {
      role = "Ádmin";
      action = this.props.actions.adminLogin;
    } else {
      role = "User";
      action = this.props.actions.userLogin;
    }
    this.setState({
      role,
      action
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.state.action(user);
  };

  render() {
    const { classes } = this.props;

    const loginAsText = this.state.role === "User" ? "Admin" : "User";

    return (
      <div className={classes.loginContainer}>
        <Button
          onClick={this.onSwitch}
          variant="outlined"
          className={classes.button}
        >
          {`Switch to ${loginAsText} login`}
        </Button>
        <form className={classes.container} noValidate autoComplete="off">
          <Typography variant="h4" gutterBottom>
            {`${this.state.role} Login`}
          </Typography>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            name="password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <Button onClick={this.handleLogin} className={classes.button}>
            LOGIN
          </Button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     cart: state.orders.cart,
//     restaurant: state.restaurants.curRestaurant
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        userLogin: authActions.userLogin,
        adminLogin: authActions.adminLogin
      },
      dispatch
    )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Login));
