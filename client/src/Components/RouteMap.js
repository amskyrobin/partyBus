import React from "react";
import GoogleMapReact from "google-map-react";

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    console.log("props:", props);
    this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
    this.state = {
      path: [props.allRoutes],
      center: { lat: 55.95622, lng: -3.28161 },
      zoom: 11
    };
    console.log("MAP PROPS IN CONSTRUCTOR", this.state);
  }

  // componentWillReceiveProps(nextprops) {
  //   console.log("MAP PROPS", this.props);
  //   console.log("NEXT PROPS", nextprops);
  //   this.setState({ path: nextprops.allRoutes });
  // }

  handleGoogleMapApi(google) {
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    var routes = this.state.path[0];
    routes.map(x => {
      var flightPath = new google.maps.Polyline({
        path: x,
        geodesic: true,
        strokeColor: getRandomColor(),
        strokeOpacity: 0.6,
        strokeWeight: 2
      });

      flightPath.setMap(google.map);
    });
  }

  render() {
    {
    }
    return (
      <div className="map-container" style={{ width: "100%", height: "400px" }}>
        <h1>google map</h1>
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={this.handleGoogleMapApi}
        />
      </div>
    );
  }
}
