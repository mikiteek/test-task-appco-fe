import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import TableUsers from "../../components/TableUsers";
import {connect} from "react-redux";
import usersSelector from "../../redux/users/usersSelector";
import usersOperations from "../../redux/users/usersOperations";

class UsersStatisticsPage extends Component {
  componentDidMount() {
    this.props.onGetUsers();
    console.log("Component did mount");
  }

  render() {
    console.log("render Statistics", this.props)
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className="container">
          <TableUsers users={this.props.users}/>
        </main>
        <FooterPages/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: usersSelector.getUsers(state),
});

const mapDispatchToProps = {
  onGetUsers: usersOperations.getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersStatisticsPage);