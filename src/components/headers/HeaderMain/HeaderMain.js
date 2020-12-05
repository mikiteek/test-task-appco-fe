import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import WrapperMainHeader from "../../wrappers/WrapperMainHeader";
import LogoHeader from "../../logos/LogoHeader";
import styles from "./HeaderMain.module.scss";
import routes from "../../../routes";

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
              <NavLink
                className={styles.viewStats}
                to={routes.users}
              >View stats</NavLink>
            </section>
            <div className={styles.mobileBlock}></div>
          </div>
        </header>
      </WrapperMainHeader>
    );
  }
}

export default HeaderMain;