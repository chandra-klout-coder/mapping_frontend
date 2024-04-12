import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventCard.css";

function Dashboard() {
  
  const imageBaseUrl = process.env.REACT_APP_API_URL;

  const [totalCity, setTotalCity] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [totalCountry, setTotalCountry] = useState(0);
  const [totalIndustry, setTotalIndustry] = useState(0);
  const [totalJobTitle, setTotalJobTitle] = useState(0);
  const [totalCompany, setTotalCompany] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get("/api/count-mapping-data")
      .then((response) => {
        setTotalCity(response.data.cityCount);
        setTotalState(response.data.stateCount);
        setTotalCompany(response.data.companyCount);
        setTotalCountry(response.data.countryCount);
        setTotalIndustry(response.data.industryCount);
        setTotalJobTitle(response.data.jobTitleCount);
      })
      .catch((error) => {
        console.error("Error fetching event count:", error);
      });
  }, []);

  return (
    <>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between m-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        {/* <Link
          to="/admin/add-event"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          style={{
            backgroundColor: "#F5007E",
            borderColor: "#F5007E",
            color: "white",
            borderRadius: "12px",
          }}
        >
          <i className="fa fa-plus fa-sm mx-1"></i> Create New Event
        </Link> */}
      </div>

      {/* <!-- Content Row - 1 --> */}
      <div className="row m-3">
        <div className="col-xl-4 col-md-6 mb-4">
          <div
            className="card border-left-primary shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <Link to="/admin/all-companies" style={{ textDecoration: "none" }}>
              <div className="card-body">
                <div className="row no-gutters align-items-center p-2">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold mb-1 ">
                      <h6>Companies</h6>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-1000">
                      {totalCompany}
                    </div>
                  </div>
                  <div className="col-auto">
                    {/* <i className="fas fa-calendar fa-2x text-gray-600"></i> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <!-- Total Attendees --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div
            className="card border-left-success shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <Link to="/admin/all-industries" style={{ textDecoration: "none" }}>
              <div className="card-body">
                <div className="row no-gutters align-items-center p-2">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold mb-1 ">
                      <h6>Industries</h6>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-1000">
                      {totalIndustry}
                    </div>
                  </div>
                  <div className="col-auto">
                    {/* <i className="fas fa-users fa-2x text-gray-600"></i> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <!-- Total Sponsors --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div
            className="card border-left-warning shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <Link to="/admin/all-job-titles" style={{ textDecoration: "none" }}>
              <div className="card-body">
                <div className="row no-gutters align-items-center p-2">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold mb-1 ">
                      <h6>Job-Titles</h6>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-1000">
                      {totalJobTitle}
                    </div>
                  </div>
                  <div className="col-auto">
                    {/* <i className="fa fa-solid fa-user-secret fa-2x text-gray-600"></i> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <!-- Upcoming Events --> */}
        {/* <div className="col-xl-3 col-md-6 mb-4">
          <div
            className="card border-left-danger shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <div className="card-body">
              <div className="row no-gutters align-items-center p-2">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold mb-1 ">
                    <h6>Skills </h6>
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-1000">
                23
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-support fa-table fa-2x text-gray-600"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <!-- Content Row 2 --> */}
      <div className="row m-3">
        <div className="col-xl-4 col-md-6 mb-4">
          <div
            className="card border-left-primary shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <Link to="/admin/all-countries" style={{ textDecoration: "none" }}>
              <div className="card-body">
                <div className="row no-gutters align-items-center p-2">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold mb-1 ">
                      <h6>Countries</h6>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-1000">
                      {totalCountry}
                    </div>
                  </div>
                  <div className="col-auto">
                    {/* <i className="fas fa-calendar fa-2x text-gray-600"></i> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <!-- Total Attendees --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div
            className="card border-left-success shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <Link to="/admin/all-states" style={{ textDecoration: "none" }}>
              <div className="card-body">
                <div className="row no-gutters align-items-center p-2">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold mb-1 ">
                      <h6>States</h6>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-1000">
                      {totalState}
                    </div>
                  </div>
                  <div className="col-auto">
                    {/* <i className="fas fa-users fa-2x text-gray-600"></i> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <!-- Total Sponsors --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div
            className="card border-left-warning shadow h-100 py-2"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 25px #0000001A",
              borderRadius: "20px",
              opacity: "1",
            }}
          >
            <Link to="/admin/all-cities" style={{ textDecoration: "none" }}>
              <div className="card-body">
                <div className="row no-gutters align-items-center p-2">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold mb-1 ">
                      <h6>Cities</h6>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-1000">
                      {totalCity}
                    </div>
                  </div>
                  <div className="col-auto">
                    {/* <i className="fa fa-solid fa-location-pin fa-2x text-gray-600"></i> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
