import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";

/** Import containers here */
import ErrorComponent from "./containers/errors/ErrorComponent";
import TwentyFourCounter from "./containers/guests/TwentyFourCounter";

const routes = _state => {

  return (
    <App>
      <Switch>
        {/* Root Path */}
        <Route
          exact
          path="/"
          component={TwentyFourCounter} />
        {/* Error Handling Routes */}
        <Route
          component={ErrorComponent}
        />
      </Switch>
    </App>
  );
}

export default routes;
