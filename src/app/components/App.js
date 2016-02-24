import React from "react";
import AppBar from "./appbar/AppBar";
import Home from "./home/Home";
import style from "./_theme";

export default React.createClass({
    render() {
        return (
            <div>
                <AppBar />
                <div className="content">
                    {this.props.children || <Home />}
                </div>
            </div>
        );
    }
});
