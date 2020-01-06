import React from 'react';

export default function BreweryLocations(props){
    // var url = "https://maps.google.com/?q=" + props.location[0] + "," + props.location[1];
    return (
        <div className='breweryLocations'>
            <div className='breweryName'>Modern Times Brewing</div>
            <div className='breweryWebsite'>www.ModernTimes.com</div>
            <div className='breweryAddress'>123 Main St, San Diego, CA 92124</div>
            <div className='breweryMap'>
                <a href='https://www.google.com/maps'>Find in Google Maps!</a>
            </div>
            {/* <a className="btn btn-primary" href={url}>See in Google Maps!</a> */}
        </div>
    );
}