import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import Profile from "./Profile";
import index from "./index";

describe("Profile Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();

        const selects = TestUtils.scryRenderedDOMComponentsWithTag(dom, "select");
        expect(selects.length).toEqual(2);

        expect(selects[0].children[0].textContent).toEqual("Gender");
        expect(selects[0].children[1].textContent).toEqual("Female");
        expect(selects[0].children[2].textContent).toEqual("Male");

        expect(selects[1].children[0].textContent).toEqual("Grade");
        expect(selects[1].children[1].textContent).toEqual("Kindergarten");
        expect(selects[1].children[13].textContent).toEqual("12th");

        const inputs = TestUtils.scryRenderedDOMComponentsWithTag(dom, "input");
        expect(inputs.length).toEqual(3);
        expect(inputs[0].getAttribute("label")).toEqual("First Name");
        expect(inputs[1].getAttribute("label")).toEqual("Last Name");
        expect(inputs[2].getAttribute("label")).toEqual("About You?");

        expect(TestUtils.findRenderedDOMComponentWithTag(dom, "button").textContent).toEqual("Save");
    };

    it("render Profile component properly", () => {

        renderComponentAndAssert(Profile);
    });

    it("should handle profile route properly and load the profile appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("profile");
    });

});

