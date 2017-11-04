import React from "react";

import NavigationLinkComponent from "./NavigationLinkComponent";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar-container">
        <NavigationLinkComponent name="Home" path="/"/>
        <NavigationLinkComponent name="Announcements" path="Announcements"/>
        <NavigationLinkComponent name="Forms" path="Forms"/>
        <NavigationLinkComponent name="Tournaments" path="Tournaments"/>
        <NavigationLinkComponent name="Contact" path="Contact"/>
      </div>
    );
  }
}
