import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import Groups from "./Groups";
import index from "./index";

describe("Groups Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(node.textContent).toEqual("Your Groups");
    };

    it("render Groups component properly", () => {

        renderComponentAndAssert(Groups);
    });

    it("should handle groups route properly and load the groups appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("groups");
    });

});
