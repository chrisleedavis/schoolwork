import React from "react";
import AppBar from "./appbar/AppBar";
import Home from "./home/Home";
import style from "./_theme";

export default React.createClass({
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <div>
                <AppBar />
                <div className="content">
                    {this.props.children || <Home />}
                </div>
                <footer>
                    <p>&copy; {currentYear} Schoolwork</p>
                </footer>
            </div>
        );
    }
});
