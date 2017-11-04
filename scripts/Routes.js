import React from "react";
import { Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./Layout";

// Pages
import Home from "./Pages/Home";
import Announcements from "./Pages/Announcements";
import Forms from "./Pages/Forms";
import Tournaments from "./Pages/Tournaments";
import Contact from "./Pages/Contact";

const routes = (
    <Route path="/" history={hashHistory} component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="Announcements" component={Announcements}/>
        <Route path="Forms" component={Forms}/>
        <Route path="Tournaments" component={Tournaments}/>
        <Route path="Contact" component={Contact}/>
    </Route>
);

export default routes;