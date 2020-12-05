import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import TableUsers from "../../components/TableUsers";

class UsersStatisticsPage extends Component {
  render() {
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className="container">
          <TableUsers/>
        </main>
        <FooterPages/>
      </>
    );
  }
}

export default UsersStatisticsPage;