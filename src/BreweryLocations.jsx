import React from 'react';

export default function BreweryLocations(props){
    const url = 'https://maps.google.com/?q=' + props.latitude + ',' + props.longitude + props.name;
    return (
        <div className='breweryLocations'>
            <div className='breweryName breweryData'>{props.name}</div>
            <div className='breweryWebsite breweryData'>
                <a href={props.website}>{props.website}</a>
            </div>
            <div className='breweryAddress breweryData'>
                {props.street} <br/> 
                {props.city}, {props.state}
            </div>
            <div className='breweryMap breweryData'>
                <a href={url}>Locate in Google Maps!</a>
            </div>
        </div>
    );
};