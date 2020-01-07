import React, { Component } from 'react';
import BreweryFinder from './BreweryFinder'
import BreweryLocations from './BreweryLocations';
import ErrorMessage from './ErrorMessage'
import Axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
// Notes on state: localBrewery will house the locations of local breweries using the OpenBreweryDB api.
// currentLocation will house the users current location found using the freeGeoIP api or a user submitted data.
// displayView will tell our application which views to render. A value of 1 will render the BreweryFinder component,
// a value of 2 will render the BreweryLocations component and a value of 3 will display the ErrorMessage component, if
// no local breweries were found.
        this.state = {
            localBrewery : [],
            currentLocation : [],
            displayView : 1,
         }
        //  this.clickHandler=this.clickHandler.bind(this);
    };

    componentDidMount(){
            Axios
            .get('https://freegeoip.app/json/')
            .then(response => response.data)
            .then(currentLocation => this.setState({ currentLocation }));
          }

    clickHandler(event){
        if (event.target.name == 'breweryQuickFindButton'){
            Axios
            .get(`https://api.openbrewerydb.org/breweries?by_postal=${this.state.currentLocation.zip_code}`)
            .then(response => response.data)
            .then(localBrewery => this.setState({ localBrewery }));
            this.setState({ displayView : 2});
        } else if (event.target.name == 'returnToBreweryFinder'){
            this.setState({ displayView : 1});
        } else if (event.target.name == 'breweryFindByUserInputButton') {
            let userEnteredZipcode = document.getElementById('userEnteredZipcode').value;
            Axios
            .get(`https://api.openbrewerydb.org/breweries?by_postal=${userEnteredZipcode}`)
            .then(response => response.data)
            .then(localBrewery => this.setState({ localBrewery }));
            if (this.state.localBrewery.length == 0) {
                this.setState({displayView : 3});
            } else {
                this.setState({ displayView : 2});
            };
        };
    };
    render(){
        let currentView;
        switch(this.state.displayView){
            case 1:
                currentView = <BreweryFinder clickHandler={this.clickHandler.bind(this)}/>
                break;
            case 2:
                currentView = <div>
                                <div className='breweryLocationTable'>
                                <div className='tableHeaders tableName'>Brewery Name</div>
                                <div className='tableHeaders tableWebsite'>Brewery Website</div>
                                <div className='tableHeaders tableAddress'>Brewery Address</div>
                                <div className='tableHeaders tableMap'>Link to map</div>
                              </div>
                                {
                                    this.state.localBrewery.map(breweryInfo => (
                                        <BreweryLocations 
                                        key={breweryInfo['id']}
                                        name={breweryInfo['name']}
                                        website={breweryInfo['website_url']}
                                        street={breweryInfo['street']}
                                        city={breweryInfo['city']}
                                        state={breweryInfo['state']}
                                        zip={breweryInfo['postal_code']}
                                        longitude={breweryInfo['longitude']}
                                        latitude={breweryInfo['latitude']}
                                        />
                                    ))
                                }
                                <button type='button' name="returnToBreweryFinder" onClick={this.clickHandler.bind(this)}>lets start a new search</button>
                              </div>
                break;
            case 3:
                currentView = <ErrorMessage clickHandler={this.clickHandler.bind(this)}/> 
                break;
        }
        return(
            <div className='container'>
                <header>
                    <h1>Welcome to breweryFinder</h1>
                    <h3>The fastest way to find a brewery near you.</h3>
                </header>
                <main>
                    {currentView}
                </main>
            </div>
        );
    };


}
export default App;