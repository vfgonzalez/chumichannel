import React, { Component } from "react";
import "./Main.css";
import TopNav from "../components/Navigation/Nav"
import Body from "../components/Body/Body"

class Main extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <h1>The Chumi Channel</h1>
        <Body/>
      



      </div>
    );
  }
}

export default Main;