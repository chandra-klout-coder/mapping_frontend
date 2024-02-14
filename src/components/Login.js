import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import axios from "axios";
import swal from "sweetalert";
import loadingGif from "../assets/images/load.gif";
import backgroundImage from "../assets/images/2.jpg";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../authActions";

function Login() {
 
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    
    console.log('Before removal:', localStorage.getItem('auth_token'));
    console.log('Before removal:', localStorage.getItem('auth_name'));

    // Remove auth_token and auth_name from localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_name');

    console.log('After removal:', localStorage.getItem('auth_token'));
    console.log('After removal:', localStorage.getItem('auth_name'));


    // Redirect to the login page
    history.push("/login");
  }, [history]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validationErrors = { ...errors };

    switch (name) {
      case "email":
        if (!value) {
          validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          validationErrors.email = "Invalid Email";
        } else {
          validationErrors.email = "";
        }
        break;
      case "password":
        if (!value) {
          validationErrors.password = "Password is required";
        } else if (value.length < 8) {
          validationErrors.password =
            "Password must be at least 8 characters long.";
        } else {
          validationErrors.password = "";
        }
        break;
      default:
        break;
    }

    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional final validation (if needed)
    let hasErrors = false;
    const validationErrors = { ...errors };

    // Validate email and password together (if needed)
    if (!email) {
      validationErrors.email = "Email is required";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid Email";
      hasErrors = true;
    } else {
      validationErrors.email = "";
      hasErrors = false;
    }

    if (!password) {
      validationErrors.password = "Password is required";
      hasErrors = true;
    } else if (password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long.";
      hasErrors = true;
    } else {
      validationErrors.password = "";
      hasErrors = false;
    }

    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    if (email != "" && password != "") {
      axios
        .post("/api/login", {
          email,
          password,
        })
        .then((res) => {
          console.log("data", res);
          if (res.data.status === 200) {

            dispatch(loginSuccess(res.data.access_token));

            // localStorage.setItem("auth_token", res.data.access_token);
            // localStorage.setItem("auth_name", "user");

            setErrors({});

            setEmail("");
            setPassword("");

            swal("Success", res.data.message, "success");

            history.push("/admin/dashboard");
            
          } else if (res.data.status === 401) {
            swal("Warning", res.data.message, "warning");
          } else {
            //  setErrors(error.response.data.errors);
          }
        });
      // });
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div
                    className="col-lg-6 d-none d-lg-block"
                    style={{
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundSize: "cover", // Adjust as needed
                      backgroundPosition: "center", // Adjust as needed
                      // Other styles...
                    }}
                  ></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-4">
                        <Link to="/">
                          <i className="fa fa-solid fa-arrow-left"></i>
                          &nbsp; Go Back to Home
                        </Link>
                      </div>

                      <div>
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        <p>
                          <b>Lets Sign in to Get Started</b>
                        </p>
                      </div>
                      <form className="user mt-5 mb-5" onSubmit={handleSubmit}>
                        <div className="form-group row">
                          {/* {errors.error && <p classNameName="error">{errors.error}</p>} */}
                          {success && <p className="success">{success}</p>}
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onBlur={handleBlur}
                            aria-describedby="emailHelp"
                            className={`form-control form-control-user ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            placeholder="Enter your Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />

                          {errors.email && (
                            <div
                              className="invalid-feedback"
                              style={{
                                textAlign: "left",
                                padding: " 0px 1.2rem",
                              }}
                            >
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group input-group">
                          <input
                            name="password"
                            onBlur={handleBlur}
                            type={showPassword ? "text" : "password"}
                            className={`form-control form-control-user password-input-container ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              onClick={handleTogglePassword}
                            >
                              <i
                                className={
                                  showPassword
                                    ? "fas fa-eye-slash"
                                    : "fas fa-eye"
                                }
                              ></i>
                            </span>
                          </div>
                          {/* <span
                            className="toggle-password-icon"
                            onClick={handleTogglePassword}
                          >
                            <i
                              className={
                                showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                              }
                            ></i>
                          </span> */}

                          {errors.password && (
                            <div
                              className="invalid-feedback"
                              style={{
                                textAlign: "left",
                                padding: " 0px 1.2rem",
                              }}
                            >
                              {errors.password}
                            </div>
                          )}
                        </div>
                        {/* <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div> */}
                        {/* <button
                          className="btn btn-primary btn-user btn-block"
                          style={{
                            backgroundColor: "#F5007E",
                            borderColor: "#F5007E",
                          }}
                        >
                          Login
                        </button> */}

                        <button
                          className="btn btn-primary btn-user btn-block"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <img
                              src={loadingGif}
                              alt="Loading..."
                              style={{ width: "20px", height: "20px" }}
                            />
                          ) : (
                            "Login"
                          )}
                        </button>
                        {/* <hr /> */}

                        {/* <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with Google
                        </a> */}

                        {/* <Link
                          to=""
                          className="btn btn-primary btn-user btn-block"
                        >
                          <i className="fab fa-linkedin fa-fw"></i>
                          Login with LinkedIn
                        </Link> */}
                      </form>

                      <hr />

                      <div className="text-center mt-5 mb-3">
                        <Link to="/forgot-password" className="medium">
                          Forgot Password?
                        </Link>
                      </div>

                      <div className="text-center">
                        <Link to="/register" className="medium">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
