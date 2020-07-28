import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: "OFF"
        }

        // this.toggleValue = this.toggleValue.bind(this);
    }
    toggleValue = () => {
       this.setState( (prevState) => ({
           value: prevState.value == "OFF" ? "ON" : "OFF"
       }))
    }
    render() {
        return (
            <button onClick={() => this.toggleValue() }>
                {this.state.value}
            </button>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
