import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import Diagram from "../../components/Diagram";
import Spinner from "../../components/Spinner/Spinner";
import {connect} from "react-redux";
import usersActions from "../../redux/users/usersActions";
import usersSelector from "../../redux/users/usersSelector";
import navStyles from "../../components/Navigation/Navigation.module.scss";
import styles from "./SelectedUserPage.scss";

class SelectedUserPage extends Component {
  componentDidMount() {
    const linkRef = document.querySelector(".js-user");
    linkRef.classList.add(navStyles.liItemLinkActive)
  }

  componentWillUnmount() {
    this.props.onToggleUser({})
  }

  render() {
    const mainStyles = ["container", styles.main].join(" ");
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className={mainStyles}>
          {this.props.spinner && <Spinner/>}
          <Diagram/>
        </main>
        <FooterPages/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  spinner: usersSelector.getSpinner(state),
});

const mapDispatchToProps = {
  onToggleUser: usersActions.toggleUserInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedUserPage);