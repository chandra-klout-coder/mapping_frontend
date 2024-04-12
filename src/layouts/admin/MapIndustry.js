import React, { useState, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import loadingGif from "../../assets/images/load.gif";

function MapIndustry(props) {
  const history = useHistory();

  const data_module_type = "industry";

  const [industryData, setIndustryData] = useState([]);

  const [unassignedData, setUnassignedData] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const [assignDataList, setAssignDataList] = useState([]);
  const [unSelectedIndustries, setUnSelectedIndustries] = useState([]);

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    industry: "",
    industry_data: [],
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

    axios.get(`/api/get-industries`).then((res) => {
      if (res.data.status === 200) {
        setIndustryData(res.data.data);
      }
    });
  }, [data_module_type]);

  // Function to handle checkbox change - unassign
  const handleDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setSelectedIndustries(selectedIds);
  };



  const handleAssignData = (e) => {
    e.preventDefault();

    setAssignDataList((prevAssign) => [
      ...prevAssign,
      ...unassignedData.filter((item) => selectedIndustries.includes(item.id)),
    ]);

    setUnassignedData((prevUnassigned) =>
      prevUnassigned.filter((item) => !selectedIndustries.includes(item.id))
    );

    setSelectedIndustries([]);
  };

  // Function to handle checkbox change - assign
  const handleAssignDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setUnSelectedIndustries(selectedIds);
  };

  const handleUnAssignData = (e) => {
    e.preventDefault();

    setUnassignedData((prevAssign) => [
      ...prevAssign,
      ...assignDataList.filter((item) =>
        unSelectedIndustries.includes(item.id)
      ),
    ]);

    setAssignDataList((prevUnassigned) =>
      prevUnassigned.filter((item) => !unSelectedIndustries.includes(item.id))
    );

    setUnSelectedIndustries([]);
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
      case "industry":
        if (value === "") {
          fieldErrors[name] = "Industry is required.";
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

  //remove data
  const removeIndustryData = (e) => {
    e.preventDefault();

    const fieldErrors = {};

    if (selectedIndustries.length === 0) {
      fieldErrors.industry_remove_data = "Select Industry";
    }

    if (Object.keys(fieldErrors).length === 0) {
      const payload = {
        remove_data_id: selectedIndustries,
      };

      axios
        .post(`/api/removeSelectedIndustriesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {

            setUnassignedData((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !selectedIndustries.includes(item.id)
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

    // if (formInput.industry === "") {
    //   fieldErrors.industry = "Industry is required.";
    // }

    if (unSelectedIndustries.length === 0) {
      fieldErrors.industry_data = "Assign Industry is Empty or Not Selected.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      let valuesArray = unSelectedIndustries.map(assignDataListArray);

      //Check Industry data
      let payload;

      if (formInput.industry !== "") {
        payload = {
          assign_data_id: unSelectedIndustries,
          assign_data: valuesArray,
          industry_id: formInput.industry,
        };
      } else {
        payload = {
          assign_data_id: unSelectedIndustries,
          assign_data: valuesArray,
        };
      }

      axios
        .post(`/api/assignedIndustriesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {
            setAssignDataList((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !unSelectedIndustries.includes(item.id)
              )
            );

            swal("Success", res.data.message, "success");

            setFormInput({
              industry: "",
              industry_data: [],
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
            <h1 className="h3 mb-0 text-gray-800">Map Industry </h1>
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
            <h6 className="m-0 font-weight-bold text-primary">Map Industry</h6>
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
                      <h6>Un-Assigned Industry</h6>
                      <select
                        multiple
                        value={selectedIndustries}
                        onChange={handleDropdownChange}
                        className="form-control"
                      >
                        {unassignedData.map((industry) => (
                          <option key={industry.id} value={industry.id}>
                            {industry.value}
                          </option>
                        ))}
                      </select>

                      {/* Remove Button */}
                      {selectedIndustries && selectedIndustries.length > 0 && (
                        <button
                          className="btn btn-sm btn-danger mt-4 btn-user"
                          style={{
                            fontSize: "14px",
                            padding: "1% 6%",
                            float: "left",
                          }}
                          onClick={removeIndustryData}
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
                      <h6>Assign Industry </h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.industry_data ? "is-invalid" : ""
                          }`}
                          multiple
                          value={unSelectedIndustries}
                          onChange={handleAssignDropdownChange}
                        >
                          {assignDataList.map((industry) => (
                            <option key={industry.id} value={industry.id}>
                              {industry.value}
                            </option>
                          ))}
                        </select>

                        {errors.industry_data && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.industry_data}
                          </div>
                        )}

                        {/* {unSelectedIndustries &&
                          unSelectedIndustries.length > 0 && (
                            <button
                              className="btn btn-sm btn-primary mt-4 btn-user"
                              style={{
                                fontSize: "14px",
                                padding: "1% 6%",
                                float: "left",
                              }}
                              onClick={saveIndustryData}
                            >
                              <i className="fa fa-solid "></i> &nbsp; Save
                            </button>
                          )} */}
                      </div>
                    </div>

                    <div className="col-md-3">
                      <h6>Assign to Industry</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.industry ? "is-invalid" : ""
                          }`}
                          name="industry"
                          value={formInput.industry}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select Industry</option>

                          {industryData.length > 0 &&
                            industryData.map((industry) => (
                              <option key={industry.id} value={industry.id}>
                                {industry.name}
                              </option>
                            ))}
                        </select>

                        {errors.industry && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.industry}
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

export default MapIndustry;
