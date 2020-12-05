import React, {Component} from "react";
import CardAbout from "../CardAbout";
import iconDesign from "../../static/images/icons/card-design.svg"
import iconSecure from "../../static/images/icons/card-secure.svg"
import iconRetina from "../../static/images/icons/card-retina.svg"
import styles from "./SectionAbout.module.scss";

class SectionAbout extends Component {
  render() {
    const sectionStyles = [styles.section, "container"].join(" ");
    return (
      <section className={sectionStyles}>
        <h2 className={styles.sectionTitle}>
          Why
          <span className={styles.sectionTitleSpan}> small business owners love </span>
          AppCo?
        </h2>
        <p className={styles.sectionDescription}>
          Our design projects are fresh and simple and will benefit your business greatly.
          Learn more about our work!
        </p>
        <ul className={styles.sectionList}>
          <CardAbout
            icon={iconDesign}
            title={"Clean Design"}
            description={"Increase sales by showing true dynamics of your website."}
          />
          <CardAbout
            icon={iconSecure}
            title={"Secure Data"}
            description={"Build your online store’s trust using Social Proof & Urgency."}
          />
          <CardAbout
            icon={iconRetina}
            title={"Retina Ready"}
            description={"Realize importance of social proof in customer’s purchase decision."}
          />
        </ul>
      </section>
    );
  }
}

export default SectionAbout;