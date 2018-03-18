import React from "react";
import { connect } from "react-redux";
import Route from "./Route.js";
import Service from "./Service.js";
import RouteMap from "./RouteMap.js";
import reducer from "../reducers/index.js";
import { setServiceData } from "../actions/action.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.getServiceData = this.getServiceData.bind(this);
  }

  componentDidMount() {
    this.getServiceData();
  }

  getServiceData() {
    this.props.setServiceData([]);
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
        console.log(servicesArray[0]);
        this.props.setServiceData(servicesArray);
      } else {
        console.log("response error");
      }
    }.bind(this);
    xhr.send();
  }

  render() {
    return (
      <div>
        <Service />
        <Route />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log("store atContainer.js:", store);
  return {
    services: store.services
  };
};

const mapDispatchToProps = dispatch => ({
  setServiceData: servicesArray => dispatch(setServiceData(servicesArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
