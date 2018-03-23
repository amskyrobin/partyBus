import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "../../build/routeMap.css";
import { connect } from "react-redux";
import reducer from "../reducers/index.js";
import CSSModules from "react-css-modules";

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.clearEmptyArray = this.clearEmptyArray.bind(this)
    this.drawLine = this.drawLine.bind(this)
    this.state = {
      center: { lat: 55.95622, lng: -3.28161 },
      zoom: 11
    };
  }

  clearEmptyArray(){
    var data = this.props.services.filter(e => e.routes.length > 0);
    return data
  }

  drawLine(){
    var serviceName = this.props.serviceName
    var services = this.props.services
    var found = services.find(function(element){
      var test = element.name == serviceName
      console.log("tetsttst", test)
      console.log("element.name", element.name)
      console.log("serviceName", serviceName)
      if (test){
        return element.routes
      }
    })
    // I NEED TO FIND THE SERVICE NAME IN THE SERVICES ARRAY
    //THEN GET ITS ROUTE ARRAY AND CONVERT IT TO LAT AND LANG
    }


  

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleGoogleMapApi(google) {
    var routes = this.props.routesData;
    routes.map(x => {
      var flightPath = new google.maps.Polyline({
        path: x,
        geodesic: true,
        strokeColor: this.getRandomColor(),
        strokeOpacity: 0.6,
        strokeWeight: 2
      });

      flightPath.setMap(google.map);
    });
  }



  render() {
    {
      {this.drawLine()}
      if (this.props.routesData != undefined) {
        return (
          <div className={styles.map} style={{ width: "70%", height: "400px" }}>
            <h1>google map</h1>
            <GoogleMapReact
              center={this.state.center}
              zoom={this.state.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={this.handleGoogleMapApi}
            />
          </div>
        );
      } else {
        return (
          <div>
            <p>google maps incoming</p>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = store => {
  console.log("store ROUTEMAP.js:", store);
  return {
    routesData: store.routesData,
    serviceName: store.serviceName, 
    services: store.services
  };
};

const routeMapComponentWithCSS = CSSModules(RouteMap, styles);
export default connect(mapStateToProps)(routeMapComponentWithCSS);



