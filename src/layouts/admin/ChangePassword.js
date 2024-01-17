import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";

import loadingGif from "../../assets/images/load.gif";

function ChangePassword(props) {
  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const [formInput, setFormInput] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    axios.get(`/api/profile`).then((res) => {
      if (res.data.status === 200) {
        setFormInput(res.data.user);
      } else if (res.data.status === 400) {
        // swal("Error", res.data.message, "error");
        // history.push("/admin/all-attendees");
      }
    });
  }, []);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleNewPassword = () => {
    setShowNewPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleInput = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const fieldErrors = {};

    switch (name) {
      case "old_password":
        if (value === "") {
          fieldErrors[name] = "Password is required.";
        } else if (value.length > 255) {
          fieldErrors[name] = "Maximum 255 Characters Allowed.";
        }
        break;

      case "password":
        if (value === "") {
          fieldErrors[name] = "New Password is required.";
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
    // Add other validation rules as needed for other fields

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  const handleInputFocus = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormInput((prevValidFields) => ({ ...prevValidFields, [name]: value }));
    e.target.classList.remove("is-invalid");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldErrors = {};

    if (formInput.old_password == "" || /^\s*$/.test(formInput.old_password)) {
      fieldErrors.old_password = "Old Password is required.";
    }

    if (formInput.password === "" || /^\s*$/.test(formInput.password)) {
      fieldErrors.password = "New Password is required.";
    }
    if (
      formInput.confirm_password === "" ||
      /^\s*$/.test(formInput.confirm_password)
    ) {
      fieldErrors.confirm_password = "Confirm Password is required.";
    }  else if (formInput.password !== formInput.confirm_password) {
      fieldErrors.confirm_password = "Password mismatch with New password.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      axios
        .post(`/api/changepassword`, formInput, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {

          console.log('data', res);
          if (res.data.status === 200) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_name");

            swal("Success", res.data.message, "success");

            setFormInput({
              ...formInput,
              old_password: "",
              password: "",
              confirm_password: "",
            });

            setErrors({});

            history.push("/login");

            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else if (res.data.status === 422) {
            setErrors(res.data.error);
          } else if (res.data.status === 401) {
            setErrors({ old_password: res.data.message });
          } else if (res.data.status === 403) {
            setErrors({ password: res.data.message });
          } else if (res.data.status === 402) {
            setErrors({ confirm_password: res.data.message });
          }
        });
    } else {
      setErrors(fieldErrors);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="row">
        <div
          className="col-12"
          style={{
            backgroundColor: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Change Password</h1>
            <Link
              to={`/admin/dashboard`}
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              style={{
                backgroundColor: "#F5007E",
                borderColor: "#F5007E",
                color: "white",
                borderRadius: "12px",
              }}
            >
              <i className="fa fa-solid fa-arrow-left"></i> &nbsp; Go To Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Update Password
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form
                  className="user mt-5"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  {/* Old Password */}
                  <div className="form-group row">
                    <label
                      forhtml="old_password"
                      className="col-12 col-lg-3 col-form-label"
                    >
                      Old Password
                    </label>
                    <div className="col-5 col-lg-5 input-group" style={{ width: "100%" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${
                          errors.old_password ? "is-invalid" : ""
                        }`}
                        placeholder="Old Password"
                        name="old_password"
                        value={formInput.old_password}
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
                              showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                            }
                          ></i>
                        </span>
                      </div>

                      {errors.old_password && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {errors.old_password}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="form-group row">
                    <label forhtml="password" className="col-12 col-lg-3 col-form-label">
                      New Password
                    </label>
                    <div className="col-5 input-group" style={{ width: "100%" }}>
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        placeholder="New Password"
                        name="password"
                        value={formInput.password}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                      />

                      <div className="input-group-append">
                        <span
                          className="input-group-text"
                          onClick={handleToggleNewPassword}
                        >
                          <i
                            className={
                              showNewPassword
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
                          }}
                        >
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group row mb-4">
                    <label
                      forhtml="confirm_password"
                      className="col-12 col-lg-3 col-form-label"
                    >
                      Confirm Password
                    </label>
                    <div className="col-5 input-group" style={{ width: "100%" }}>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`form-control ${
                          errors.confirm_password ? "is-invalid" : ""
                        }`}
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value={formInput.confirm_password}
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
                          }}
                        >
                          {errors.confirm_password}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-user"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <img
                        src={loadingGif}
                        alt="Loading..."
                        style={{ width: "20px", height: "20px" }}
                      />
                    ) : (
                      "Update Password"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
