import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://tfe-opendata.com/api/v1/timetables/36235979");
    // xhr.setRequestHeader(
    //   "Authorization",
    //   "Token 8F974D788A6FA7F22AEC511E8D38EC6E"
    // );
    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     console.log("good");
    //   } else {
    //     console.log("bad");
    //   }
    // };
    // xhr.send();
    fetch("https://tfe-opendata.com/api/v1/timetables/36235979", {
      method: "GET", // or 'PUT'
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Token 8F974D788A6FA7F22AEC511E8D38EC6E"
      })
    }).then(res => console.log("response", res));
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default Container;
