import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";

class SelectedUserPage extends Component {
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

export default SelectedUserPage;