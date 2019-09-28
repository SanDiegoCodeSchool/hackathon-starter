import React, {Component} from 'react';
import axios from 'axios';
import Factoid from './factoid'
import Kitty from './kitty';
/**
 * Example object from cat fact
  {
  "_id": "591d9bb2227c1a0020d26826",
  "text": "The CIA spent US$20 million in the 60s training cats to spy on the Soviets. The first spy cat was hit by a taxi.",
  "type": "cat",
  "user": {
    "_id": "587288f6e6f85e64ae1c7ef7",
    "name": {
      "first": "Alex",
      "last": "Wohlbruck"
    }
  },
  "upvotes": 12,
  "userUpvoted": null
}
 */
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            response: [],
            facts: [],
            kitty: [],
            show: 'off',
            url: '',
            height: '',
            width: ''
        }
        this.getFacts=this.getFacts.bind(this);
        this.makeKitty=this.makeKitty.bind(this);
        this.showKitty=this.showKitty.bind(this);
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
        // var y = x.all;
        console.log(this.state.facts);
        this.setState({
            facts: x
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
            show: 'on',
            kitty: kitten,
            url: kitten.url,
            height: kitten.height,
            width: kitten.width
        });
    }

    render(){
        var display;
        if(this.state.show === 'on'){
            display = <Kitty 
                        url={this.state.url} 
                        height={this.state.height} 
                        width={this.state.width}
                        />
        } else {
            display = <div>No Kitty Yet!</div>
        }
        return(
            <div className='App'>
                <p>Here's some text!</p>
                <button onClick={this.getFacts}>Log Facts</button>
                <div>
                {this.state.facts.map(item =>(
                    <Factoid 
                        key={item.id} 
                        text={item.text+item.id}
                         />
                ))}
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