import React, { useState, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import loadingGif from "../../assets/images/load.gif";

function MapCountry(props) {

  const history = useHistory();

  const data_module_type = "country";

  const [countryData, setCountryData] = useState([]);

  const [unassignedData, setUnassignedData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [assignDataList, setAssignDataList] = useState([]);
  const [unSelectedCountries, setUnSelectedCountries] = useState([]);

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    country: "",
    country_data: [],
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

    axios.get(`/api/countries`).then((res) => {
      if (res.data.status === 200) {
        setCountryData(res.data.data);
      }
    });
  }, [data_module_type]);

  // Function to handle checkbox change - unassign
  const handleDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setSelectedCountries(selectedIds);
  };

  const handleAssignData = (e) => {
    e.preventDefault();

    setAssignDataList((prevAssign) => [
      ...prevAssign,
      ...unassignedData.filter((item) => selectedCountries.includes(item.id)),
    ]);

    setUnassignedData((prevUnassigned) =>
      prevUnassigned.filter((item) => !selectedCountries.includes(item.id))
    );

    setSelectedCountries([]);
  };

  // Function to handle checkbox change - assign
  const handleAssignDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setUnSelectedCountries(selectedIds);
  };

  const handleUnAssignData = (e) => {
    e.preventDefault();

    setUnassignedData((prevAssign) => [
      ...prevAssign,
      ...assignDataList.filter((item) =>
        unSelectedCountries.includes(item.id)
      ),
    ]);

    setAssignDataList((prevUnassigned) =>
      prevUnassigned.filter((item) => !unSelectedCountries.includes(item.id))
    );

    setUnSelectedCountries([]);
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
      case "country":
        if (value === "") {
          fieldErrors[name] = "Country is required.";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const fieldErrors = {};

    if (formInput.country === "") {
      fieldErrors.country = "Country is required.";
    }

    if (unSelectedCountries.length === 0) {
      fieldErrors.country_data = "Assign Country is Empty or Not Selected.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      let valuesArray = unSelectedCountries.map(assignDataListArray);

      const payload = {
        assign_data_id: unSelectedCountries,
        assign_data: valuesArray,
        country_id: formInput.country,
      };

      axios
        .post(`/api/assignedCountriesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {

          if (res.data.status === 200) {
            
            setAssignDataList((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !unSelectedCountries.includes(item.id)
              )
            );

            swal("Success", res.data.message, "success");

            setFormInput({
              country: "",
              country_data: [],
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
            <h1 className="h3 mb-0 text-gray-800">Map Country </h1>
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
            <h6 className="m-0 font-weight-bold text-primary">Map Country</h6>
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
                      <h6>Un-Assigned Country</h6>

                      <select
                        multiple
                        value={selectedCountries}
                        onChange={handleDropdownChange}
                        className="form-control"
                      >
                        {unassignedData.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.value}
                          </option>
                        ))}
                      </select>
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
                      <h6>Assign Country</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.country_data ? "is-invalid" : ""
                          }`}
                          multiple
                          value={unSelectedCountries}
                          onChange={handleAssignDropdownChange}
                        >
                          {assignDataList.map((country) => (
                            <option key={country.id} value={country.id}>
                              {country.value}
                            </option>
                          ))}
                        </select>

                        {errors.country_data && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.country_data}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-3">
                      <h6>Assign to Country</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.country ? "is-invalid" : ""
                          }`}
                          name="country"
                          value={formInput.country}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select Country</option>

                          {countryData.length > 0 &&
                            countryData.map((country) => (
                              <option key={country.id} value={country.id}>
                                {country.name}
                              </option>
                            ))}
                        </select>

                        {errors.country && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.country}
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

export default MapCountry;
