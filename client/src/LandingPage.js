import React from "react";
import logo from "./logo2.0.jpg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = {
  button: {
    margin: 1
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 1
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
            <h3 style={{}}>黑马托福留学交流分享会</h3>

            <img src={logo} className="App-logo" alt="Dark Knight TOEFL" />
            <p>从平凡到非凡</p>
            <Button
              variant="outlined"
              color="primary"
              style={useStyles.button}
              onClick={event => {
                console.log("redirecting to survey page");
                this.props.history.push("/questions");
              }}
            >
              立即报名
            </Button>
          </header>
        </div>
      </div>
    );
  }
}

export default LandingPage;
