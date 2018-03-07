import React from "react";

class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceList: null
    };
  }

  componentWillReceiveProps(props) {
    console.log("propsFromContainer", this.props);
    this.setState({ serviceList: this.props });
    console.log("state in service component", this.state);
  }

  render() {
    console.log("precheck", this.props);
    console.log("state check", this.state.serviceList);
    {
      if (this.state.serviceList != null) {
        return (
          <div>
            {this.props.serviceList.map(function(item, index) {
              return (
                <div>
                  <p key={index}>{item.name}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div>
            <p>incoming data</p>
          </div>
        );
      }
    }
  }
}

export default Service;
