import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { adminRoutes, clientRoutes } from "routes";
import React from "react";
import ClientLayout from "layouts/ClientLayout";
import AdminLayout from "layouts/AdminLayout";
import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import LoginUser from "container/shared/LoginUser/LoginUser";

function App() {
  const renderRoutes = (routes, Layout) => {
    return routes.map((route, index) => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout
          key={index}
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          {renderRoutes(adminRoutes, AdminLayout)}
          {renderRoutes(clientRoutes, ClientLayout)}
          {/* {renderRoutes(adminRoutes, AdminLayout)} */}

          <Route path="/Login" component={LoginUser} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
