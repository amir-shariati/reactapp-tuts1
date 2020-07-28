import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User(props) {
    return(
        <div>
            Hello User
        </div>
    )
}

function Guest(props) {
    return(
        <div>
            Welcome Guest
        </div>
    )
}

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.isLoggedIn ? <User/> : <Guest/>
    }
}


ReactDOM.render(
    <App isLoggedIn={true} />,
    document.getElementById('root')
)
