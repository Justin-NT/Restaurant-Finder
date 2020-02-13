import React, { Component } from "react";

class GeoLocate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      meteorology: {
        weather: "",
        temp: 0,
        feelsLike: 0,
        tempMin: 0,
        tempMax: 0,
        wind: 0,
        city: ""
      }
    };
  }

  fetchNasa() {
    let key = "Vhp8X0Y1K3UZqwUKddekgNbngrtvSd9o9nvuiH1u";
    console.log(this.props.location.latitude, this.props.location.longitude);
    let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${this.props.location.longitude}&lat=${this.props.location.latitude}&api_key=${key}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ image: json.url });
      })
      .catch(err => console.log(err));
  }

  fetchWeather() {
    let key = "b10af721c8e2899d16356c92bb803ec8";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.location.latitude}&lon=${this.props.location.longitude}&appid=${key}`;
    console.log(url);
    console.log(this.props.location);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          meteorology: {
            weather: json.weather[0].description,
            temp: json.main.temp,
            feelsLike: json.main.feels_like,
            tempMin: json.main.temp_min,
            tempMax: json.main.temp_max,
            wind: json.wind.speed,
            city: json.name
          }
        });
      })
      .catch(err => console.log("error", err));
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchNasa();
      this.fetchWeather();
    }
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="geolocation"></img>
      </div>
    );
  }
}

export default GeoLocate;
