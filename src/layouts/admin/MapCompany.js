import React, { useState, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import loadingGif from "../../assets/images/load.gif";

function MapCompany(props) {
  const history = useHistory();

  const data_module_type = "company";

  const [companyData, setCompanyData] = useState([]);

  const [unassignedData, setUnassignedData] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const [assignDataList, setAssignDataList] = useState([]);
  const [unSelectedCompanies, setUnSelectedCompanies] = useState([]);

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    company: "",
    company_data: [],
  });

  useEffect(() => {
    const formData = new FormData();

    formData.append("data_module_type", data_module_type);

    axios
      .post(`/api/unassignedData`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.status === 200) {
          setUnassignedData(response.data.data);
        } else if (response.data.status === 400) {
          swal("Error", response.data.message, "error");
        }
      });

    axios.get(`/api/get-companies`).then((res) => {
      if (res.data.status === 200) {
        setCompanyData(res.data.data);
      }
    });
  }, [data_module_type]);

  // Function to handle checkbox change - unassign
  const handleDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setSelectedCompanies(selectedIds);
  };

  const handleAssignData = (e) => {
    e.preventDefault();

    setAssignDataList((prevAssign) => [
      ...prevAssign,
      ...unassignedData.filter((item) => selectedCompanies.includes(item.id)),
    ]);

    setUnassignedData((prevUnassigned) =>
      prevUnassigned.filter((item) => !selectedCompanies.includes(item.id))
    );

    setSelectedCompanies([]);
  };

  // Function to handle checkbox change - assign
  const handleAssignDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setUnSelectedCompanies(selectedIds);
  };

  const handleUnAssignData = (e) => {
    e.preventDefault();

    setUnassignedData((prevAssign) => [
      ...prevAssign,
      ...assignDataList.filter((item) => unSelectedCompanies.includes(item.id)),
    ]);

    setAssignDataList((prevUnassigned) =>
      prevUnassigned.filter((item) => !unSelectedCompanies.includes(item.id))
    );

    setUnSelectedCompanies([]);
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
      case "company":
        if (value === "") {
          fieldErrors[name] = "Company is required.";
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

  const assignDataListArray = (id) => {
    
    const matchedItem = assignDataList.find((item) => item.id === id);

    if (matchedItem) {
      return matchedItem.value;
    } else {
      return "Not found";
    }
  };

  //remove data Company
  const removeCompanyData = (e) => {
    e.preventDefault();

    const fieldErrors = {};

    if (selectedCompanies.length === 0) {
      fieldErrors.company_remove_data = "Select Company";
    }

    if (Object.keys(fieldErrors).length === 0) {
      const payload = {
        remove_data_id: selectedCompanies,
      };

      axios
        .post(`/api/removeSelectedCompaniesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {
            setUnassignedData((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !selectedCompanies.includes(item.id)
              )
            );

            swal("Success", res.data.message, "danger");

            setErrors({});
          } else if (res.data.status === 400) {
            swal("Please Assign Data Correctly.", "", "error");
          }
        });
    } else {
      setErrors(fieldErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const fieldErrors = {};

    // if (formInput.company === "") {
    //   fieldErrors.company = "Company is required.";
    // }

    if (unSelectedCompanies.length === 0) {
      fieldErrors.company_data = "Assign Company is Empty or Not Selected.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      let valuesArray = unSelectedCompanies.map(assignDataListArray);

      //Check Industry data
      let payload;

      if (formInput.industry !== "") {
        payload = {
          assign_data_id: unSelectedCompanies,
          assign_data: valuesArray,
          company_id: formInput.company,
        };
      } else {
        payload = {
          assign_data_id: unSelectedCompanies,
          assign_data: valuesArray,
        };
      }

      // const payload = {
      //   assign_data_id: unSelectedCompanies,
      //   assign_data: valuesArray,
      //   company_id: formInput.company,
      // };

      axios
        .post(`/api/assignedCompaniesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {
            setAssignDataList((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !unSelectedCompanies.includes(item.id)
              )
            );

            swal("Success", res.data.message, "success");

            setFormInput({
              company: "",
              company_data: [],
            });

            setErrors({});

            // history.push(`/admin/all-industries`);
          } else if (res.data.status === 400) {
            swal("Please Assign Data Correctly.", "", "error");
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
            <h1 className="h3 mb-0 text-gray-800">Map Company </h1>
            <Link
              to={`/admin`}
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              style={{
                backgroundColor: "#F5007E",
                borderColor: "#F5007E",
                color: "white",
                borderRadius: "12px",
              }}
            >
              <i className="fa fa-solid fa-arrow-left"></i> &nbsp; Go Back
            </Link>
          </div>
        </div>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Map Company</h6>
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
                    <div className="col-md-3">
                      <h6>Un-Assigned Company</h6>

                      <select
                        multiple
                        value={selectedCompanies}
                        onChange={handleDropdownChange}
                        className="form-control"
                      >
                        {unassignedData.map((company) => (
                          <option key={company.id} value={company.id}>
                            {company.value}
                          </option>
                        ))}
                      </select>

                      {/* Remove Button */}
                      {selectedCompanies && selectedCompanies.length > 0 && (
                        <button
                          className="btn btn-sm btn-danger mt-4 btn-user"
                          style={{
                            fontSize: "14px",
                            padding: "1% 6%",
                            float: "left",
                          }}
                          onClick={removeCompanyData}
                        >
                          <i className="fa fa-solid fa-trash"></i> &nbsp; Remove
                        </button>
                      )}
                    </div>

                    <div className="col-md-3 text-center">
                      <h6>Move Data</h6>
                      <button
                        onClick={handleAssignData}
                        className="btn btn-sm btn-primary mt-2"
                      >
                        Move to Assign &nbsp;
                        <i className="fa fa-solid fa-arrow-right"></i>
                      </button>

                      <button
                        onClick={handleUnAssignData}
                        className="btn btn-sm btn-primary mt-2"
                      >
                        <i className="fa fa-solid fa-arrow-left"></i> &nbsp;
                        Move to Un-Assigned
                      </button>
                    </div>

                    <div className="col-md-3">
                      <h6>Assign Company</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.company_data ? "is-invalid" : ""
                          }`}
                          multiple
                          value={unSelectedCompanies}
                          onChange={handleAssignDropdownChange}
                        >
                          {assignDataList.map((company) => (
                            <option key={company.id} value={company.id}>
                              {company.value}
                            </option>
                          ))}
                        </select>

                        {errors.company_data && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.company_data}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-3">
                      <h6>Assign to Company</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.company ? "is-invalid" : ""
                          }`}
                          name="company"
                          value={formInput.company}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select Company</option>

                          {companyData.length > 0 &&
                            companyData.map((company) => (
                              <option key={company.id} value={company.id}>
                                {company.name}
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
                      </div>

                      <button
                        className="btn btn-sm btn-success mt-4 btn-user"
                        style={{
                          fontSize: "14px",
                          padding: "1% 6%",
                          float: "left",
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <img
                            src={loadingGif}
                            alt="Loading"
                            style={{ width: "20px", height: "20px" }}
                          />
                        ) : (
                          "Save Now"
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

export default MapCompany;
