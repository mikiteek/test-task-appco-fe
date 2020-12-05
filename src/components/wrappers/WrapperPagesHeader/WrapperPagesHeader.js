import React, {Component} from "react";
import styles from "./WrapperPagesHeader.module.scss";

class WrapperPagesHeader extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default WrapperPagesHeader;