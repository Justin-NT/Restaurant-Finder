import React from "react";

export default function RestaurantDisplay(props) {
  console.log(props.restaurants, typeof props.restaurants);

  return (
    <div>
      {props.restaurants.map(obj => (
        <h1 key={obj.restaurant.id}>{obj.restaurant.name}</h1>
      ))}
    </div>
  );
}
