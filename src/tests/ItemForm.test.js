import React from 'react';
import ItemForm from './../components/forms/ItemForm';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new EnzymeAdapter() });

test("input fields are rendered to the screen", () => {
    const wrapper = shallow(<ItemForm/>);
    const fields = wrapper.find("input");
    expect(fields.length).toBe(8)
});

test("Submit button renders to screen", () => {
    const wrapper = shallow(<ItemForm/>);
    const submitButton = wrapper.find('button.submit-button');
    expect(submitButton.length).toBe(1);
});

// test("Submit button triggers onFormSubmit event", () => {
//     const wrapper = shallow(<ItemForm/>);
//     wrapper.find("form").simulate("submit");

    

//     const theForm = wrapper.find("form");
//     // const submitButton = wrapper.find('button.submit-button');
//     theForm.simulate("submit");

//     expect(theForm.onFormSubmit).toHaveBeenCalled();

// })