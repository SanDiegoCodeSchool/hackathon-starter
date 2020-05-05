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
    };

    componentDidMount(){
            Axios.get('/api')
            // .get('https://freegeoip.app/json/')
            // .then(response => response.data)
            .then(currentLocation => this.setState({ currentLocation: {
                city: currentLocation.data.city,
                zip: currentLocation.data.zip,
                state: currentLocation.data.region_name
            }}));
          }
// The clickHandler function will look at the name of the button that was pressed using event.target.name. 
//from there a code block will run depending on the button that was pushed. For example if the 'breweryQuickFindButton'
// on the main page is pressed, then a code will execute a get request on our brewery finding API and update the 'localBrewery'
//state with a list of the breweries supplied by the API. Then the code will update current view by updating the 'displayView' state
// to view number two (which renders a list of the local breweries). The other buttons actions that are exectured here include the
// 'returnToBreweryFinder' and 'breweryFindByUserInputButton' buttons.
    clickHandler(event){
        if (event.target.name == 'breweryQuickFindButton'){
            Axios
            .get(`https://api.openbrewerydb.org/breweries?by_postal=${this.state.currentLocation.zip}`)
            .then(response => response.data)
            .then(localBrewery => this.setState({ localBrewery }))
            .then(() => this.setState({ displayView : 2}));
        } else if (event.target.name == 'returnToBreweryFinder'){
            this.setState({ displayView : 1});
            this.setState({localBrewery: []});
        } else if (event.target.name == 'breweryFindByUserInputButton') {
            let userEnteredZipcode = document.getElementById('userEnteredZipcode').value;
            userEnteredZipcode.length != 5 ? alert('Please enter a 5 digit zipcode!') : 
            Axios
            .get(`https://api.openbrewerydb.org/breweries?by_postal=${userEnteredZipcode}`)
            .then(response => response.data)
            .then(localBrewery => this.setState({ localBrewery }))
            .then( () => {
                if (this.state.localBrewery.length == 0){
                this.setState({displayView : 3});
                } else {
                this.setState({ displayView : 2 });
                }
            });
        };
    };
    render(){
        // the view that is displayed is rendered based on the state value for 'displayView'. If displayView
        // is equal to 1, then the <BreweryFinder> component will render. This componenet is used to search 
        //for a brewery. If displayView is equal to 2, then <BreweryLocations> will render which shows all the 
        //local breweries we found. If displayView is equal to 3, then <ErrorMessage> will render which shows a
        // message that no breweries were found in the area searched.
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
                                    <button type='button' className='returnToBreweryFinderButton' name='returnToBreweryFinder' onClick={this.clickHandler.bind(this)}>Start a new brewery search!</button>
                              </div>
                break;
            case 3:
                currentView = <ErrorMessage clickHandler={this.clickHandler.bind(this)}/> 
                break;
        };
        return(
            <div className='container'>
                <header>
                    <p className='headerTitle'>Welcome to breweryFinder</p>
                    <p className='headerSubTitle'>The fastest way to find a brewery near you.</p>
                </header>
                <main>
                    {currentView}
                </main>
            </div>
        );
    };
};
export default App;