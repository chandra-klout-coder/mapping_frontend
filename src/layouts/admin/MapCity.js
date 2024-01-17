import React, { useState, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import loadingGif from "../../assets/images/load.gif";

function MapCity(props) {

  const history = useHistory();

  const data_module_type = "city";

  const [cityData, setCityData] = useState([]);

  const [unassignedData, setUnassignedData] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const [assignDataList, setAssignDataList] = useState([]);
  const [unSelectedCities, setUnSelectedCities] = useState([]);

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    city: "",
    city_data: [],
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

    axios.get(`/api/cities`).then((res) => {
      if (res.data.status === 200) {
        setCityData(res.data.data);
      }
    });
  }, [data_module_type]);

  // Function to handle checkbox change - unassign
  const handleDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setSelectedCities(selectedIds);
  };

  const handleAssignData = (e) => {
    e.preventDefault();

    setAssignDataList((prevAssign) => [
      ...prevAssign,
      ...unassignedData.filter((item) => selectedCities.includes(item.id)),
    ]);

    setUnassignedData((prevUnassigned) =>
      prevUnassigned.filter((item) => !selectedCities.includes(item.id))
    );

    setSelectedCities([]);
  };

  // Function to handle checkbox change - assign
  const handleAssignDropdownChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );

    setUnSelectedCities(selectedIds);
  };

  const handleUnAssignData = (e) => {
    e.preventDefault();

    setUnassignedData((prevAssign) => [
      ...prevAssign,
      ...assignDataList.filter((item) =>
        unSelectedCities.includes(item.id)
      ),
    ]);

    setAssignDataList((prevUnassigned) =>
      prevUnassigned.filter((item) => !unSelectedCities.includes(item.id))
    );

    setUnSelectedCities([]);
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
      case "city":
        if (value === "") {
          fieldErrors[name] = "City is required.";
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

    if (formInput.city === "") {
      fieldErrors.city = "City is required.";
    }

    if (unSelectedCities.length === 0) {
      fieldErrors.city_data = "Assign City is Empty or Not Selected.";
    }

    if (Object.keys(fieldErrors).length === 0) {
      setIsLoading(true);

      let valuesArray = unSelectedCities.map(assignDataListArray);

      const payload = {
        assign_data_id: unSelectedCities,
        assign_data: valuesArray,
        city_id: formInput.city,
      };

      axios
        .post(`/api/assignedCitiesData`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {

          if (res.data.status === 200) {
            
            setAssignDataList((prevUnassigned) =>
              prevUnassigned.filter(
                (item) => !unSelectedCities.includes(item.id)
              )
            );

            swal("Success", res.data.message, "success");

            setFormInput({
              state: "",
              state_data: [],
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
            <h1 className="h3 mb-0 text-gray-800">Map City</h1>
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
            <h6 className="m-0 font-weight-bold text-primary">Map City</h6>
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
                      <h6>Un-Assigned City</h6>

                      <select
                        multiple
                        value={selectedCities}
                        onChange={handleDropdownChange}
                        className="form-control"
                      >
                        {unassignedData.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.value}
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
                      <h6>Assign City</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.city_data ? "is-invalid" : ""
                          }`}
                          multiple
                          value={unSelectedCities}
                          onChange={handleAssignDropdownChange}
                        >
                          {assignDataList.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.value}
                            </option>
                          ))}
                        </select>

                        {errors.city_data && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.city_data}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-3">
                      <h6>Assign to City</h6>

                      <div className="form-group">
                        <select
                          className={`form-control ${
                            errors.city ? "is-invalid" : ""
                          }`}
                          name="city"
                          value={formInput.city}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          onFocus={handleInputFocus}
                          style={{ padding: "0.3rem 1rem", fontSize: "1rem" }}
                        >
                          <option value="">Select City</option>

                          {cityData.length > 0 &&
                            cityData.map((city) => (
                              <option key={city.id} value={city.id}>
                                {city.name}
                              </option>
                            ))}
                        </select>

                        {errors.city && (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {errors.city}
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

export default MapCity;
