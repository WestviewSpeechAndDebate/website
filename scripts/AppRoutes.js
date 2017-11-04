import React from "react";
import { Router, hashHistory } from "react-router";
import routes from "./Routes";

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={hashHistory} routes={routes}/>
        );
    }
}