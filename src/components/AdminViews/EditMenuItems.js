import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class EditMenuItems extends Component {
  state = {
    menuItems: {}
  };

  componentWillReceiveProps = nextProp => {
    let itemsObj;
    if (nextProp.menu) {
      itemsObj = nextProp.menu.reduce((obj, item) => {
        obj[item._id] = item;
        return obj;
      }, {});
    }
    this.setState({
      menuItems: { ...itemsObj }
    });
  };

  handleInputChange = e => {
    let event = e.target;
    let newValue = event.value;
    this.setState(prevState => ({
      menuItems: {
        ...prevState.menuItems,
        [event.id]: {
          ...prevState.menuItems[event.id],
          [event.name]: newValue
        }
      }
    }));
  };

  render() {
    let menuItems = "Loading...";
    if (this.props.menu) {
      menuItems = this.props.menu.map(item => (
        <ListItem key={item._id}>
          <TextField
            onChange={this.handleInputChange}
            value={
              this.state.menuItems[item._id]
                ? this.state.menuItems[item._id].name
                : ""
            }
            id={item._id}
            name="name"
            label="name"
          />
          <TextField
            onChange={this.handleInputChange}
            value={
              this.state.menuItems[item._id]
                ? this.state.menuItems[item._id].price
                : ""
            }
            id={item._id}
            name="price"
            label="price"
          />
        </ListItem>
      ));
    }

    return (
      <Paper style={{ padding: "10px" }}>
        <Typography variant="h6" gutterBottom>
          Menu Items
        </Typography>
        <List>{menuItems}</List>
        <Button
          onClick={() => {
            this.props.updateMenu(this.state);
          }}
          variant="contained"
          color="primary"
        >
          UPDATE
        </Button>
      </Paper>
    );
  }
}

export default EditMenuItems;
