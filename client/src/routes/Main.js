import React, { Component } from "react";
import "./Main.css";
import TopNav from "../components/Navigation/Nav"
import Body from "../components/Body/Body"

class Main extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Body/>
      



      </div>
    );
  }
}

export default Main;