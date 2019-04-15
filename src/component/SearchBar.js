import React, { Component } from "react";
import RoboList from "./RoboList";

class SearchBar extends Component {
  state = {
    term: ""
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form">
          <div class="field">
            <label>Search</label>
            <input type="text" placeholder="Robo Name" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
