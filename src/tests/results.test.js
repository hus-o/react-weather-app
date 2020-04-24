import React from 'react';
import {shallow } from 'enzyme';
import Results from "../components/results"

describe("Results", () => {
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
            }]
        }
    const component = shallow(<Results />)
    component.setState({weatherData:data})
    it("renders weather view", () =>{
        expect(component.find(".weatherDesc").text()).toBe("You'll see some: Clearclear sky")
    })
    it("renders weather temperature", ()=>{
        expect(component.find(".weatherMainData").text()).toBe("Temperature (celcius): 19.9")
    })
})