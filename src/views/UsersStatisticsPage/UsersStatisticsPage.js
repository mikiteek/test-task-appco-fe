import React, {Component} from "react";
import {connect} from "react-redux";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import TableUsers from "../../components/TableUsers";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import usersSelector from "../../redux/users/usersSelector";
import styles from "./UsersStatisticsPage.module.scss";

class UsersStatisticsPage extends Component {
  render() {
    const mainStyles = ["container", styles.main].join(" ");
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className={mainStyles}>
          {this.props.spinner && <Spinner/>}
          <TableUsers/>
          <Pagination/>
        </main>
        <FooterPages/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  spinner: usersSelector.getSpinner(state),
});

export default connect(mapStateToProps)(UsersStatisticsPage);