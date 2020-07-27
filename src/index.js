import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props) {
    return(
        <h1> hello, {props.name}</h1>
    )
}

ReactDOM.render(
    <Hello name="Ali"></Hello>,
    document.getElementById('root')
)


