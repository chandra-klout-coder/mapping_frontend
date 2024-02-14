import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Redirect, useHistory } from "react-router-dom";
import swal from "sweetalert";
import MasterLayout from "./layouts/admin/MasterLayout";
import Page404 from "./errors/Page404";

function AdminPrivateRoute({ ...rest }) {
  const history = useHistory();

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthenticated = async () => {
      try {
        const response = await axios.get(`/api/checkingAuthenticated`);
        if (response.status === 200) {
          setAuthenticated(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setAuthenticated(false);
          // Redirect to login page or handle as per your application's flow
          history.push("/login");
        } else {
          console.error("Error:", error.message);
        }
      }
      setLoading(false);
    };

    checkAuthenticated();
  }, [history]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Route
        {...rest}
        render={({ props, location }) =>
          authenticated ? <MasterLayout {...props} /> : <Redirect to="/login" />
        }
      />

      {/* <Route path="/admin/404" component={Page404} />
      <Redirect to="/admin/404" /> */}
    </>
  );
}

export default AdminPrivateRoute;
