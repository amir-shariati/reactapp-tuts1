import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BoilingVerdict extends React.Component{
    render() {
        return(
            this.props.celsius>=100?
                <p>the water would boil</p>
                :
                <p>the water would not boil</p>
        )
    }
}

class TempInput extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <fieldset>
                <legend>temperature in {this.props.scale==="f"? "Fahrenheit" : "Celsius"}</legend>
                <input value={this.props.temperature} onChange={this.props.handleChange} />

            </fieldset>
        )
    }
}

class Calculator extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            temperatureInF: 0*9/5 + 32,
            temperatureInC: 0
        }

        this.handleChangeInF = this.handleChangeInF.bind(this);
        this.handleChangeInC = this.handleChangeInC.bind(this);
    }

    handleChangeInF(event){
        this.setState({
            temperatureInF : event.target.value,
            temperatureInC : (event.target.value -32)*5/9
        })
    }

    handleChangeInC(event){
        this.setState({
            temperatureInF : (event.target.value)*9/5 + 32,
            temperatureInC : event.target.value
        })
    }

    convertToCelsius(t){
        return (t-32)*5/9 ;
    }

    convertToFahrenheit(t){
        return t*9/5+32 ;
    }

    render() {
        return(
            <div>
                <TempInput scale={"f"} temperature={this.state.temperatureInF}  handleChange={this.handleChangeInF} />
                <TempInput scale={"c"} temperature={this.state.temperatureInC}  handleChange={this.handleChangeInC} />
                <BoilingVerdict celsius={this.state.temperatureInC} />
            </div>
        )
    }
}

class App extends React.Component{

    render() {
        return(
            <div>
                <Calculator />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
