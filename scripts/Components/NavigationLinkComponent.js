import React from "react";

import { Link } from "react-router";

export default class NavigationLinkComponent extends React.Component {
  render() {
    return (
      <Link className="navigation-link-component-container" to={this.props.path}>
          {this.props.name}
      </Link>
    );
  }
}
