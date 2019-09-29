import React, {Component} from 'react';

export default props => (
    <div className='fact well'>
        <h4>Cat Fact:</h4>
        <p>{props.text}</p>
    </div>
)