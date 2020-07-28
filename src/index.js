import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>
}

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

        this.state = {
            isLoggedin: false
        }
    }

    handleLogout(){
        this.setState({
            isLoggedin: false
        })
    }

    handleLogin(){
        this.setState({
            isLoggedin: true
        })
    }

    render() {
        let button = null;
        if (this.state.isLoggedin ) {
            button = <LogoutButton onClick={(e) => this.handleLogout()} />
        }
        else {
            button = <LoginButton onClick={(e) => this.handleLogin()} />
        }
        return(
            <div>
                {this.state.isLoggedin ? <User/> : <Guest/>}
                <br/>
                {button}
            </div>
        )
    }
}


ReactDOM.render(
    <App isLoggedIn={true} />,
    document.getElementById('root')
)
