import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Page404 from "./errors/Page404";
import Page403 from "./errors/Page403";
import Register from "./components/Register";
import UnSubscribe from "./components/UnSubscribe";
import LandingHome from "./components/LandingHome";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ResetPassword from "./components/ResetPassword";
import MasterLayout from "./layouts/admin/MasterLayout";
import ForgotPassword from "./components/ForgotPassword";
import TermsAndConditions from "./components/TermsAndConditions";
import { useSelector } from "react-redux";
import Dashboard from "./layouts/admin/Dashboard";

import { Provider } from "react-redux";
import store from "./store";

axios.defaults.baseURL = "https://api.klout.club/mapping/";
// axios.defaults.baseURL = "http://localhost:8000/";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = false; //true

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={LandingHome} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <AdminPrivateRoute path="/admin" name="Admin" />

          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-condition" component={TermsAndConditions} />
          <Route path="/unsubscribe" component={UnSubscribe} />
          <Route path="/403" component={Page403} />

          <Route path="/404" component={Page404} />

          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
