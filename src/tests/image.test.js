import React from 'react';
import ReactDOM from "react-dom"
import { mount, shallow } from 'enzyme';
import Image from "../components/image"

describe("Image", () =>{
    const data = {
        "main":{
            "temp": 19.9,
            "feels_like": 16.09,
            "temp_min": 18.89,
            "temp_max": 21.11,
            "pressure": 1020,
            "humidity": 40
        },
        "weather":[{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "name":"London"
    }
    const component = mount(<Image />)
    it("loads",() =>{
        expect(component.find("img")).toHaveLength(1)
    })
})