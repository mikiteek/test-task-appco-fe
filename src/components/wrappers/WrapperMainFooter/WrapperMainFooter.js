import React, {Component} from "react";
import styles from "./WrapperMainFooter.module.scss";

class WrapperMainFooter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default WrapperMainFooter;