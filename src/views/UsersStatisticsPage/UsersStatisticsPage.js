import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import TableUsers from "../../components/TableUsers";
import Pagination from "../../components/Pagination";
import styles from "./UsersStatisticsPage.module.scss";

class UsersStatisticsPage extends Component {
  render() {
    const mainStyles = ["container", styles.main].join(" ");
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className={mainStyles}>
          <TableUsers/>
          <Pagination/>
        </main>
        <FooterPages/>
      </>
    );
  }
}

export default UsersStatisticsPage;