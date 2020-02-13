import React, { Component } from "react";

const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}&apikey=1007d1d3b051f57d7244304904aa1df2`;

class FetchComponent extends props {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      cuisines: "",
      rating: "",
      menu: "",
      img: ""
    };
  }

  componentDidMount() {
    fetch(zomatoURL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.nearby_restaurants.restaurant.name,
          address: json.nearby_restaurants.restaurant.location.address,
          cuisines: json.nearby_restaurants.restaurant.cuisines,
          rating:
            json.nearby_restaurants.restaurant.user_rating.aggregate_rating,
          menu: json.nearby_restaurants.restaurant.menu_url,
          img: json.nearby_restaurants.restaurant.featured_image
        }).catch(err => err.message);
      });
  }
  render() {
    return <div>Here is the Fetch Component</div>;
  }
}

export default FetchComponent;
