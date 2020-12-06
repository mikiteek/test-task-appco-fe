import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import {connect} from "react-redux";
import usersActions from "../../redux/users/usersActions";

class SelectedUserPage extends Component {
  componentWillUnmount() {
    this.props.onToggleUser({})
  }

  render() {
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className="container">
          <div>
            This is SELECTED USER page
          </div>
        </main>
        <FooterPages/>
      </>
    );
  }
}

const mapDispatchToProps = {
  onToggleUser: usersActions.toggleUserInfo,
}

export default connect(null, mapDispatchToProps)(SelectedUserPage);