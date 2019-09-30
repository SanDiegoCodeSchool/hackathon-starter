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
        if(kitten.height > 900 || kitten.width > 1200){
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
                width: kitten.width,
                override: true
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
        var displayImage;
        if(this.state.showKitty === true && this.state.override === true){
            displayImage = <Kitty 
                        url={this.state.url} 
                        height={this.state.height} 
                        width={this.state.width}
                        hideKitty={this.hideKitty}
                        />
        }
        else if(this.state.showKitty === true && this.state.override === false){
            displayImage =  <div className='override-div'>
                                <p>Kitty is real big! Are you sure? ({this.state.height} x {this.state.width})</p>
                                <button onClick={this.override} className='confirm-kitty'>Yes!</button>
                                <button onClick={this.makeKitty} className='reject-kitty'>No, get me a different kitty!</button>
                            </div>
        } else {
            displayImage = <div className='placeholder'>No Kitty Yet!</div>
        }
        var displayFact;
        if(this.state.showFact === true){
            displayFact =   
                <div>
                    <Factoid
                        text={this.state.facts.text}
                        getFacts={this.getFacts}
                        toggleFact={this.toggleFact}
                    />
                </div>
        } else {
            displayFact =   <div className='no-fact'>
                                <button className='fact-button' onClick={this.toggleFact}>Get a cat fact!</button>
                                <div className='placeholder'>No Fact Yet!</div>
                            </div>
        }
        return(
            <div className='app container'>
                <div className='title-div'>
                    <h1 className='title-large'>Welcome to the con-CAT-enator!</h1>
                    <h3 className='title-medium'>Please click below for cat facts and pictures!</h3>
                </div>                    
                <div className='fact-div'>
                    {displayFact}
                </div>
                <div className='picture-div'>
                    <div className='kitty-switch'>
                        {displayImage}
                    </div>
                    <button className='kitty-button' onClick={this.makeKitty}>Get a kitty!</button>
                </div>
            </div>
        )
    }
}

export default App;