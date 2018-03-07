import React from "react";
import RouteMap from "./RouteMap";

class Route extends React.Component {
  constructor(props) {
    super(props);
    console.log("route props", props);
    this.state = {
      firstRoute: []
    };
  }

  componentWillReceiveProps(nextProps) {
    var data = nextProps.routeList.filter(e => e.routes.length > 0);
    var firstRoute = data[0].routes[0].points;

    console.log(firstRoute);

    var pointsArray = firstRoute.map((x, i) => ({
      lat: x.latitude,
      lng: x.longitude
    }));

    console.log("pointsArray:", pointsArray);

    this.setState({ firstRoute: pointsArray });
  }

  //Array of two arrays
  // var pointsArray = data.map(x => [
  //   x.routes[0].points.map(y => y.latitude),
  //   x.routes[0].points.map(z => z.longitude)
  // ]);

  render() {
    return (
      <div>
        <RouteMap firstRoute={this.state.firstRoute} />
      </div>
    );
  }
}

export default Route;
