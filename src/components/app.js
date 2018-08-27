import React, { Component } from "react";
// import ReactDOM from "react-dom";
//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// components
import NavBar from "./material-ui/NavBar";
import PaperSheet from "./material-ui/PaperSheet";
import InsetDividers from "./material-ui/InsetDividers";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <InsetDividers />
          </Grid>
          <Grid item xs={6}>
            <PaperSheet />
          </Grid>
        </Grid>
        <br />
        <Paper style={{ marginTop: "20px" }}>
          <h1>code.</h1>
        </Paper>
      </div>
    );
  }
}
