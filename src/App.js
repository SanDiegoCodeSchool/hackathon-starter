import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inspire: 'ok',
            inspireAuthor: 'ok',
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
 
    componentDidMount() {
        axios.get('http://quotes.rest/qod.json')
        .then(response => {this.setState({ 
        inspire: response.data.contents.quotes[0].quote,
        inspireAuthor: response.data.contents.quotes[0].author,
        });
        });    
    }

    render() {
        return (
            <div id='container'>
                <div id='header'>
                    <h1>{this.state.inspireAuthor}</h1>   
                </div>
                <div id='body'>
                    <p>{this.state.inspire}</p>
                    <div id='img-container'>
                    <img id='api-img-full' src='https://loremflickr.com/api/1/?token=25.poMuGZoYYSPNQfNGIwkFgywxuMggbjyS&width=480&height=480&tag=history' alt='random-image-generator'></img>
                    <img id='api-img-responsive' src='https://loremflickr.com/api/1/?token=25.poMuGZoYYSPNQfNGIwkFgywxuMggbjyS&width=280&height=280&tag=history' alt='random-image-generator'></img>
                    </div>
                </div>
                <div id='footer'>
                    <small>project looking glass</small>
                </div>
            </div>
        )
    }
}

export default App;