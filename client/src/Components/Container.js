import React from "react";
import Route from "./Route.js"
import Service from "./Service.js"

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
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
        var servicesArray = data.services
       
        let servicesStateArray = []
        for (var i = 0; i < servicesArray.length; i++) {
           var servicesData = servicesArray[i]
          
          servicesStateArray.push({
            name: servicesData.name,
            description: servicesData.description
          })
         
          this.setState(
            {services: servicesStateArray}, () => {console.log(this.state)})
        }
      } else {
        console.log("bad");
      }
    }.bind(this);
    xhr.send();
    // fetch("https://tfe-opendata.com/api/v1/timetables/36235979", {
    //   method: "GET", // or 'PUT'
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //     Authorization: "Token 8F974D788A6FA7F22AEC511E8D38EC6E",
    //     "Access-Control-Allow-Origin": "http://localhost:3000"
    //   })
    // }).then(res => console.log("response", res));
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <Service services={this.state.services} />

      </div>
    );
  }
}

export default Container;
