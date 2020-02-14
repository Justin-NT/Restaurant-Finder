import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const RestaurantDisplay = props => {
  console.log(props.eatery.restaurant);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <Card
        // key={props.eatery.restaurant.id}
        style={{
          height: "18em",
          width: "20em"
        }}
      >
        <CardContent>
          <Typography>Restaurant: {props.eatery.restaurant.name}</Typography>
        </CardContent>
        <CardContent>
          Address: {props.eatery.restaurant.location.address}
        </CardContent>
        <CardContent>
          Type of Cuisine: {props.eatery.restaurant.cuisines}
        </CardContent>
        <CardContent>
          Rating: {props.eatery.restaurant.user_rating.aggregate_rating}
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Button href={props.eatery.restaurant.menu_url} target="blank">
            Menu
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RestaurantDisplay;
