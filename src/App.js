import React from "react";
import RoutesComponents from "./Router/RoutesComponents";
import RouterLinks from "./Router/RouterLinks";
import { Route, Redirect } from "react-router-dom";
import routes from "./routes";
import Page from "./components/Page";

const App = () => {
  return (
    <Page>
      <div data-testid="app-page">
        <Route exact path="/">
          <Redirect to="/weather" />
        </Route>
        <RouterLinks routes={routes} />
        <RoutesComponents />
      </div>
    </Page>
  );
};

export default App;
