import React, { Component } from "react";
import SearchBar from "./SearchBar";
import RoboList from "./RoboList";
import { robots } from "./robots";

class App extends Component {
  state = {
    robotList: robots,
    searchTerm: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robotList: users });
      });
  }

  onSearchChange = term => {
    this.setState({
      searchTerm: term
    });
  };

  render() {
    const newList = this.state.robotList.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });

    return (
      <div className="ui container">
        <SearchBar onChange={this.onSearchChange} />
        <RoboList robotList={newList} />
      </div>
    );
  }
}

export default App;
