import React, {Component} from 'react';

export default props => (
    <div className='fact-well'>
        <h4 className='fact-title'>Cat Fact:</h4>
        <p onClick={props.toggleFact} className='fact-content'>{props.text}</p>
        <button onClick={props.getFacts} className='change-fact'>Change Cat Fact!</button>
    </div>
)