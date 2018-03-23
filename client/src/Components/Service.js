import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../build/service.css";
import { connect } from "react-redux";
import reducer from "../reducers/index.js";
import { setServiceName } from "../actions/action.js";

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(event, item){
    console.log("click",)
    var serviceName = item.name
    console.log(item.name)
    this.props.setServiceName(serviceName)
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
                <div  onClick={() => this.handleButtonClick(event, item)} className={styles.journey} key={index}>
                  <div className={styles.name}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            }, this)}
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
    services: store.services,
    serviceName: store.serviceName
  };
};

const mapDispatchToProps = dispatch => ({
  setServiceName: serviceName => dispatch(setServiceName(serviceName))
});

const serviceComponentWithCSS = CSSModules(Service, styles);
export default connect(mapStateToProps, mapDispatchToProps)(serviceComponentWithCSS);
