import React, {Component} from "react";
import styles from "./TableUsers.module.scss";

class TableUsers extends Component {

  componentDidMount() {
    this.props.onGetUsers();
  }

  render() {
    const {users} = this.props;
    console.log("users in Table", users)
    return (
      <div className={styles.tableBlock}>
        <h2>Users Statistics</h2>
        {
          users && users.docs.length > 0 &&
          <table>
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
            {users.docs.map(({id, first_name, last_name, email, gender, ip_address, statistic}) => (
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
            ))}
          </table>
        }
      </div>
    );
  }
}

export default TableUsers;