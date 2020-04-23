import React from 'react';
import ReactDOM from "react-dom"
import { mount, shallow } from 'enzyme';
import Home from "../components/home"

describe("Home", () =>{
    const component = mount(<Home />)
    it("renders image", () =>{
        expect(component.find("img")).toBe(true)
    })
})
