import React from "react";
import GoogleMapReact from "google-map-react";

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
  }

  handleGoogleMapApi(google) {
    var flightPath = new google.maps.Polyline({
      path: [
        { lat: 53.480759, lng: -2.242631 },
        { lat: 51.507351, lng: -0.127758 },
        { lat: 55.953252, lng: -3.188267 }
      ],
      geodesic: true,
      strokeColor: "#33BD4E",
      strokeOpacity: 1,
      strokeWeight: 5
    });

    flightPath.setMap(google.map);
  }

  render() {
    {
    }
    return (
      <div className="map-container" style={{ width: "100%", height: "400px" }}>
        <h1>google map</h1>
        <GoogleMapReact
          center={this.props.center}
          zoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={this.handleGoogleMapApi}
        />
      </div>
    );
  }
}

RouteMap.defaultProps = {
  center: { lat: 53.480759, lng: -2.242631 },
  zoom: 11
};
