import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";

import loadingGif from "../../assets/images/load.gif";
import Defaultuser from "../../assets/images/defaultuser.png";

function EditIndustry(props) {
  const history = useHistory();

  const industry_id = props.match.params.id;

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(true);

  const [industryInput, setIndustryInput] = useState(false);

  const [formInput, setFormInput] = useState({
    name: "",
  });

  useEffect(() => {
    axios.get(`/api/show-industries/${industry_id}`).then((res) => {
      if (res.data.status === 200) {
        setFormInput({ name: res.data.data.name });
      } else if (res.data.status === 400) {
        swal("Error", res.data.message, "error");
        // history.push("/admin/all-attendees");
      }
    });
  }, [industry_id]);

  const handleInput = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const fieldErrors = {};

    switch (name) {
      case "name":
        if (value === "") {
          fieldErrors[name] = "Industry Name is required.";
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          fieldErrors[name] =
            "Industry Name should only contain alphabets and spaces.";
        } else if (value.length > 30) {
          fieldErrors[name] = "Maximum 30 Characters Allowed.";
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
    setFormInput((prevValidFields) => ({ ...prevValidFields, [name]: value }));
    e.target.classList.remove("is-invalid");
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  //Add Company Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldErrors = {};

    if (
      !formInput.name === "" ||
      /^\s*$/.test(formInput.name) ||
      formInput.name.length === 0
    ) {
      fieldErrors.industry_name = "Industry Name is required.";
    } else if (!/^[a-zA-Z\s]*$/.test(formInput.name)) {
      fieldErrors.name =
        "Industry Name should only contain alphabets and spaces.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      const formData = new FormData();

      formData.append("name", formInput.name);
      formData.append("_method", "PUT");

      axios
        .post(`/api/update-industries/${industry_id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {

            swal("Success", res.data.message, "success");

            setFormInput({
              ...formInput,
              name: "",
            });

            setErrors({});

            history.push("/admin/all-industries");

          } else if (res.data.status === 422) {
            setErrors(res.data.errors);
          } else if (res.data.status === 400) {
            swal("All fields are mandatory", "", "error");
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
            <h1 className="h3 mb-0 text-gray-800">Edit Industry</h1>
          </div>
        </div>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Add Industry</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-lg-12">
                {/* <h5 className="text-center">Edit Industry Details</h5>
                <hr /> */}
                <form
                  className="user"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  {/* Company Details  */}
                  <div className="form-group row">
                    {/* Company Name */}
                    <div className="col-4">
                      <label forhtml="industry_name">Industry Name</label>

                      <input
                        type="text"
                        className={`form-control ${
                          errors.industry_name ? "is-invalid" : ""
                        }`}
                        placeholder="Industry Name"
                        name="name"
                        value={formInput.name}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                      />

                      {errors.industry_name && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {errors.industry_name}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      forhtml="status"
                      className="col-12 col-form-label"
                    ></label>

                    <div className="col-12 mb-3 mb-sm-0">
                      <button
                        className="btn btn-primary btn-user"
                        style={{
                          backgroundColor: "#F5007E",
                          borderColor: "#F5007E",
                          fontSize: "14px",
                          padding: "1% 6%",
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <img
                              src={loadingGif}
                              alt="Loading..."
                              style={{ width: "20px", height: "20px" }}
                            />
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <hr />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditIndustry;
