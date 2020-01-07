import React from 'react';

export default function ErrorMessage(props){
    return (
        <div className='errorMessage'>
            <p>Oh no, we cant find any breweries in our database near the location you searched!!! Please click the button below to start a new search.</p>
            <button type='button' className='returnToBreweryFinderButton' name='returnToBreweryFinder' onClick={props.clickHandler}>Take me back!</button>
        </div>
    );
};