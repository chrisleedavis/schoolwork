import React from "react";
import { Router, browserHistory } from "react-router"; //browserHistory for html5 support (from hashHistory)

const rootRoute = {
    component: "div",
    childRoutes: [ {
        path: "/",
        component: require("./components/App").default,
        childRoutes: [
            require("./components/about").default,
            require("./components/calendar").default,
            require("./components/friends").default,
            require("./components/groups").default,
            require("./components/home").default,
            require("./components/profile").default,
            require("./components/tasks").default
        ]
    } ]
};

export default React.createClass({
    render() {
        return (
            <Router history={browserHistory} routes={rootRoute} />
        );
    }
})
