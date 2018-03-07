import React from "react";

class Route extends React.Component {
  constructor(props) {
    super(props);
    console.log("route props", props);
  }

  componentWillReceiveProps(nextProps) {
    // console.log("next props", nextProps.routeList);
    var data = nextProps.routeList.filter(e => e.routes.length > 0);
    // for (var i = 0; i < data.length; i++) {
    //   var routesArray = data[i].routes[0].points;
    //   console.log("TEST ONE", routesArray);
    // }

    var pointsArray = data.map(x => [
      x.routes[0].points.map(y => y.latitude),
      x.routes[0].points.map(z => z.longitude)
    ]);
    console.log("pointsArray:", pointsArray);

    var point1 = new google.maps.LatLng(
      pointsArray[0][0][10],
      pointsArray[0][1][10]
    );
    var point2 = new google.maps.LatLng(
      pointsArray[0][0][40],
      pointsArray[0][1][40]
    );
    var point3 = new google.maps.LatLng(
      pointsArray[0][0][90],
      pointsArray[0][1][90]
    );

    // build an array of the points
    var wps = [
      { location: point1 },
      { location: point2 },
      { location: point3 }
    ];

    // set the origin and destination
    var org = new google.maps.LatLng(
      pointsArray[0][0][0],
      pointsArray[0][1][0]
    );
    var dest = new google.maps.LatLng(
      pointsArray[0][0][109],
      pointsArray[0][1][109]
    );

    var request = {
      origin: org,
      destination: dest,
      waypoints: wps,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
  }

  render() {
    return (
      <div>
        <p />
        <p />
      </div>
    );
  }
}

export default Route;
