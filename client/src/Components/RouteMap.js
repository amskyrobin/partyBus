import React from "react";
import GoogleMapReact from "google-map-react";

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
    this.state = {
      path: [],
      center: { lat: 53.480759, lng: -2.242631 },
      zoom: 11
    };
    console.log("MAP PROPS IN CONSTRUCTOR", this.state);
  }

  componentWillReceiveProps(nextprops) {
    console.log("MAP PROPS", this.props);
    console.log("NEXT PROPS", nextprops);
    this.setState({ path: nextprops.firstRoute });
  }

  handleGoogleMapApi(google) {
    var flightPath = new google.maps.Polyline({
      path: this.state.path,
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
          center={this.state.path[0]}
          zoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={this.handleGoogleMapApi}
        />
      </div>
    );
  }
}
