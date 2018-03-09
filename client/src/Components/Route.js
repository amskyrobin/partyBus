import React from "react";
import RouteMap from "./RouteMap";

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRoutes: []
    };
  }

  componentWillReceiveProps(nextProps) {
    var data = nextProps.routeList.filter(e => e.routes.length > 0);
    var firstRoute = data[0].routes[0].points;
    var allRoutes = data;

    var pointsArray = allRoutes.map(y =>
      y.routes[0].points.map(x => ({
        lat: x.latitude,
        lng: x.longitude
      }))
    );

    this.setState({ allRoutes: pointsArray });
  }

  render() {
    return (
      <div>
        {this.state.allRoutes.length > 0 && (
          <RouteMap allRoutes={this.state.allRoutes} />
        )}
      </div>
    );
  }
}

export default Route;
