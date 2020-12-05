import React, {Component} from "react";
import styles from "./CardAbout.module.scss";

class CardAbout extends Component {
  render() {
    const {icon, title, description} = this.props;
    return (
      <li className={styles.card}>
        <img className={styles.cardIcon} src={icon} alt={title}/>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </li>
    );
  }
}

export default CardAbout;