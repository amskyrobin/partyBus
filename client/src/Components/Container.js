import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://tfe-opendata.com/api/v1/timetables/36235979");
    xhr.setRequestHeader(
      "Authorization",
      "Token 8F974D788A6FA7F22AEC511E8D38EC6E"
    );
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(xhr.responseText);
      } else {
        alert("Request failed.  Returned status of " + xhr.status);
      }
    };
    xhr.send();
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
