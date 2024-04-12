import React, { useState, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import loadingGif from "../../assets/images/load.gif";

function MapJobTitle(props) {
  const history = useHistory();

  const data_module_type = "job_title";

  const [jobTitleData, setJobTitleData] = useState([]);

  const [unassignedData, setUnassignedData] = useState([]);
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);

  const [assignDataList, setAssignDataList] = useState([]);
  const [unSelectedJobTitles, setUnSelectedJobTitles] = useState([]);

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    job_title: "",
    job_title_data: [],
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

    axios.get(`/api/get-job-titles`).then((res) => {
      if (res.data.status === 200) {
        setJobTitleData(res.data.data);
      }
    });
  }, [data_module_type]);

  // Function to handle checkbox change - unassign
  const handleDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setSelectedJobTitles(selectedIds);
  };

  const handleAssignData = (e) => {
    e.preventDefault();

    setAssignDataList((prevAssign) => [
      ...prevAssign,
      ...unassignedData.filter((item) => selectedJobTitles.includes(item.id)),
    ]);

    setUnassignedData((prevUnassigned) =>
      prevUnassigned.filter((item) => !selectedJobTitles.includes(item.id))
    );

    setSelectedJobTitles([]);
  };

  // Function to handle checkbox change - assign
  const handleAssignDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setUnSelectedJobTitles(selectedIds);
  };

  const handleUnAssignData = (e) => {
    e.preventDefault();

    setUnassignedData((prevAssign) => [
      ...prevAssign,
      ...assignDataList.filter((item) => unSelectedJobTitles.includes(item.id)),
    ]);

    setAssignDataList((prevUnassigned) =>
      prevUnassigned.filter((item) => !unSelectedJobTitles.includes(item.id))
    );

    setUnSelectedJobTitles([]);
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
      case "job_title":
        if (value === "") {
          fieldErrors[name] = "Job-Title is required.";
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

  //remove data JobTitle
  const removeJobTitleData = (e) => {
    e.preventDefault();

    const fieldErrors = {};

    if (selectedJobTitles.length === 0) {
      fieldErrors.job_title_remove_data = "Select JobTitle";
    }

    if (Object.keys(fieldErrors).length === 0) {
      const payload = {
        remove_data_id: selectedJobTitles,
      };

      axios
        .post(`/api/removeSelectedJobTitlesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {
            setUnassignedData((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !selectedJobTitles.includes(item.id)
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

    // if (formInput.job_title === "") {
    //   fieldErrors.job_title = "Job-Title is required.";
    // }

    if (unSelectedJobTitles.length === 0) {
      fieldErrors.job_title_data = "Assign Job-Title is Empty or Not Selected.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      let valuesArray = unSelectedJobTitles.map(assignDataListArray);

      //Check Industry data
      let payload;

      if (formInput.job_title !== "") {
        payload = {
          assign_data_id: unSelectedJobTitles,
          assign_data: valuesArray,
          company_id: formInput.company,
        };
      } else {
        payload = {
          assign_data_id: unSelectedJobTitles,
          assign_data: valuesArray,
        };
      }

      axios
        .post(`/api/assignedJobTitlesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.status === 200) {
            setAssignDataList((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !unSelectedJobTitles.includes(item.id)
              )
            );

            swal("Success", res.data.message, "success");

            setFormInput({
              job_title: "",
              job_title_data: [],
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
            <h6 className="m-0 font-weight-bold text-primary">Map Job-Title</h6>
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
                      <h6>Un-Assigned Job-Titles</h6>

                      <select
                        multiple
                        value={selectedJobTitles}
                        onChange={handleDropdownChange}
                        className="form-control"
                      >
                        {unassignedData.map((job_title) => (
                          <option key={job_title.id} value={job_title.id}>
                            {job_title.value}
                          </option>
                        ))}
                      </select>

                      {/* Remove Button */}
                      {selectedJobTitles && selectedJobTitles.length > 0 && (
                        <button
                          className="btn btn-sm btn-danger mt-4 btn-user"
                          style={{
                            fontSize: "14px",
                            padding: "1% 6%",
                            float: "left",
                          }}
                          onClick={removeJobTitleData}
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
                            errors.job_title_data ? "is-invalid" : ""
                          }`}
                          multiple
                          value={unSelectedJobTitles}
                          onChange={handleAssignDropdownChange}
                        >
                          {assignDataList.map((job_title) => (
                            <option key={job_title.id} value={job_title.id}>
                              {job_title.value}
                            </option>
                          ))}
                        </select>

                        {errors.job_title_data && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.job_title_data}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-3">
                      <h6>Assign to Job-Title</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.job_title ? "is-invalid" : ""
                          }`}
                          name="job_title"
                          value={formInput.job_title}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select Job Title</option>

                          {jobTitleData.length > 0 &&
                            jobTitleData.map((job_title) => (
                              <option key={job_title.id} value={job_title.id}>
                                {job_title.name}
                              </option>
                            ))}
                        </select>

                        {errors.job_title && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.job_title}
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

export default MapJobTitle;
