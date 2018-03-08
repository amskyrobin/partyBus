import React from "react";
import RouteMap from "./RouteMap";

class Route extends React.Component {
  constructor(props) {
    super(props);
    console.log("route props", props);
    this.state = {
      allRoutes: []
    };
  }

  componentWillReceiveProps(nextProps) {
    var data = nextProps.routeList.filter(e => e.routes.length > 0);
    var firstRoute = data[0].routes[0].points;
    var allRoutes = data;

    console.log("xxxxx:", allRoutes);

    var pointsArray = allRoutes.map(y =>
      y.routes[0].points.map(x => ({
        lat: x.latitude,
        lng: x.longitude
      }))
    );

    console.log("pointsArray:", pointsArray);

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
