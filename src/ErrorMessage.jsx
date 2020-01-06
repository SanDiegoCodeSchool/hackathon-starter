import React from 'react';

export default function ErrorMessage(props){
    return (
        <div className='errorMessage'>
            <p>OOOOh No, we cant find an breweries near the location you searched!!! Please click the button below to start a new search.</p>
            <button>Take me back!</button>
        </div>
    )
}