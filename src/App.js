import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "./views/MainPage";
import UsersStatisticsPage from "./views/UsersStatisticsPage";
import SelectedUserPage from "./views/SelectedUserPage";
import routes from "./routes";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.main} exact component={MainPage}/>
        <Route path={routes.users} exact component={UsersStatisticsPage}/>
        <Route path={routes.selectedUser} component={SelectedUserPage}/>
      </Switch>
    );
  }
}

export default App;
