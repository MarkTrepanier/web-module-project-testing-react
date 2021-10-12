import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Show from './../Show';
jest.mock('../Loading', ()=>()=>(<>loader</>))

  
const testShow = {
    //add in approprate test data structure here.

    name: 'Letterkenny',
    summary:"Quick-witted, fast-paced snappy comedy about rural folk getting by in a small town.",
    seasons: [
    {name:'season 1', id:'01', episodes: []},{name:'season 2', id:'02', episodes: []},{name:'season 3', id:'03', episodes: []},
    {name:'season 4', id:'04', episodes: []},{name:'season 5', id:'05', episodes: []},{name:'season 6', id:'06', episodes: []},
    {name:'season 7', id:'07', episodes: []},{name:'season 8', id:'08', episodes: []},{name:'season 9', id:'09', episodes: []}]
}

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show={testShow} selectedSeason={'none'}/>);
});

test('renders Loading component when prop show is null', () => {

    render(<Show show={null} selectedSeason={'none'}/>);
    const Loading = screen.queryByText(/loader/i);
    expect(Loading).toHaveTextContent(/loader/i)


});

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={'none'}/>);
    const selector = screen.getByRole('combobox')
    userEvent.click(selector)
    const options = screen.getAllByText(/season/i)
    expect(options.length).toBeGreaterThanOrEqual(9);
    options.map(option=>{expect(option).toBeVisible()});
    
});

test('handleSelect is called when a season is selected', () => {
    // const mockSelect = jest.fn();
    
    // render(<Show show={testShow} handleSelect={mockSelect} selectedSeason={'none'}/>);
    // const selector = screen.getByRole('combobox');
    // userEvent.click(selector);
    // const options = document.querySelectorAll('option')
    
    // expect(mockSelect).toHaveBeenCalled();

});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.