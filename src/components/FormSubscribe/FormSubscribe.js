import React, {Component} from "react";
import styles from "./FormSubscribe.module.scss";

class FormSubscribe extends Component {
  render() {
    return (
      <form className={styles.form} action="#">
        <input className={styles.formInput} type="text" placeholder="Enter your email"/>
        <button className={styles.formButton} type="submit">Subscribe</button>
      </form>
    );
  }
}

export default FormSubscribe;