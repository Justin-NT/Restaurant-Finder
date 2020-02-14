import React, { Component } from "react";
import RestaurantDisplay from "./RestaurantDisplay";
import Button from "@material-ui/core/Button";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [""],
      switch: false
    };
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.latitude}&lon=${this.props.longitude}&apikey=1007d1d3b051f57d7244304904aa1df2`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json.nearby_restaurants);
        this.setState({
          restaurant: json.nearby_restaurants
        });
      })
      .catch(err => err.message);
  }

  fetchRestaurants = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.latitude}&lon=${this.props.longitude}&apikey=1007d1d3b051f57d7244304904aa1df2`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json.nearby_restaurants);
        this.setState({
          restaurant: json.nearby_restaurants
        });
      })
      .then(() => {
        console.log(this.props.latitude, this.props.longitude);
        console.log(this.state.restaurant);
      })
      .catch(err => err.message);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchRestaurants();
    this.setState({ switch: true });
  };

  switcher = () => {
    return this.state.switch ? (
      this.state.restaurant.map(data => {
        return (
          <div>
            <RestaurantDisplay eatery={data} />
          </div>
        );
      })
    ) : (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Button type="submit">Click me!</Button>
        </form>
        <br />
      </div>
    );
  };

  render() {
    return <div>{this.switcher()}</div>;
  }
}

export default Restaurants;
