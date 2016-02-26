import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import AppBar from "./AppBar";

describe("AppBar Tests", () => {

    it("render AppBar component properly", () => {

        const dom = TestUtils.renderIntoDocument( <AppBar /> ),
            node = ReactDOM.findDOMNode(dom),
            links = TestUtils.scryRenderedDOMComponentsWithTag(dom, "a"),
            knownLinks = ["Schoolwork", "Calendar", "Friends", "Tasks", "About", "Groups", "Profile"];

        expect(TestUtils.isDOMComponent(node)).toBeTruthy();
        expect(links.length).toEqual(7);
        expect(links[0].textContent).toEqual("Schoolwork");

        links.forEach((el) => {
            expect(knownLinks.indexOf(el.textContent) >= 0).toBeTruthy();
        });
    });
});
