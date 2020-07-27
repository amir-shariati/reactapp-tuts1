import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
    render() {
        return(
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

function App(){
    return(
        <div>
            <Hello name={"Amir"} />
            <Hello name={"Reza"} />
            <Hello name={"Agn"} />
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)


