import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <h1>There was an error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
