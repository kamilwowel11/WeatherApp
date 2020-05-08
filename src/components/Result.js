import React from 'react'
import './Result.css'

//destrukturyzacja

const Result = props => {

    const {date,city,sunrise,sunset,temp,pressure,wind,error,} = props.weather
    
    let content = null;

    if (!error && city)
    {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
            <h3>Wyszukiwanie dla miasta <em>{city}</em></h3>
            <h4>Dane dla dnia i godziny: {date}</h4>
            <h4>Aktualna temperatura: {temp} &#176;C</h4>
            <h4>Wschód słońca dzisiaj o: {sunriseTime}</h4>
            <h4>Zachód słońca dzisiaj o: {sunsetTime}</h4>
            <h4>Aktualna siła wiatru {wind} m/s</h4>
            <h4>Aktualne ciśnienie {pressure} hPa</h4>
           
            </div>
        )
    }

    
    return (
        <div className="result">
            {error ? `The city ${city} is not recognized` : content}
        </div>

    );

}

export default Result