import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
// import LogoHeader from "./components/logos/LogoHeader";
// import LogoFooterMain from "./components/logos/LogoFooterMain";
// import LogoFooterPages from "./components/logos/LogoFooterPages";
// import WrapperMainHeader from "./components/wrappers/WrapperMainHeader";
// import WrapperMainFooter from "./components/wrappers/WrapperMainFooter";
// import WrapperPagesHeader from "./components/wrappers/WrapperPagesHeader";
// import WrapperPagesFooter from "./components/wrappers/WrapperPagesFooter";
// import FooterPages from "./components/footers/FooterPages";
// import FormSubscribe from "./components/FormSubscribe";
// import FooterMain from "./components/footers/FooterMain/FooterMain";
// import HeaderPages from "./components/headers/HeaderPages";
// import HeaderMain from "./components/headers/HeaderMain";
// import CardAbout from "./components/CardAbout";
// import SectionAbout from "./components/SectionAbout";
// import MainPage from "./views/MainPage";
import MainPage from "./views/MainPage";
import UsersStatisticsPage from "./views/UsersStatisticsPage";
import SelectedUserPage from "./views/SelectedUserPage";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path={routes.main} exact component={MainPage}/>
          <Route path={routes.users} exact component={UsersStatisticsPage}/>
          <Route path={routes.selectedUser} component={SelectedUserPage}/>
        </Switch>
      </>
    );
  }
}

export default App;
