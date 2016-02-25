import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import About from "./About";
import index from "./index";

describe("About Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(node.textContent).toEqual("About Schoolwork");
    };

    it("render About component properly", () => {

        renderComponentAndAssert(About);
    });

    it("should handle about route properly and load the about page appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("about");
    });

});



