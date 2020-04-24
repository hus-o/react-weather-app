import React from 'react';
import ReactDOM from "react-dom"
import { mount, shallow } from 'enzyme';
import Search from "../components/home" 

// get error regarding withRouter should not be used outside Router. However did not want to further break down app with limited time.

describe("Home", () =>{
    const component = shallow(<Search />)
    const input = component.find(".home").find("input").first()

    it("Renders without crashing", () =>{
        const div = document.createElement("div")
        ReactDOM.render(<Search />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    // this test fails as you are using shallow - this only renders top levels. 
    // you are looking for the input, but this is too deeply nested to be rendered by using shallow
    // it("search works", () =>{
    //     input.simulate("change", {target:{value:"London"}})
    //     expect(component.find("input").props("[type='text]").value).toEqual("London")
    // })
}) 
