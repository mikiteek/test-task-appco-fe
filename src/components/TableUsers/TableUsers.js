import React, {Component} from "react";
import {connect} from "react-redux";
import usersSelector from "../../redux/users/usersSelector";
import usersOperations from "../../redux/users/usersOperations";
import styles from "./TableUsers.module.scss";

class TableUsers extends Component {

  componentDidMount() {
    this.props.onGetUsers(1, 25);
  }

  render() {
    const {users: {docs}} = this.props;
    return (
      <div className={styles.tableBlock}>
        <h2>Users Statistics</h2>
        {
          <table>
            <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP Address</th>
              <th>Total clicks</th>
              <th>Total page views</th>
            </tr>
            </thead>
            {docs && docs.map(({id, first_name, last_name, email, gender, ip_address, statistic}) => (
              <tbody key={id}>
              <tr>
                <td>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{ip_address}</td>
                <td>{statistic[0].total_clicks}</td>
                <td>{statistic[0].total_page_views}</td>
              </tr>
              </tbody>
            ))}
          </table>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);