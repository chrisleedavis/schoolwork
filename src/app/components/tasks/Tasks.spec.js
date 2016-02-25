import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import Tasks from "./Tasks";
import index from "./index";

describe("Tasks Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(node.textContent).toEqual("Your Tasks");
    };

    it("render Tasks component properly", () => {

        renderComponentAndAssert(Tasks);
    });

    it("should handle tasks route properly and load tasks appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("tasks");
    });

});

