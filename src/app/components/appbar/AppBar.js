import React from "react";
import style from "./_appbar";
import VerticalNav from "./VerticalNav";
import Appbar from "muicss/lib/react/appbar";
import NavLink from "../navlink/NavLink";
import MediaQuery from "react-responsive";

export default React.createClass({
    render() {
        return (
            <Appbar>
                <NavLink to="/" className="mui--pull-left">Schoolwork</NavLink>
                <div className="nav mui--pull-left">
                    <ul role="nav">
                        <MediaQuery minWidth={769} component="li"><NavLink to="/calendar">Calendar</NavLink></MediaQuery>
                        <MediaQuery minWidth={769} component="li"><NavLink to="/friends">Friends</NavLink></MediaQuery>
                        <MediaQuery minWidth={769} component="li"><NavLink to="/tasks">Tasks</NavLink></MediaQuery>
                        <MediaQuery minWidth={769} component="li"><VerticalNav /></MediaQuery>
                    </ul>
                    <MediaQuery maxWidth={768} component="div"><VerticalNav /></MediaQuery>
                </div>
            </Appbar>
        );
    }
});
