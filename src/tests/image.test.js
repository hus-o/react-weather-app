import React from 'react';
import { mount} from 'enzyme';
import Image from "../components/image"

describe("Image", () =>{
    const component = mount(<Image />)
    it("loads 1 image",() =>{
        expect(component.find("img")).toHaveLength(1)
    })
})