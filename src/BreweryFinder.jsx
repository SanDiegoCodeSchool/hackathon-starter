import React, { Component } from 'react';

class BreweryFinder extends Component {
    constructor(props){
        super(props);
    };

    clickHandler(event){
        this.props.clickHandler(event);
    }


    render(){
        return(
            <div>
                <p>Sooooo how quick are you looking to find this brewery? For the quickest result, press the button on your left.</p>
                    <div className='lookupContainer'>
                        <div className='autoBreweryFinder'>
                            <p>QUICK! Lets find a brewery close to you right...</p>
                            <button type='button' name='breweryQuickFindButton' onClick={this.clickHandler.bind(this)}> MEOW!</button>
                        </div>
                        <div className='breweryLookUp'>
                            <p> So maybe you are looking for a brewery close to somewhere you are going. Thats cool, fill out the form below to get started.</p>
                            <form>
                                Zip Code:<br/>
                                <input type='number' id='userEnteredZipcode' name='zipcodeInput' /><br/>                            
                            </form>
                            <button type='button' name='breweryFindByUserInputButton' onClick={this.clickHandler.bind(this)}>List some breweries! </button>
                        </div>
                    </div>
            </div>
        );
    };
}
export default BreweryFinder;