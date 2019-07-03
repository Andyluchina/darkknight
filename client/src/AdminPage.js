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
class AdminPage extends React.Component {
  componentDidMount() {
    document.title = "黑马托福";
  }

  render() {
    return <div>this is admin page</div>;
  }
}

export default AdminPage;
