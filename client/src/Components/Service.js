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
          <div className={styles.service}>
            <div className={styles.number}>Service No.</div>
            <div className={styles.route}>Description</div>
            {this.props.serviceList.map(function(item, index) {
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

export default CSSModules(Service, styles);
