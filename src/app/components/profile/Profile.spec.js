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
        expect(node.textContent).toEqual("Your Profile");
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

