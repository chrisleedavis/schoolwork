import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import Home from "./Home";
import index from "./index";

describe("Home Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(TestUtils.findRenderedDOMComponentWithTag(dom, "h2").textContent).toEqual("Welcome to Schoolwork");
        expect(TestUtils.findRenderedDOMComponentWithTag(dom, "button").textContent).toEqual("Click Me");
    };

    it("render Home component properly", () => {

        renderComponentAndAssert(Home);
    });

    it("should handle home route properly and load the home page appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("home");
    });

});

