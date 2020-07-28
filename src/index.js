import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props) {
    return (
        <button onClick={()=> alert('Clicked!')}>
            Click Me.
        </button>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
