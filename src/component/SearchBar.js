import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onTyping = e => {
    this.setState({ term: e.target.value });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search RoboName"
            onChange={this.onTyping}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
