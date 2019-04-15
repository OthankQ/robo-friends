import React, { Component } from "react";
import SearchBar from "./SearchBar";
import RoboList from "./RoboList";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RoboList />
      </div>
    );
  }
}

export default App;
