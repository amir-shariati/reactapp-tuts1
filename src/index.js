import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    showMessage(msg){
        alert(msg);
    }
    render() {
        return (
            <button onClick={()=>this.showMessage('clicked on button')}>
                Click Me.
            </button>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
