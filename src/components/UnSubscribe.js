import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import loadingGif from "../assets/images/load.gif";

import backgroundImage from "../assets/images/1.jpg";

function UnSubscribe() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handleResetPassword = async (e) => {
    
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }

    setIsLoading(true);

    if (email !== "") {
      try {
        // Send a request to your Laravel API to initiate the password reset process
        const res = await axios.post("/api/unsubscribe", { email });

        if (res.data.status === 200) {
          setEmailError("");
          setErrorMessage("");
          setEmail("");

          swal("Success", res.data.message, "success");
        } else if (res.data.status === 422) {
          setEmailError(res.data.message);
        } else if (res.data.status === 400) {
          setEmailError(res.data.message);
        }
      } catch (error) {
        setEmailError(error.response.data.message);
        setSuccessMessage("");
      }
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
                      <div className="mb-4"></div>

                      <div>
                        <h1 className="h4 text-gray-900 mb-2">
                          Unsubscribe from our Newsletters
                        </h1>

                        <br />
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

                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control form-control-user ${
                              emailError ? "is-invalid" : ""
                            }`}
                          />

                          {emailError && (
                            <div
                              className="invalid-feedback"
                              style={{
                                textAlign: "left",
                                padding: " 0px 1.2rem",
                              }}
                            >
                              {emailError}
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

export default UnSubscribe;
