import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import Calendar from "./Calendar";
import index from "./index";

describe("Calendar Tests", () => {

    const renderComponentAndAssert = (Component) => {
        const dom = TestUtils.renderIntoDocument( <Component /> ),
            node = ReactDOM.findDOMNode(dom);

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(node.textContent).toEqual("Schoolwork Calendar");
    };

    it("render Calendar component properly", () => {

        renderComponentAndAssert(Calendar);
    });

    it("should handle calendar route properly and load the calendar appropriately", () => {

        const cb = (location, component) => {
            renderComponentAndAssert(component);
        };

        index.getComponent(null, cb);
        expect(index.path).toEqual("calendar");
    });

});


