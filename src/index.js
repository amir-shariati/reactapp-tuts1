import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function hello(props) {
    return(
        <h1> hello, {props.name}</h1>
    )
}

ReactDOM.render(
    hello({name: "amir"}),
    document.getElementById('root')
)

