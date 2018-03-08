import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../build/service.css";

class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceList: null
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ serviceList: this.props });
  }

  render() {
    {
      if (this.state.serviceList != null) {
        return (
          <div>
            {this.props.serviceList.map(function(item, index) {
              return (
                <div key={index}>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div>
            <p className={styles.app}>incoming data</p>
          </div>
        );
      }
    }
  }
}

export default CSSModules(Service, styles);
