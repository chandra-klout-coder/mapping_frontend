import React, { useState } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

import backgroundImage from "../assets/images/1.jpg";

import loadingGif from "../assets/images/load.gif";

function ResetPassword() {
  const history = useHistory();

  // const { email, token } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetTokenValid, setResetTokenValid] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: email,
    token: token,
    password: "",
    confirm_password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleInput = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const fieldErrors = {};

    switch (name) {
      case "password":
        if (value === "") {
          fieldErrors[name] = "Password is required.";
        } else if (value.length > 255) {
          fieldErrors[name] = "Maximum 255 Characters Allowed.";
        }
        break;
      case "confirm_password":
        if (value === "") {
          fieldErrors[name] = "Confirm Password is required.";
        } else if (value.length > 255) {
          fieldErrors[name] = "Maximum 255 Characters Allowed.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  const handleInputFocus = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormData((prevValidFields) => ({ ...prevValidFields, [name]: value }));
    e.target.classList.remove("is-invalid");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const fieldErrors = {};

    if (formData.password === "") {
      fieldErrors.password = "Password is required.";
    } else if (formData.password.length > 255) {
      fieldErrors.password = "Maximum 255 Characters Allowed.";
    }

    if (formData.confirm_password === "") {
      fieldErrors.confirm_password = "Password is required.";
    } else if (formData.confirm_password.length > 255) {
      fieldErrors.confirm_password = "Maximum 255 Characters Allowed.";
    } else if (formData.confirm_password !== formData.password) {
      fieldErrors.confirm_password = "Password mismatch.";
    }

    setIsLoading(true);

    if (Object.keys(fieldErrors).length === 0) {
      await axios
        .post(`/api/reset-password`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {

            if (
              localStorage.getItem("auth_token") !== null &&
              localStorage.getItem("auth_name") !== null
            ) {
              axios.post(`/api/logout`).then(function (res) {
                if (res.data.status === 200) {
                  localStorage.removeItem("auth_token");
                  localStorage.removeItem("auth_name");
                }
              });
            }
            swal("Success", res.data.message, "success");

            history.push("/login");
          } else if (res.data.status === 422) {
            Swal.fire({
              title: "Warning!",
              text: res.data.error,
              icon: "warning",
            });
            history.push("/");
          } else if (res.data.status === 404) {
            Swal.fire({
              title: "Warning!",
              text: res.data.error,
              icon: "warning",
            });
            history.push("/");
          }
        });
    } else {
      setErrors(fieldErrors);
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
                        <h1 className="h4 text-gray-900 mb-2">
                          Reset Password
                        </h1>
                      </div>

                      <form className="user" onSubmit={handleResetPassword}>
                        {/*                       
                        {successMessage && (
                          <p className="success-message">{successMessage}</p>
                        )}
                       */}
                        {/* 
                        {errorMessage && (
                          <p className="error-message">{errorMessage}</p>
                        )} */}

                        <div className="form-group input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control form-control-user ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInput}
                            onBlur={handleBlur}
                            onFocus={handleInputFocus}
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

                        <div className="form-group input-group">
                          <input
                            className={`form-control form-control-user ${
                              errors.confirm_password ? "is-invalid" : ""
                            }`}
                            placeholder="Confirm Password"
                            name="confirm_password"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirm_password}
                            onChange={handleInput}
                            onBlur={handleBlur}
                            onFocus={handleInputFocus}
                          />

                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              onClick={handleToggleConfirmPassword}
                            >
                              <i
                                className={
                                  showConfirmPassword
                                    ? "fas fa-eye-slash"
                                    : "fas fa-eye"
                                }
                              ></i>
                            </span>
                          </div>

                          {errors.confirm_password && (
                            <div
                              className="invalid-feedback"
                              style={{
                                textAlign: "left",
                                padding: " 0px 1.2rem",
                              }}
                            >
                              {errors.confirm_password}
                            </div>
                          )}
                        </div>

                        <button
                          type="submit"
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
                            "Submit"
                          )}
                        </button>
                      </form>
                      {/* <hr /> */}
                      {/* <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/login">
                          Already have an account? Login!
                        </Link>
                      </div> */}
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

export default ResetPassword;
