import React from 'react';

export default function BreweryLocations(props){
    var url = "https://maps.google.com/?q=" + props.latitude + "," + props.longitude + props.name;
    return (
        <div className='breweryLocations'>
            <div className='breweryName'>{props.name}</div>
            <div className='breweryWebsite'>{props.website}</div>
            <div className='breweryAddress'>{props.street} {props.city},{props.state}</div>
            <div className='breweryMap'>
                <a href={url}>Locate in Google Maps!</a>
            </div>
        </div>
    );
}