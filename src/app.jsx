import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {}
    };
    render(){
        return(
            <div className='container'>
                <header>
                    <h1>Welcome to breweryFinder</h1>
                    <h3>The fastest way to find a brewery near you.</h3>
                </header>
                <main>
                    <p>Sooooo how quick are you looking to find this brewery? For the quickest result, press the button on your left.</p>
                    <div className='lookupContainer'>
                        <div className="autoBreweryFinder">
                            <p>QUICK! Lets find a brewery close to you right...</p>
                            <button>MEOW!</button>
                        </div>
                        <div className="breweryLookUp">
                            <p> So maybe you are looking for a brewery close to somewhere you are going. Thats cool, fill out the form below to get started.</p>
                            <form>
                                Zip Code:<br/>
                                <input type="number" name="zipcodeInput" maxlength="5"/><br/>                            
                            </form>
                            <button>List some breweries! </button>
                        </div>
                    </div>
                </main>
                <footer>
                    <h1>footer text</h1>
                </footer>
            </div>
        );
    };


}
export default App;