import React, {Component, Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";
import Spinner from "./components/Spinner";
import routes from "./routes";

const AsyncMainPage = lazy(() => import("./views/MainPage" /* webpackChunkName: "main-view" */));
const AsyncUsersStatisticsPage = lazy(() => import("./views/UsersStatisticsPage" /* webpackChunkName: "users-view" */));
const AsyncSelectedUserPage = lazy(() => import("./views/SelectedUserPage" /* webpackChunkName: "selected-user-view" */));

class App extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <Switch>
          <Route path={routes.main} exact component={AsyncMainPage}/>
          <Route path={routes.users} exact component={AsyncUsersStatisticsPage}/>
          <Route path={routes.selectedUser} component={AsyncSelectedUserPage}/>
        </Switch>
      </Suspense>
    );
  }
}

export default App;
