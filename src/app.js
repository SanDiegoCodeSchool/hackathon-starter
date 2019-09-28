import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            facts: []
        }
    }

    componentDidMount(){
        axios
        .get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/')
        .then(response => response.data)
        .then(facts => this.setState({facts}));
    }
    render(){
        return(
            <div>
                <p>Here's some text!</p>
                <Factoid fact={this.state.facts} />
            </div>
        )
    }
}

const Factoid = (props) => (
    <div>
        <p>{props.fact}</p>
        <p>Proof of render</p>
    </div>
)

export default App;