import React, { Component } from "react";
import GeoLocate from "./Displays/GeoLocate";
import Restaurants from "./Displays/Restaurants";

//FetchComp is used to gather all of the data needed from fetches.
//Each fetch's data will be passed as props to the respective display components for styling.
class FetchComp extends Component {
  constructor(props) {
    super(props);
    this.state = { location: { latitude: 0, longitude: 0 } };
  }

  //A function to get the longitude and latitude of where the device is being used. It uses an inbuilt function called navigator.geolocation.CurrentPosition to do so
  //It expects two arguments, one for what you want it do on success, and another for what you want it to do on failure
  locationFinder() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        let crd = pos.coords;
        this.setState({
          location: { latitude: crd.latitude, longitude: crd.longitude }
        });
      },
      () => console.log("Unable to access your location")
    );
  }

  // Runs on loading of the componenet so that the fetch is instantly run
  componentWillMount() {
    this.locationFinder();
  }

  render() {
    return (
      <div>
        <GeoLocate location={this.state.location} />
        <Restaurants location={this.state.location} />
      </div>
    );
  }
}

export default FetchComp;
