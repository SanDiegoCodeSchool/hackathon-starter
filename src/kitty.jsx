import React, { Component } from 'react';

export default props => (
    <div>
        <input type='image' src={props.url} height={props.height} width={props.width} onClick={props.hideKitty}/>
    </div>
)