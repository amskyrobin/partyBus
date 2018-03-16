import React from "react";
import { connect } from "react-redux";
import Route from "./Route.js";
import Service from "./Service.js";
import RouteMap from "./RouteMap.js";
import reducer from "../reducers/index.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.getBusData = this.getBusData.bind(this);
    this.state = {
      routes: []
    };
  }

  componentDidMount() {
    this.getBusData();
  }

  getBusData() {
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
        console.log("response status 200");
        var data = JSON.parse(xhr.responseText);
        var servicesArray = data.services;
        {
          this.setState({
            services: servicesArray,
            routes: servicesArray
          });
        }
      } else {
        console.log("response error");
      }
    }.bind(this);
    xhr.send();
  }

  render() {
    return (
      <div>
        <Service serviceList={this.state.services} />
        <Route routeList={this.state.routes} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    services: store.services
  };
};

export default Container;
