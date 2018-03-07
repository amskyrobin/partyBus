import React from "react";
import GoogleMap from "google-map-react";

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      console.log("map props", this.props);
    }
    return (
      <div className="map-container" style={{ width: "100%", height: "400px" }}>
        <h1>google map</h1>
        <GoogleMap center={this.props.center} zoom={this.props.zoom} />
      </div>
    );
  }
}

RouteMap.defaultProps = {
  center: { lat: 40.744679, lng: -73.948542 },
  zoom: 11
};
