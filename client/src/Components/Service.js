import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../build/service.css";
import { connect } from "react-redux";
import reducer from "../reducers/index.js";

class Service extends React.Component {
  constructor(props) {
    super(props);

  
  }

  componentWillReceiveProps(props) {
    // this.setState({ serviceList: this.props })
  }

  render() {
    {
      if (this.props.services != null) {
        return (
          <div className={styles.service}>
            <div className={styles.number}>Service No.</div>
            <div className={styles.route}>Description</div>
            {this.props.services.map(function(item, index) {
              return (
                <div className={styles.journey} key={index}>
                  <div className={styles.name}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div className={styles.incoming}>
            <p>incoming data...</p>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = store => {
  return {
    services: store.services
  };
};

const serviceComponentWithCSS = CSSModules(Service, styles);
export default connect(mapStateToProps)(serviceComponentWithCSS);
