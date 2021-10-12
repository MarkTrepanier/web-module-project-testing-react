import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Display from "../Display";
jest.mock('../Show',()=>()=>{
    <>the data</>
})

test('Renders',()=>{
    render(<Display/>);
})

test('when fetch is pressed, "Show" will display',()=>{
    render(<Display/>);
    const fetchBtn = screen.getByRole('button');
    const show = screen.queryByText(/the data/i)
    expect(show).not.toBeVisible();
    //userEvent.click(fetchBtn);
    expect(show).toBeVisible();
})










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.