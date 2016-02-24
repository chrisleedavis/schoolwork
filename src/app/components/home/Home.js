import React from "react";
import style from "./_home";
import Button from "muicss/lib/react/button";

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Welcome to Schoolwork</h1>
                <Button color="primary">Click Me</Button>
            </div>
        );
    }
});
