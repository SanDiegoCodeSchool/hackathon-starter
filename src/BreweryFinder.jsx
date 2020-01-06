import React, { Component } from 'react';

class BreweryFinder extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div>
                <p>Sooooo how quick are you looking to find this brewery? For the quickest result, press the button on your left.</p>
                    <div className='lookupContainer'>
                        <div className='autoBreweryFinder'>
                            <p>QUICK! Lets find a brewery close to you right...</p>
                            <button>MEOW!</button>
                        </div>
                        <div className='breweryLookUp'>
                            <p> So maybe you are looking for a brewery close to somewhere you are going. Thats cool, fill out the form below to get started.</p>
                            <form>
                                Zip Code:<br/>
                                <input type='number' name='zipcodeInput' maxlength='5'/><br/>                            
                            </form>
                            <button>List some breweries! </button>
                        </div>
                    </div>
            </div>
        );
    };
}
export default BreweryFinder;