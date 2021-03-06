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
    fetch(
      "https://cors-anywhere.herokuapp.com/https://tfe-opendata.com/api/v1/services",
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: "Token 8F974D788A6FA7F22AEC511E8D38EC6E"
        })
      }
    )
      .then(r => r.json())
      .then(response => {
        var servicesArray = response.services;
        this.props.setServiceData(servicesArray);
      });
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
