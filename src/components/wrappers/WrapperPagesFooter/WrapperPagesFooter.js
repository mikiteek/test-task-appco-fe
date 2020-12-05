import React, {Component} from "react";
import styles from "./WrapperPagesFooter.module.scss";

class WrapperPagesFooter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default WrapperPagesFooter;