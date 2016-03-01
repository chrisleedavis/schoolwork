import React from "react";
import ReactDOM from "react-dom";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import style from "./_profile";

export default React.createClass({
    render() {
        return (
            <div>
                <h2>Your Profile</h2>
                <Form inline={true}>
                    <Input label="First Name" required={true} floatingLabel={true} />
                    <Input label="Last Name" required={true} floatingLabel={true} />
                    <div>
                        <Select defaultValue="Gender">
                            <Option value="Gender" label="Gender" />
                            <Option value="Female" label="Female" />
                            <Option value="Male" label="Male" />
                        </Select>
                        <Select defaultValue="Grade">
                            <Option value="Grade" label="Grade" />
                            <Option value="K" label="Kindergarten" />
                            <Option value="1" label="1st" />
                            <Option value="2" label="2nd" />
                            <Option value="3" label="3rd" />
                            <Option value="4" label="4th" />
                            <Option value="5" label="5th" />
                            <Option value="6" label="6th" />
                            <Option value="7" label="7th" />
                            <Option value="8" label="8th" />
                            <Option value="9" label="9th" />
                            <Option value="10" label="10th" />
                            <Option value="11" label="11th" />
                            <Option value="12" label="12th" />
                        </Select>
                    </div>
                    <div>
                        <Input label="About You?" floatingLabel={true} />
                    </div>
                    <Button color="accent">Save</Button>
                </Form>
            </div>
        );
    }
});
