import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminDashboard from "./screens/AdminDashboard";
import AdminView from "./screens/AdminView";
import OrderStatus from "./Components/OrderStatus";
import LSP from "./Components/LSP";
import OrderStatusView from "./Components/OrderStatusView";

export default function url_routes() {
  if (!localStorage.getItem("token") && location.hostname === "localhost") {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MjMsIlVzZXJuYW1lIjoiYnBwX2FkbWluQGV1bmltYXJ0LmNvbSIsImFjY2Vzc190ZW1wbGF0ZV9pZCI6MTMsImNvbXBhbnlfaWQiOjEsImV4cCI6MTY3NTA3NDMwMSwiZmlyc3RfbmFtZSI6IkJQUCIsImxhc3RfbmFtZSI6IkFkbWluIiwicm9sZV9pZCI6MSwidXNlcl90eXBlcyI6W3siaWQiOjU2OCwibmFtZSI6IkJQUF9BRE1JTiJ9XX0.sYwklhoqOsbhnR-EqtCfiXvs50tETJjMn6m0ZTgXEDI"
    );
  }
  return (
    <StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/bpp_admin"
              render={props => <AdminDashboard />}
            />
            <Route
              exact
              path="/bpporderStatus"
              // render={(props) => <DashboardTabs tabNo={0} />}
              render={props => <OrderStatus />}
            />
            <Route
              exact
              path="/lsp"
              // render={(props) => <DashboardTabs tabNo={2} />}
              render={props => <LSP />}
            />
       

            <Route
              exact
              path="/paymentPartners"
              render={props => (
                <AdminView id={props.match.params.id} tabNo={0} />
              )}
            />
             <Route
              exact
              path="/bpporderStatus/view/:id"
              render={props => (
                <OrderStatusView id={props.match.params.id}/>
              )}
            />
            <Route
              exact
              path="/shippingPartners"
              render={props => (
                <AdminView id={props.match.params.id} tabNo={1} />
              )}
            />
          </Switch>
        </Router>
      </Provider>
    </StrictMode>
  );
}
/*
 Copyright (C) 2022 Eunimart Omnichannel Pvt Ltd. (www.eunimart.com)
 All rights reserved.
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License v3.0 as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License v3.0 for more details.
 You should have received a copy of the GNU Lesser General Public License v3.0
 along with this program.  If not, see <https://www.gnu.org/licenses/lgpl-3.0.html/>.
*/
