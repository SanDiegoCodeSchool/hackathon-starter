import React, { Component } from 'react';
import BreweryFinder from './BreweryFinder'
import BreweryLocations from './BreweryLocations';
import ErrorMessage from './ErrorMessage'

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
                    {/* <BreweryFinder/> */}
                    <div className='breweryLocationTable'>
                        <div className='tableHeaders tableName'>Brewery Name</div>
                        <div className='tableHeaders tableWebsite'>Brewery Website</div>
                        <div className='tableHeaders tableAddress'>Brewery Address</div>
                        <div className='tableHeaders tableMap'>Link to map</div>
                    </div>
                    <BreweryLocations/>
                    <button>lets start a new search</button>
                    {/* <ErrorMessage/> */}
                    
                </main>
                <footer>
                    <h1>footer text</h1>
                </footer>
            </div>
        );
    };


}
export default App;