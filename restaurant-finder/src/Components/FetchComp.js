import React, { Component } from "react";
import GeoLocate from "./Displays/GeoLocate";
import Restaurants from "./Displays/Restaurants";

//FetchComp is used to gather all of the data needed from fetches.
//Each fetch's data will be passed as props to the respective display components for styling.
class FetchComp extends Component {
  constructor() {
    super();
    this.state = {
      location: {
        latitude: 0,
        longitude: 0
      }

      // name: "",
      // address: "",
      // cuisine: "",
      // rating: "",
      // menu: "",
      // img: ""
    };
  }

  //A function to get the longitude and latitude of where the device is being used. It uses an inbuilt function called navigator.geolocation.CurrentPosition to do so
  //It expects two arguments, one for what you want it do on success, and another for what you want it to do on failure
  locationFinder() {
    navigator.geolocation.getCurrentPosition(pos => {
      let crd = pos.coords;
      this.setState({
        location: { latitude: crd.latitude, longitude: crd.longitude }
      });
    }, console.log("Unable to access your location"));
  }

  componentDidMount() {
    //Runs on loading of the componenet so that the fetch is instantly ran
    this.locationFinder();
    console.log(this.state.location.latitude, this.state.location.longitude);
  }

  render() {
    return (
      <div>
        {/* <GeoLocate
          latitude={this.props.latitude}
          longitude={this.props.longitude}
        /> */}
        <Restaurants
          latitude={this.state.location.latitude}
          longitude={this.state.location.longitude}
          // name={this.state.restaurant.name}
          // address={this.state.restaurant.address}
          // cuisine={this.state.restaurant.cuisine}
          // rating={this.state.restaurant.rating}
          // menu={this.state.restaurant.rating}
          // img={this.state.restaurant.img}
        />
      </div>
    );
  }
}

export default FetchComp;
