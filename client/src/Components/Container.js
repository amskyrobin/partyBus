import React from "react";
import Route from "./Route.js";
import Service from "./Service.js";
import RouteMap from "./RouteMap.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      routes: []
    };
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/https://tfe-opendata.com/api/v1/services"
    );
    xhr.setRequestHeader(
      "Authorization",
      "Token 8F974D788A6FA7F22AEC511E8D38EC6E"
    );

    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log("good");
        var data = JSON.parse(xhr.responseText);
        var servicesArray = data.services;
        {
          this.setState({
            services: servicesArray,
            routes: servicesArray
          });
        }
      } else {
        console.log("bad");
      }
    }.bind(this);
    xhr.send();
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <Service serviceList={this.state.services} />
        <Route routeList={this.state.routes} />
      </div>
    );
  }
}

export default Container;
