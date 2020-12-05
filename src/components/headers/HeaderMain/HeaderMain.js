import React, {Component} from "react";
import WrapperMainHeader from "../../wrappers/WrapperMainHeader";
import LogoHeader from "../../logos/LogoHeader";
import styles from "./HeaderMain.module.scss";

class HeaderMain extends Component {
  render() {
    return (
      <WrapperMainHeader>
        <header className="container">
          <LogoHeader/>
          <div className={styles.contentBlock}>
            <section className={styles.sectionBrain}>
              <h2 className={styles.brainSectionTitle}>
                <span className={styles.brainSectionTitleSpan}>Brainstorming </span>
                for desired perfect Usability
              </h2>
              <p className={styles.brainSectionDescription}>
                Our design projects are fresh and simple and will benefit your business greatly.
                Learn more about our work!
              </p>
              <button className={styles.viewStats} type="button">View stats</button>
            </section>
            <div className={styles.mobileBlock}></div>
          </div>
        </header>
      </WrapperMainHeader>
    );
  }
}

export default HeaderMain;