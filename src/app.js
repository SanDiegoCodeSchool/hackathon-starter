import React, {Component} from 'react';
import axios from 'axios';
import Factoid from './factoid'
import Kitty from './kitty';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            response: [],
            facts: [],
            fact: '',
            kitty: [],
            showKitty: 'off',
            url: '',
            height: '',
            width: '',
            showFact: 'off'
        }
        this.getFacts=this.getFacts.bind(this);
        this.makeKitty=this.makeKitty.bind(this);
        this.showKitty=this.showKitty.bind(this);
        this.hideKitty=this.hideKitty.bind(this);
        this.makeFact=this.makeFact.bind(this);
    }

    componentDidMount(){
        axios
            .get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
            .then(response => response.data)
            .then(response => this.setState({ response }));
        axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then(response => response.data)
            .then(kitty => this.setState({ kitty }));
    }

    getFacts(){
        var x = this.state.response.all;
        var min = 0;
        var max = x.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        var fact = x[random];
        console.log(this.state.facts);
        console.log(this.state.fact);
        this.setState({
            facts: fact
        });
    }

    makeKitty(){
        axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then(response => response.data)
            .then(kitty => this.setState({ kitty }));
        this.showKitty();
        console.log(this.state.kitty);
    }

    showKitty(){
        let cat = this.state.kitty;
        let kitten = cat[0];
        console.log('Ran showKitty();')
        this.setState({
            showKitty: 'on',
            kitty: kitten,
            url: kitten.url,
            height: kitten.height,
            width: kitten.width
        });
    }

    hideKitty(){
        this.setState({
            showKitty: 'off'
        })
    }

    makeFact(){
        this.setState({
            showFact: 'on'
        });
    }

    render(){
        var display;
        if(this.state.showKitty === 'on'){
            display = <Kitty 
                        url={this.state.url} 
                        height={this.state.height} 
                        width={this.state.width}
                        hideKitty={this.hideKitty}
                        />
        } else {
            display = <div>No Kitty Yet!</div>
        }
        var displayFact;
        if(this.state.showFact === 'on'){
            displayFact = <Factoid
                            text={this.state.facts.text}
                            />
        } else {
            displayFact = <div>No Fact Yet!</div>
        }
        return(
            <div className='App'>
                <p>Here's some text!</p>
                <div>
                    <button onClick={this.getFacts}>Log Facts</button>
                </div>
                <div>
                    <button onClick={this.makeFact}>Get a cat fact!</button>
                    {displayFact}
                </div>
                <div>
                    <button onClick={this.makeKitty}>Get a kitty!</button>
                    {display}
                    {/* {this.state.kitty.map(kitty =>(
                        <Kitty 
                            key={kitty.id} 
                            url={kitty.url} 
                            height={kitty.height} 
                            width={kitty.width}
                             />
                    ))} */}
                </div>
            </div>
        )
    }
}

export default App;