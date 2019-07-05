import React from "react";
//import logo from "./logo2.0.jpg";
import "./App.css";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = {
  button: {
    margin: 1
  },
  root: {
    flexGrow: 1
  }
};
class LandingPage extends React.Component {
  componentDidMount() {
    document.title = "黑马托福";
  }

  render() {
    return (
      <div>
        <div className="App">
          <div style={useStyles.root}>
            <AppBar position="absolute" color="inherit">
              <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                  Dark Knight TOEFL
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <header className="App-header">
            <h2 style={{}}>黑马托福留学交流分享会</h2>
            <img
              src="logo2.0.jpg"
              className="App-logo"
              alt="Dark Knight TOEFL"
            />
            <p>从平凡，到非凡</p>
            <br />
            <Button
              variant="outlined"
              color="primary"
              style={useStyles.button}
              onClick={event => {
                this.props.history.push("/questions");
              }}
            >
              在这里开始
            </Button>
          </header>
        </div>
      </div>
    );
  }
}

export default LandingPage;
