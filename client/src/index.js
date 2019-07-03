import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import Questions from "./Questions";
// import * as serviceWorker from "./serviceWorker";
import SuccessPage from "./SuccessPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/success_page" component={SuccessPage} />
        <Route path="/questions" component={Questions} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
