import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import Friends from "./Friends";
import index from "./index";

describe("Friends Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(node.textContent).toEqual("Your Friends!!!!");
    };

    it("render Friends component properly", () => {

        renderComponentAndAssert(Friends);
    });

    it("should handle friends route properly and load the friends appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("friends");
    });

});



