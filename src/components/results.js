import React, { Component } from 'react';
import axios from "axios"

class Results extends Component {
    state = {
        weatherData: null,
        imageData: null
     }

    async componentDidMount(){
        const userQuery = this.props.location.state.searchValue
        console.log(userQuery)
        const weatherResponse = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${userQuery}&units=metric&appid=3c812f1eeeef6ad3c602a713b3d4806b`)
        console.log(weatherResponse)
        this.setState({weatherData: weatherResponse});
        console.log(this.state.weatherData)
    }


    render() {
        return (
            <React.Fragment>
                {(this.state.weatherData) ?
                <div className="weatherInfo">
                    <div className="weatherDesc">
                        <p>{this.state.weatherData.data.weather[0].main}</p>
                        <p>{this.state.weatherData.data.weather[0].description}</p>
                    </div>
                    <div className="weatherMainData">
                        <p>Temperature (celcius): {this.state.weatherData.data.main.temp}</p>
                    </div>
                </div>
                :
                <p>Loading</p>}
            </React.Fragment>
            
         );
    }
}
 
export default Results;
