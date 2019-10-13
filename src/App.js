import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kjoke: 'ok',
            tjoke: 'ok',
            inspire: 'ok',
            inspireAuthor: 'ok',
            inspireBackground: null
        };
        this.kanyeWestQuoteHandler = this.kanyeWestQuoteHandler.bind(this);
    }
// this is in order to see changes in a branch
    kanyeWestQuoteHandler() {
        axios.get('https://api.kanye.rest')
            .then(response => {this.setState({kjoke: response.data.quote})} );

        axios.get('http://quotes.rest/qod.json')
            .then(response => {this.setState({ 
            inspire: response.data.contents.quotes[0].quote,
            inspireAuthor: response.data.contents.quotes[0].author,
            inspireBackground: response.data.contents.quotes[0].background
            });
            console.log(response.data);
            });
        
        axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
            .then(response => {this.setState({tjoke: response.data.message})} );

    }
    
    render() {
        return (
            <div>
                <h1>Who said this?</h1>
                <button onClick={this.kanyeWestQuoteHandler}>Generate</button>
                <p>{this.state.kjoke}</p>
                <p>{this.state.tjoke}</p>
                <p>{this.state.inspire}</p>
                <p>{this.state.inspireAuthor}</p>
                <img src={this.state.inspireBackground}></img>
            </div>
        )
    }
}

export default App;