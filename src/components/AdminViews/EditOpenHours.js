import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class EditOpenHours extends Component {
  state = { open: "", close: "" };

  componentWillReceiveProps = nextProp => {
    if (nextProp.openHours) {
      this.setState({
        open: nextProp.openHours.open,
        close: nextProp.openHours.close
      });
    }
  };

  handleHourChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  

  render() {
    return (
      <Paper style={{ padding: "10px", marginTop: "10px" }}>
        <Typography variant="h6" gutterBottom />
        <List>
          <ListItem>
            {" "}
            <TextField
              onChange={this.handleHourChange}
              name="open"
              label="open"
              value={this.state.open}
            />
          </ListItem>
          <ListItem>
            {" "}
            <TextField
              onChange={this.handleHourChange}
              value={this.state.close}
              name="close"
              label="close"
            />
          </ListItem>
        </List>
        <Button
          onClick={() => {
            this.props.updateHours(this.state);
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

export default EditOpenHours;
