import React, {Component} from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

//Key to Weather API
const APIKey = '88841fac4bc525f06407c125ed5c13bb';



class App extends Component{
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,

  }
// => by this działał tylko wewnątz

handleCitySubmit = (e) => {
  e.preventDefault()
 // console.log("Potwierdzony formularz")

  const API= `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

fetch(API)
.then(response => {
  if (response.ok)
  {
    return response
  }
  throw Error("Error: Didn't get response")
})
.then(response => response.json()) //lub html lub xml
.then(data => {
  const time = new Date().toLocaleString()
  this.setState(prevState => ({   // prevState bo odwołujemy się do state.value jako zmiennej już nam znanej
    error: false,
    date: time,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temp: data.main.temp,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    city: prevState.value, 
  }))
})
.catch(error => {
  console.log(error)
  this.setState(prevState => ({
    error: true,
    city: prevState.value
  }))

})
}

handleInputChange = (e) => {
this.setState({value: e.target.value})


}



render () {
  return (
    <div className="App">
      <Form 
      value={this.state.value} 
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
      />
      <Result weather={this.state}/>
     
    </div>
  );
}
}

export default App;
