import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import App from "./App";

describe("App Tests", () => {

    it("render App component properly", () => {

        // Render the router in the document
        const dom = TestUtils.renderIntoDocument(<App />),
            node = ReactDOM.findDOMNode(dom),
            currentYear = new Date().getFullYear();

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(TestUtils.findRenderedDOMComponentWithClass(dom, "mui-appbar")).not.toBeUndefined();
        expect(TestUtils.findRenderedDOMComponentWithTag(dom, "footer").textContent.substring(1)).toEqual(" " + currentYear + " Schoolwork");
    });

});
