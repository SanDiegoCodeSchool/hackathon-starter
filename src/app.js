import React, {Component} from 'react';
import axios from 'axios';
import Factoid from './factoid'
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
            text: ''
        }
        this.onClick=this.onClick.bind(this);
    }

    componentDidMount(){
        axios
        .get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
        .then(response => response.data)
        // .then(facts => console.log(facts));
        .then(response => this.setState({ response }));
        console.log(this.state.response);
    }

    onClick(){
        var x = this.state.response;
        var y = x.all;
        console.log(this.state.facts);
        this.setState({
            facts: y
        });
    }

    render(){
        return(
            <div className='App'>
                <p>Here's some text!</p>
                <button onClick={this.onClick}>Log Facts</button>
                {this.state.facts.map(item =>(
                    <Factoid key={item.id} text={item.text+item.id} />
                ))}
                {/* {this.state.facts} */}
                {/* <Factoid fact={this.state.facts} /> */}
            </div>
        )
    }
}

export default App;