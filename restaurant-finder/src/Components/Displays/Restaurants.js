import React, { Component } from "react";
import RestaurantDisplay from "./RestaurantDisplay";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  //accessing the zomato api and setting the results state to returned nearby restaurants
  fetchZomato = () => {
    let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.location.latitude}&lon=${this.props.location.longitude}`;
    let key = "747d2e6be250b7f9e6fb5f53658b3ca8";
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "user-key": key
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ results: json.nearby_restaurants });
      })
      .catch(err => console.log("error", err));
  };

  //if the geolocation has been succesfully updated, do the fetch(since it needs lat and lon)
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchZomato();
    }
  }

  render() {
    return (
      <div>
        {/* Calling the functional component for display */}
        <RestaurantDisplay restaurants={this.state.results} />
      </div>
    );
  }
}

export default Restaurant;
