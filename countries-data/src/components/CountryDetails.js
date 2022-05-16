import { useEffect, useState } from "react"
import axios from "axios"

const api_key = process.env.REACT_APP_API_KEY

function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

const CountryDetails = (props) => {
    const [weather, setWeather] = useState({main: {temp: 'loading'}, weather: [{icon: ''}], wind: {speed: 'loading', wind: 'loading'}});
    useEffect(() => {
        if(props.country.capital!==undefined){
            console.log(props.country.capital[0])
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.country.capital[0]}&appid=${api_key}&units=imperial`)
            .then(response=>{
                console.log(response.data)
                setWeather(response.data)
            })
        }
    }, [props])
    return(
        <>
                <h1>{props.country.name}</h1>
                <p>capital {props.country.capital}</p>
                <p>area {props.country.area}</p>
                <strong>languages:</strong>
                <ul>
                    {Object.values(props.country.languages).map((language, i) => <li key={i}>{language}</li>)}
                </ul>

                <img src={props.country.flags.png} alt="flag" border="1px solid black"></img>
                {props.country.capital!==undefined 
                ? 
                <>
                    <h2>Weather in {props.country.capital[0]}</h2>
                    <p><strong>temperature:</strong>: {weather.main.temp} Celsius</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather-icon'/>
                    <p><strong>wind:</strong> {weather.wind.speed} mph direction {degToCompass(weather.wind.deg)}</p>
                </>
                : null}

            </>
    )
}

export default CountryDetails;