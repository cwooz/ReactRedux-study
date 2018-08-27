import React, { Component } from "react";
// material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            id="name"
            label="Name"
            margin="normal"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <Typography variant="headline" component="h1">
            Value of input: {this.state.term}
          </Typography>
        </div>
        <br />
        {/* <input onChange={this.onInputChange} /> */}
      </div>
    );
  }

  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
}

export default SearchBar;
