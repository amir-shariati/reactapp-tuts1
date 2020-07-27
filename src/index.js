import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    tick(){
        this.setState({date: new Date().toLocaleTimeString()});
    }

    componentDidMount() {
        this.tickId = setInterval( ()=>this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tickId)
    }

    render() {
        return(
            <div>
                <h1>Hello, Amir</h1>
                <h2> It is {this.state.date}</h2>
            </div>
        )
    }
}

function App(props){
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


