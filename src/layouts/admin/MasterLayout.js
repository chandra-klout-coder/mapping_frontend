import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import routes from "../../routes/routes";
import Page404Dashboard from "../../errors/Page404Dashboard";

function MasterLayout() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="wrapper">
      <Router>
        <Sidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          toggleMenu={toggleMenu}
        />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              toggleMenu={toggleMenu}
            />

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <Dashboard /> */}

              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      exact={route.exact}
                      path={route.path}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  )
                );
              })}

              {/* <Route path="/admin/*" component={Page404Dashboard} /> */}
              
              {/* <Redirect from="admin" to="/admin/dashboard" /> */}
            </div>
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
      </Router>
    </div>
  );
}

export default MasterLayout;
