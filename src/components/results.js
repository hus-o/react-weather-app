import React, { Component } from 'react';
import axios from "axios"
import Image from "./image"

class Results extends Component {
    state = {
        weatherData: null,
        imageData: null,
        errorMessage: ""
     }

    async componentDidMount(){
        try{
            const userQuery = this.props.location.state.searchValue
            const weatherResponse = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${userQuery}&units=metric&appid=3c812f1eeeef6ad3c602a713b3d4806b`)
            this.setState({weatherData: weatherResponse.data})
        }
        catch(err){
            this.setState({errorMessage:err})
        }
    }

    render() {
        return (
            <div className="results">
                {(this.state.weatherData) ?
                <div className="weatherInfo">
                    <Image weatherData={this.state.weatherData}/>
                    <div className="weatherDesc">
                        <p id="weatherView">You'll see some: {this.state.weatherData.weather[0].main}</p>
                        <p id="weatherViewDesc">{this.state.weatherData.weather[0].description}</p>
                    </div>
                    <div className="weatherMainData">
                        <p>Temperature (celcius): {this.state.weatherData.main.temp}</p>
                    </div>
                    <a href="/"><button>Search Again</button></a>
                </div>
                :
                <p>
                    {this.state.errorMessage && <h3>{this.state.errorMessage}</h3>}
                </p>
                }
            </div>
            
         );
    }
}
 
export default Results;
