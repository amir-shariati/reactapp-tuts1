import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const elm = <h1> this is my element! </h1>

function tick(){
    const timeElement = (
        <div>
            time is: {''}
            {new Date().toTimeString()}
        </div>
    )

    ReactDOM.render(
        <div>
            {elm}
            {timeElement}
        </div>,
        document.getElementById('root')
    )
}

setInterval(tick, 1000);

