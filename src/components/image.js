import React from 'react';

const Image = (props) => {


    return (
        props.weatherData ?
        <img src={`https://source.unsplash.com/350x350/?${props.weatherData.name},${props.weatherData.weather[0].main}`} alt="city weather"></img>
    :
        <img src={`https://source.unsplash.com/350x350/?Weather`} alt="weather"></img>
        )
}
 
export default Image;
 