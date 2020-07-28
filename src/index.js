import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState( {[event.target.name]: event.target.value.toUpperCase()});
        console.log(this.state);
    }

    handleSubmit(event){
        event.preventDefault();
        alert(this.state.name + ' ' + this.state.address);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name:
                        <input name={"name"} value={this.state.name} type={"text"} onChange={this.handleChange} />
                    </label>
                    <label>
                        Address:
                        <textarea name={"address"} value={this.state.address} type={"text"} onChange={this.handleChange} />
                    </label>

                    <input type={"submit"} value={"Ok"} />
                </form>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
