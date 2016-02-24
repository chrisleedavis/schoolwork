import React from "react";
import style from "./_appbar";
import Button from "muicss/lib/react/button";
import NavLink from "../navlink/NavLink";
import classNames from "classnames";
import MediaQuery from "react-responsive";
import enhanceWithClickOutside from "react-click-outside";

class VerticalNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    handleClick() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleClickOutside() {
        this.setState({ isOpen: false });
    }

    render() {

        const className = classNames("appbar-vert-nav mui-dropdown__menu mui-dropdown__menu--right",
            { "mui--is-open": this.state.isOpen });

        return (
            <div className="mui-dropdown appbar-vert">
                <Button color="primary" variant="fab" size="small" onClick={this.handleClick.bind(this)}>
                    <i className="material-icons md-icon dp48">more_vert</i>
                </Button>
                <ul role="nav" className={className}>
                    <li><NavLink to="/about" onClick={this.handleClick.bind(this)}>About</NavLink></li>
                    <MediaQuery maxWidth={768} component="li">
                        <NavLink to="/calendar" onClick={this.handleClick.bind(this)}>Calendar</NavLink>
                    </MediaQuery>
                    <MediaQuery maxWidth={768} component="li">
                        <NavLink to="/friends" onClick={this.handleClick.bind(this)}>Friends</NavLink>
                    </MediaQuery>
                    <li><NavLink to="/groups" onClick={this.handleClick.bind(this)}>Groups</NavLink></li>
                    <li><NavLink to="/profile" onClick={this.handleClick.bind(this)}>Profile</NavLink></li>
                    <MediaQuery maxWidth={768} component="li">
                        <NavLink to="/tasks" onClick={this.handleClick.bind(this)}>Tasks</NavLink>
                    </MediaQuery>
                </ul>
            </div>
        );
    }
}

export default enhanceWithClickOutside(VerticalNav);

