import React, { Component } from "react";
import SearchBar from "../component/SearchBar";
import RoboList from "../component/RoboList";
import Scroll from "../component/Scroll";

class App extends Component {
  state = {
    robotList: [],
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

    return !this.state.robotList.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="ui container">
        <SearchBar onChange={this.onSearchChange} />
        <Scroll>
          <RoboList robotList={newList} />
        </Scroll>
      </div>
    );
  }
}

export default App;
