import React, {Component} from "react";
import styles from "./WrapperMainHeader.module.scss";

class WrapperMainHeader extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default WrapperMainHeader;