import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const RestaurantDisplay = props => {
  return (
    // <Card>
    //   <CardHeader>{props.eatery.name}</CardHeader>
    //   <CardMedia src={props.eatery.featured_image} />
    //   <CardContent>{props.eatery.location.address}</CardContent>
    //   <CardContent>{props.eatery.cuisines}</CardContent>
    //   <CardContent>{props.eatery.user_rating.aggregate_rating}</CardContent>
    //   <Button href={props.eatery.menu_url} target="blank">
    //     Menu
    //   </Button>
    // </Card>
    <h1>{props.eatery.name}</h1>
  );
};

export default RestaurantDisplay;
