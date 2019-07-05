import React from "react";
import "./App.css";
class SuccessPage extends React.Component {
  componentDidMount() {
    document.title = "黑马托福";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo2.0.jpg" className="App-logo" alt="Dark Knight TOEFL" />
          <p>{this.props.location.state.res}</p>
        </header>
      </div>
    );
  }
}

export default SuccessPage;
