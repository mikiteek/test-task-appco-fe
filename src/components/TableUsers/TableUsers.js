import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import usersSelector from "../../redux/users/usersSelector";
import usersOperations from "../../redux/users/usersOperations";
import styles from "./TableUsers.module.scss";

class TableUsers extends Component {
  componentDidMount() {
    this.props.onGetUsers(1, 25);
  }

  handleClickByRow(event) {
    const {target} = event;
    const parent = target.parentNode;
    const refId = parent.querySelector(".js-idCol");
    this.props.history.push(`/users/${refId.textContent}`);
  }


  render() {
    const {users: {docs}} = this.props;
    return (
      <div className={styles.tableBlock}>
        <h2 className={styles.tableTitle}>Users Statistics</h2>
        <table className={styles.table}>
          <thead className={styles.rowHead}>
          <tr>
            <th className={styles.colHeadId}>Id</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Total clicks</th>
            <th>Total page views</th>
          </tr>
          </thead>
          <tbody className={styles.tableBody}>
          {docs && docs.map(({id, first_name, last_name, email, gender, ip_address, statistic}) => (
            <tr key={id} className={styles.userRow} onClick={this.handleClickByRow.bind(this)}>
              <td className="js-idCol">{id}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{ip_address}</td>
              <td>{statistic[0].total_clicks}</td>
              <td>{statistic[0].total_page_views}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: usersSelector.getUsers(state),
});

const mapDispatchToProps = {
  onGetUsers: usersOperations.getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TableUsers));