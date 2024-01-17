import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import loadingGif from "../../assets/images/load.gif";
import Defaultuser from "../../assets/images/defaultuser.png";

function EditAttendee(props) {
  const history = useHistory();

  const imageBaseUrl = process.env.REACT_APP_API_URL;

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [companyData, setCompanyData] = useState([]);
  const [designationData, setDesignationData] = useState([]);
  const [companyInput, setCompanyInput] = useState(false);
  const [designationInput, setDesignationInput] = useState(false);

  const [formInput, setFormInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    company: "",
    company_name: "",
    designation: "",
    designation_name: "",
    address: "",
    pincode: "",
    image: null,
    new_image: null,
  });

  useEffect(() => {
    axios.get(`/api/profile`).then((res) => {
      if (res.data.status === 200) {
        setFormInput(res.data.user);

        if (res.data.user.company == 439) {
          setCompanyInput(true);
        } else {
          setCompanyInput(false);
        }

        if (res.data.user.designation == 252) {
          setDesignationInput(true);
        } else {
          setDesignationInput(false);
        }
      } else if (res.data.status === 400) {
        // swal("Error", res.data.message, "error");
        // history.push("/admin/all-attendees");
      }
    });

    axios.get("/api/job-titles").then((res) => {
      if (res.data.status === 200) {
        setDesignationData(res.data.data);
      }
    });

    axios.get("/api/companies").then((res) => {
      if (res.data.status === 200) {
        setCompanyData(res.data.data);
      }
    });
  }, []);

  const handleInput = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleInputFocus = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormInput((prevValidFields) => ({ ...prevValidFields, [name]: value }));
    e.target.classList.remove("is-invalid");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const fieldErrors = {};

    switch (name) {
      case "first_name":
        if (value === "") {
          fieldErrors[name] = "First Name is required.";
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          fieldErrors[name] =
            "First Name should only contain alphabets and spaces.";
        } else if (value.length > 50) {
          fieldErrors[name] = "Maximum 50 Characters Allowed.";
        }
        break;

      case "last_name":
        if (value === "") {
          fieldErrors[name] = "Last Name is required.";
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          fieldErrors[name] =
            "Last Name should only contain alphabets and spaces.";
        } else if (value.length > 50) {
          fieldErrors[name] = "Maximum 50 Characters Allowed.";
        }
        break;
      case "email":
        if (value === "") {
          fieldErrors[name] = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          fieldErrors[name] = "Invalid email format.";
        } else if (value.length > 100) {
          fieldErrors[name] = "Maximum 100 Characters Allowed in Email.";
        }
        break;

      case "mobile_number":
        if (value === "") {
          fieldErrors[name] = "Mobile No. is required.";
        } else if (!/^\d{10}$/.test(value)) {
          fieldErrors[name] = "Invalid Mobile number. Must be 10 digits.";
        }
        break;

      case "designation":
        if (value === "") {
          fieldErrors[name] = "Designation is required.";
        } else if (/^\s*$/.test(value)) {
          fieldErrors[name] =
            "Designation should only contain alphabets and spaces.";
        } else if (value.length > 50) {
          fieldErrors[name] = "Maximum 50 Characters Allowed.";
        }
        break;

      case "company":
        if (value === "") {
          fieldErrors[name] = "Company Name is required.";
        } else if (value.length > 50) {
          fieldErrors[name] = "Maximum 50 Characters Allowed.";
        }
        break;
      case "address":
        if (value === "") {
          fieldErrors[name] = "Address is required.";
        } else if (value.length > 200) {
          fieldErrors[name] = "Maximum 200 Characters Allowed in Address.";
        }
        break;

      case "pincode":
        if (value === "" || /^\s*$/.test(value) || value === 0) {
          fieldErrors[name] = "Pincode is required.";
        } else if (!/^\d{6}$/.test(value)) {
          fieldErrors[name] = "Invalid Pin Code. Must be 6 digits.";
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormInput((prevData) => ({
      ...prevData,
      new_image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user_id = props.match.params.id;

    const fieldErrors = {};

    if (
      formInput.first_name === "" ||
      /^\s*$/.test(formInput.first_name) ||
      formInput.first_name.length === 0
    ) {
      fieldErrors.first_name = "First Name is required.";
    } else if (!/^[a-zA-Z\s]*$/.test(formInput.first_name)) {
      fieldErrors.first_name =
        "First Name should only contain alphabets and spaces.";
    } else if (formInput.first_name > 50) {
      fieldErrors.first_name = "Maximum 50 Characters Allowed.";
    }

    if (
      formInput.last_name === "" ||
      /^\s*$/.test(formInput.last_name) ||
      formInput.last_name.length === 0
    ) {
      fieldErrors.last_name = "Last Name is required.";
    } else if (!/^[a-zA-Z\s]*$/.test(formInput.last_name)) {
      fieldErrors.last_name =
        "Last Name should only contain alphabets and spaces.";
    } else if (formInput.last_name > 50) {
      fieldErrors.last_name = "Maximum 50 Characters Allowed.";
    }

    if (
      formInput.email === "" ||
      /^\s*$/.test(formInput.email) ||
      formInput.email.length === 0
    ) {
      fieldErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formInput.email)) {
      fieldErrors.email = "Invalid email format.";
    } else if (formInput.email > 100) {
      fieldErrors.email = "Maximum 100 Characters Allowed.";
    }

    if (!/^\d{10}$/.test(formInput.mobile_number)) {
      fieldErrors.mobile_number = "Invalid mobile number. Must be 10 digits.";
    }

    if (formInput.designation === "") {
      fieldErrors.designation = "Designation is required.";
    }

    if (formInput.designation_name !== "") {
      if (!/^[a-zA-Z\s]*$/.test(formInput.designation_name)) {
        fieldErrors.designation_name =
          "Designation should only contain alphabets and spaces.";
      } else if (formInput.designation_name > 30) {
        fieldErrors.designation_name = "Maximum 30 Characters Allowed.";
      }
    }

    if (formInput.company === "") {
      fieldErrors.company = "Company is required.";
    }

    if (formInput.company_name !== "") {
      if (formInput.company_name > 50) {
        fieldErrors.company_name = "Maximum 50 Characters Allowed.";
      }
    }

    if (
      formInput.address === "" ||
      /^\s*$/.test(formInput.address) ||
      formInput.address.length === 0
    ) {
      fieldErrors.address = "Address is required.";
    } else if (formInput.address.length > 100) {
      fieldErrors.address = "Maximum 100 Characters Allowed.";
    }

    if (
      formInput.pincode === "" ||
      /^\s*$/.test(formInput.pincode) ||
      formInput.pincode.length === 0
    ) {
      fieldErrors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(formInput.pincode)) {
      fieldErrors.pincode = "Invalid Pin Code. Must be 6 digits.";
    }

    if (formInput.new_image !== "") {
      const allowedFormats = ["image/jpeg", "image/png", "image/gif"];

      if (formInput.new_image) {
        if (!allowedFormats.includes(formInput.new_image.type)) {
          fieldErrors.new_image =
            "Invalid file format. Only JPEG and PNG formats are allowed.";
        }
      }
    }

    let image = {};

    if (formInput.new_image !== "") {
      image = formInput.new_image;
    } else {
      image = formInput.image;
    }

    if (Object.keys(fieldErrors).length === 0) {
      const formData = new FormData();

      setIsLoading(true);

      formData.append("image", image);
      formData.append("first_name", formInput.first_name);
      formData.append("last_name", formInput.last_name);
      formData.append("designation", formInput.designation);
      formData.append("designation_name", formInput.designation_name);
      formData.append("company", formInput.company);
      formData.append("company_name", formInput.company_name);
      formData.append("email", formInput.email);
      formData.append("mobile_number", formInput.mobile_number);
      formData.append("address", formInput.address);
      formData.append("pincode", formInput.pincode);

      // formData.append("_method", "PUT");

      axios
        .post(`/api/updateprofile`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {
            swal("Success", res.data.message, "success");

            // setFormInput({
            //   ...formInput,
            //   first_name: "",
            //   last_name: "",
            //   email: "",
            //   mobile_number: "",
            //   designation: "",
            //   address: "",
            //   company: "",
            //   pincode: "",
            // });

            setErrors({});

            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else if (res.data.status === 422) {
            setErrors(res.data.error);
          } else if (res.data.status === 400) {
            // swal("All fields are mandatory", "", "error");
            // history.push(`/admin/all-attendee/${event_id}`);
          }
        });
    } else {
      setErrors(fieldErrors);
    }

    setIsLoading(false);
  };

  const handleCompanyChange = (event) => {
    const value = event.target.value;

    if (value == 439) {
      setCompanyInput(true);
    } else {
      setCompanyInput(false);
    }

    setFormInput((prevData) => ({ ...prevData, company: value }));
  };

  const handleDesignationChange = (event) => {
    const value = event.target.value;

    if (value == 252) {
      setDesignationInput(true);
    } else {
      setDesignationInput(false);
    }

    setFormInput((prevData) => ({ ...prevData, designation: value }));
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
            <h1 className="h3 mb-0 text-gray-800">Profile</h1>
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
              <i className="fa fa-solid fa-arrow-left"></i> &nbsp; Go To
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Edit Profile</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form
                  className="user mt-5"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  {/* Name */}
                  <div className="form-group row">
                    <label
                      forhtml="first_name"
                      className="col-12 col-lg-2 col-form-label col-auto"
                    >
                      First Name
                    </label>
                    <div className="col-5">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.first_name ? "is-invalid" : ""
                        }`}
                        placeholder="First Name"
                        name="first_name"
                        maxLength={50}
                        value={formInput.first_name}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                      />

                      {errors.first_name && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {errors.first_name}
                        </div>
                      )}
                    </div>

                    <div className="col-5">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.last_name ? "is-invalid" : ""
                        }`}
                        placeholder="Last Name"
                        name="last_name"
                        maxLength={50}
                        value={formInput.last_name}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        onFocus={handleInputFocus}
                      />

                      {errors.last_name && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {errors.last_name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event Venue  */}
                  <div className="form-group row">
                    <label
                      forhtml="email"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-10 col-lg-5 mb-3 mb-sm-0">
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          readOnly
                          placeholder="Email"
                          name="email"
                          value={formInput.email}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                        />

                        {errors.email && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Phone Number  */}
                  <div className="form-group row">
                    <label
                      forhtml="mobile_number"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Mobile Number
                    </label>
                    <div className="col-10 col-lg-5 mb-3 mb-sm-0">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.mobile_number ? "is-invalid" : ""
                          }`}
                          readOnly
                          placeholder="Mobile Number"
                          name="mobile_number"
                          value={formInput.mobile_number}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                        />

                        {errors.mobile_number && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.mobile_number}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* File - Event Image  */}
                  <div className="form-group row">
                    <label
                      forhtml="file"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Profile Picture
                    </label>
                    <div className="col-10 col-lg-5">
                      <input
                        type="file"
                        className={`form-control ${
                          errors.new_image ? "is-invalid" : ""
                        }`}
                        name="file"
                        onChange={handleFileChange}
                        onBlur={handleBlur}
                      />

                      {errors.new_image && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {errors.new_image}
                        </div>
                      )}
                    </div>

                    <div className="col-10 col-lg-5 mt-3">
                      {formInput.new_image && (
                        <img
                          src={URL.createObjectURL(formInput.new_image)}
                          width="60%"
                          alt="defaultUser"
                          style={{ borderRadius: "4px", objectFit: "cover" }}
                        />
                      )}

                      {formInput.image && !formInput.new_image && (
                        <img
                          src={imageBaseUrl + formInput.image}
                          width="60%"
                          alt={formInput.image}
                          style={{ borderRadius: "4px", objectFit: "cover" }}
                        />
                      )}

                      {!formInput.image && !formInput.new_image && (
                        <img
                          src={Defaultuser}
                          width="60%"
                          alt="defaultUser"
                          style={{ borderRadius: "4px", objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="form-group row">
                    <label
                      forhtml="company"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Company
                    </label>
                    <div className="col-10 col-lg-5 mb-3 mb-sm-0">
                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.company ? "is-invalid" : ""
                          }`}
                          name="company"
                          value={formInput.company}
                          onChange={handleCompanyChange}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select Company</option>

                          {companyData.length > 0 &&
                            companyData.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                        {errors.company && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.company}
                          </div>
                        )}
                        {companyInput && (
                          <div className="mt-3">
                            <input
                              type="text"
                              className={`form-control mb-3 ${
                                errors.company_name ? "is-invalid" : ""
                              }`}
                              placeholder="Company Name"
                              name="company_name"
                              value={formInput.company_name}
                              onChange={handleInput}
                              onBlur={handleBlur}
                              onFocus={handleInputFocus}
                            />
                            {errors.company_name && (
                              <div
                                className="invalid-feedback"
                                style={{
                                  textAlign: "left",
                                  padding: " 0px 1.2rem",
                                }}
                              >
                                {errors.company_name}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Job Title  */}
                  <div className="form-group row">
                    <label
                      forhtml="designation"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Designation
                    </label>
                    <div className="col-10 col-lg-5 mb-3 mb-sm-0">
                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.designation ? "is-invalid" : ""
                          }`}
                          name="designation"
                          value={formInput.designation}
                          onChange={handleDesignationChange}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select Designation</option>

                          {designationData.length > 0 &&
                            designationData.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>

                        {errors.designation && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.designation}
                          </div>
                        )}

                        {designationInput && (
                          <div className="mt-3">
                            <input
                              type="text"
                              className={`form-control  mb-3 ${
                                errors.designation_name ? "is-invalid" : ""
                              }`}
                              placeholder="Designation Name"
                              name="designation_name"
                              value={formInput.designation_name}
                              onChange={handleInput}
                              onBlur={handleBlur}
                              onFocus={handleInputFocus}
                            />
                            {errors.designation_name && (
                              <div
                                className="invalid-feedback"
                                style={{
                                  textAlign: "left",
                                  padding: " 0px 1.2rem",
                                }}
                              >
                                {errors.designation_name}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Event Venue  */}
                  <div className="form-group row">
                    <label
                      forhtml="address"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Address
                    </label>
                    <div className="col-10 col-lg-5 mb-3 mb-sm-0">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.address ? "is-invalid" : ""
                          }`}
                          placeholder="Address"
                          name="address"
                          value={formInput.address}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                        />

                        {errors.address && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.address}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Profile Link */}
                  <div className="form-group row">
                    <label
                      forhtml="pincode"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Pincode
                    </label>
                    <div className="col-10 col-lg-5 mb-3 mb-sm-0">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.pincode ? "is-invalid" : ""
                          }`}
                          placeholder="Pincode"
                          name="pincode"
                          maxLength={6}
                          value={formInput.pincode}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                        />

                        {errors.pincode && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.pincode}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      forhtml="status"
                      className="col-2 col-form-label"
                    ></label>
                    <div className="col-8 mb-3 mb-sm-0">
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
                          <img
                            src={loadingGif}
                            alt="Loading..."
                            style={{ width: "20px", height: "20px" }}
                          />
                        ) : (
                          "Update"
                        )}
                      </button>
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

export default EditAttendee;
