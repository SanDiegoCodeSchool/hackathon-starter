import React, { Component } from 'react';

export default props => (
    <div>
        <p>I'm printing something! {props.url}</p>
        <img src={props.url} height={props.height} width={props.width}></img>
    </div>
)