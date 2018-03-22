import React from "react";
import RouteMap from "./RouteMap";
import { connect } from "react-redux";
import { setRouteData } from "../actions/action.js";
import reducer from "../reducers/index.js";

class Route extends React.Component {
  constructor(props) {
    super(props);
  }



  componentWillReceiveProps(nextprops) {
    // console.log("nextprops", nextprops);
    // console.log("this.props", this.props)

    if ( this.props.services != nextprops.services) {
      // console.log("nextprops SERVICE", nextprops.services);
      var data = nextprops.services.filter(e => e.routes.length > 0);
      var firstRoute = data[0].routes[0].points;
      var allRoutes = data;
      // console.log("ALLROUTES", allRoutes);
      var pointsArray = allRoutes.map(y =>
        y.routes[0].points.map(x => ({
          lat: x.latitude,
          lng: x.longitude
        }))
      );
      this.props.setRouteData(pointsArray);
      console.log("POINTSARRY", pointsArray);
    } else {
      console.log("lol");
    }
  }

  render() {
    {
      if (this.props.services != null) {
        return (
          <div>
            <RouteMap />
          </div>
        );
      } else {
        return null;
        console.log("awaiting props");
      }
    }
  }
}

const mapStateToProps = store => {
  console.log("store ROUTE.js:", store);
  return {
    services: store.services,
    routesData: store.routesData
  };
};

const mapDispatchToProps = dispatch => ({
  setRouteData: routeArray => dispatch(setRouteData(routeArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(Route);

//        {this.state.allRoutes.length > 0 && (
//        <RouteMap allRoutes={this.props.allRoutes} />
//      )}
