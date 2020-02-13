import React, { Component } from "react";
import RestaurantDisplay from "./RestaurantDisplay";
import Button from "@material-ui/core/Button";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: ""
    };
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
          // name: json.nearby_restaurants.restaurant.name,
          // address: json.nearby_restaurants.restaurant.location.address,
          // cuisine: json.nearby_restaurants.restaurant.cuisines,
          // rating:
          //   json.nearby_restaurants.restaurant.user_rating.aggregate_rating,
          // menu: json.nearby_restaurants.restaurant.menu_url,
          // img: json.nearby_restaurants.restaurant.featured_image
        });
      })
      .then(() => {
        console.log(this.props.latitude, this.props.longitude);
        console.log(this.state.restaurant);
      })
      .then(() => this.mapper())
      .catch(err => err.message);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchRestaurants();
  };

  mapper = () => {
    return this.state.restaurant.length > 0 ? (
      this.state.restaurant.map(data => {
        return (
          // (<RestaurantDisplay eatery={data.restaurant} />)
          (<h1>{data.restaurant.name}</h1>), console.log(data.restaurant.name)
        );
      })
    ) : (
      <h2>there are no restaurants in the area</h2>
    );
  };
  // componentDidMount() {
  //   setTimeout(() => (this.fetchRestaurants(), 2000));
  // }
  // const Restaurant = props => {

  // const mediaImage = () => {
  //   return item.featured_image.length > 0
  //     ? item.featured_image
  //     : "../../Assets/eat.jpeg";
  // };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Button type="submit">Click me!</Button>
        </form>
        <br />
        {this.mapper}

        {/* {this.state.restaurant.map(item => {
          return console.log(item); */}
        {/* <Card>
            <CardHeader>{item.restaurant.name}</CardHeader>
            <CardMedia src={item.restaurant.featured_image} />
            <CardContent>{item.restaurant.location.address}</CardContent>
            <CardContent>{item.restaurant.cuisines}</CardContent>
            <CardContent>
              {item.restaurant.user_rating.aggregate_rating}
            </CardContent>
            <Button href={item.restaurant.menu_url} target="blank">
              Menu
            </Button>
          </Card>
        })} */}
      </div>
    );
  }
}

export default Restaurants;
