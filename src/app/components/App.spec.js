import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import App from "./App";

describe("App Tests", () => {

    it("render App component properly", () => {

        // Render the router in the document
        const app = TestUtils.renderIntoDocument(
                <div><App /></div>
            ),
            appNode = ReactDOM.findDOMNode(app);

        expect(TestUtils.isDOMComponent(appNode)).toBeTruthy();
    });

});
