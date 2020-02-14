import React from "react";

export default function GeoLocateDisplay(props) {
  return (
    <div>
      {props.weather.weather}
      {" " + props.weather.temp}
    </div>
  );
}
