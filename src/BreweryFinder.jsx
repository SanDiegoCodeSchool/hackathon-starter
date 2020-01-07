import React, { Component } from 'react';

class BreweryFinder extends Component {
    constructor(props){
        super(props);
    };

    clickHandler(event){
        this.props.clickHandler(event);
    };

    render(){
        return(
            <div>
                <div className='lookupContainer'>
                    <div className='autoBreweryFinder'>
                        <p id='autoBreweryFinderText'>QUICK! Lets find a brewery close to you right...</p>
                        <button className='quickFindButton' type='button' name='breweryQuickFindButton' onClick={this.clickHandler.bind(this)}> NOW!</button>
                    </div>
                    <div className='breweryLookUp'>
                        <p> Or you can look up breweries using a zipcode. Enter a five digit zipcode below and click the button to get started.</p>
                        <form>
                            <input type='number' id='userEnteredZipcode' name='zipcodeInput' placeholder='Zipcode' /><br/>                            
                        </form>
                        <button type='button' className='findBreweryByInputButton' name='breweryFindByUserInputButton' onClick={this.clickHandler.bind(this)}>Find Breweries By Zip</button>
                    </div>
                </div>
            </div>
        );
    };
};
export default BreweryFinder;