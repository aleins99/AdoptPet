import { Component } from "react";

import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you would log this to something  like TrackJS or NewRelic
    console.log("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Something went wrong <Link to="/">Go back to the homepage</Link>
        </h2>
      );
    }
    // if not error
    return this.props.children;
  }
}

export default ErrorBoundary;
