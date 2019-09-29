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
            showKitty: false,
            url: '',
            height: '',
            width: '',
            showFact: false,
            override: false
        }
        this.getFacts=this.getFacts.bind(this);
        this.makeKitty=this.makeKitty.bind(this);
        this.showKitty=this.showKitty.bind(this);
        this.hideKitty=this.hideKitty.bind(this);
        this.toggleFact=this.toggleFact.bind(this);
        this.override=this.override.bind(this);
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
        console.log(this.state.width);
        console.log(this.state.height);
    }

    showKitty(){
        let kitten = this.state.kitty[0];
        if(kitten.height > 600 || kitten.width > 800){
            this.setState({
                showKitty: true,
                kitty: kitten,
                url: kitten.url,
                height: kitten.height,
                width: kitten.width,
                override: false
            });
        } else {
            this.setState({
                showKitty: true,
                kitty: kitten,
                url: kitten.url,
                height: kitten.height,
                width: kitten.width
            });
        }
    }

    hideKitty(){
        this.setState({
            showKitty: false
        })
    }

    toggleFact(){
        if(this.state.showFact === false){
            this.setState({
                showFact: true
            });
            this.getFacts();
        } else if(this.state.showFact === true){
            this.setState({
                showFact: false
            });
        }
    }

    override(){
        this.setState({
            override: true
        });
    }

    render(){
        var display;
        if(this.state.showKitty === true && this.state.override === true){
            display = <Kitty 
                        url={this.state.url} 
                        height={this.state.height} 
                        width={this.state.width}
                        hideKitty={this.hideKitty}
                        />
        }
        else if(this.state.showKitty === true && this.state.override === false){
            display =   <div>
                            <p>Kitty is real big! Are you sure?</p>
                            <button onClick={this.override}>Yes!</button>
                        </div>
        } else {
            display = <div>No Kitty Yet!</div>
        }
        var displayFact;
        if(this.state.showFact === true){
            displayFact =   
                <div>
                    <Factoid
                        text={this.state.facts.text}
                    />
                    <div>
                        <button onClick={this.getFacts}>Change Cat Fact!</button>
                    </div>
                </div>
        } else {
            displayFact = <div>No Fact Yet!</div>
        }
        return(
            <div className='app container'>
                <h1 className='title-large'>Welcome to the con-CAT-enator!</h1>
                <h3 className='title-medium'>Please click below for cat facts and pictures!</h3>
                <div className='fact-div'>
                    <button className='fact-button' onClick={this.toggleFact}>Get a cat fact!</button>
                    {displayFact}
                </div>
                <div className='picture-div'>
                    <button className='kitty-button' onClick={this.makeKitty}>Get a kitty!</button>
                    {display}
                </div>
            </div>
        )
    }
}

export default App;