import axios from "axios";
import React from "react";
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../authActions";


import swal from "sweetalert";
import routes from "../../routes/routes";
import MasterLayout from "./MasterLayout";
import Home from "../../components/Home";
import Swal from "sweetalert2";
import Logo from "../../assets/img/klout_logo.png";
import mobileLogo from "../../assets/img/klout_mobile_logo.jpg";

function Sidebar({ menuOpen, setMenuOpen, toggleMenu }) {
  const history = useHistory();

  const dispatch = useDispatch();

  //for mobile view
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth <= 768;

  const logoutSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title:
        '<span style="font-size: 24px;">Are you sure want to Logout?</span>',
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`/api/logout`).then(function (res) {
          if (res.data.status === 200) {
            dispatch(logoutSuccess());

            Swal.fire({
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });

            history.push("/login");

            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        });
      }
    });
  };

  return (
    <>
      <ul
        // className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          menuOpen ? "toggled" : ""
        }`}
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          to="/admin/dashboard"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            {/* <i className="fas fa-laugh-wink"></i> */}
          </div>
          <div className="sidebar-brand-text mx-3">
            {/* {
            isMobile ? (
              <img
                className="sidebar-card-illustration mb-2"
                src={mobileLogo}
                alt="Klout Club"
                style={{
                  height: "30px",
                  width: "100%",
                  background: "#efefef",
                  marginTop: "1.5rem",
                }}
              />
            ) : ( */}

            {/* <img
              className="sidebar-card-illustration mb-2"
              src={Logo}
              alt="Klout Club"
              style={{
                height: "60px",
                width: "100%",
                background: "#efefef",
                marginTop: "1.5rem",
              }}
            /> */}

            <h6>Mapping App</h6>
        
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link to="/admin/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Mapping --> */}
        <div className="sidebar-heading">Mapping</div>

        {/* Industry */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i className="fa fa-solid fa-calendar"></i>
            <span>Industry</span>
          </a>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/all-industries" className="collapse-item">
                All Industries
              </Link>
              <Link to="/admin/add-industry" className="collapse-item">
                Add industry
              </Link>
              <Link to="/admin/map-industry" className="collapse-item">
                Map industry
              </Link>
            </div>
          </div>
        </li>

        {/* Company */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            <i className="fa fa-solid fa-calendar"></i>
            <span>Company</span>
          </a>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/all-companies" className="collapse-item">
                All Companies
              </Link>
              <Link to="/admin/add-company" className="collapse-item">
                Add Company
              </Link>
              <Link to="/admin/map-company" className="collapse-item">
                Map Company
              </Link>
            </div>
          </div>
        </li>

        {/* Job-Title */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseSeven"
            aria-expanded="true"
            aria-controls="collapseSeven"
          >
            <i className="fa fa-solid fa-calendar"></i>
            <span>Job-Title</span>
          </a>
          <div
            id="collapseSeven"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/all-job-titles" className="collapse-item">
                All Job Titles
              </Link>
              <Link to="/admin/add-job-title" className="collapse-item">
                Add Job Title
              </Link>
              <Link to="/admin/map-job-title" className="collapse-item">
                Map Job Title
              </Link>
            </div>
          </div>
        </li>

        {/* Country */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            <i className="fa fa-solid fa-calendar"></i>
            <span>Country</span>
          </a>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/all-countries" className="collapse-item">
                All Countries
              </Link>
              <Link to="/admin/add-country" className="collapse-item">
                Add Country
              </Link>
              <Link to="/admin/map-country" className="collapse-item">
                Map Country
              </Link>
            </div>
          </div>
        </li>

        {/* State */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseEight"
            aria-expanded="true"
            aria-controls="collapseEight"
          >
            <i className="fa fa-solid fa-calendar"></i>
            <span>State</span>
          </a>
          <div
            id="collapseEight"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/all-states" className="collapse-item">
                All States
              </Link>
              <Link to="/admin/add-state" className="collapse-item">
                Add State
              </Link>
              <Link to="/admin/map-state" className="collapse-item">
                Map State
              </Link>
            </div>
          </div>
        </li>

        {/* City */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseSix"
            aria-expanded="true"
            aria-controls="collapseSix"
          >
            <i className="fa fa-solid fa-calendar"></i>
            <span>City</span>
          </a>
          <div
            id="collapseSix"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/all-cities" className="collapse-item">
                All Cities
              </Link>
              <Link to="/admin/add-city" className="collapse-item">
                Add City
              </Link>
              <Link to="/admin/map-city" className="collapse-item">
                Map City
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        {/* <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i className="fa fa-solid fa-database"></i>
            <span>Mapping Data</span>
          </a>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/admin/add-skills" className="collapse-item">
                Add Skills
              </Link>
              <Link to="/admin/add-country" className="collapse-item">
                Add Country
              </Link>
              <Link to="/admin/add-state" className="collapse-item">
                Add State
              </Link>
              <Link to="/admin/add-city" className="collapse-item">
                Add City
              </Link>
              <Link to="/admin/add-industry" className="collapse-item">
                Add Industry
              </Link>
              <Link to="/admin/add-company" className="collapse-item">
                Add Company
              </Link>
              <Link to="/admin/add-job-title" className="collapse-item">
                Add Job Title
              </Link>
            </div>
          </div>
        </li> */}

        {/* <!-- Nav Item - Charts --> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/admin/get-help">
            <i className="fas fa-hands-helping"></i>
            <span>Get Help</span>
          </Link>
        </li> */}

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/admin/faqs">
            <i className="fa fa-solid fa-question"></i>
            <span>FAQ's</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Logout --> */}
        <li className="nav-item">
          <button className="nav-link" onClick={logoutSubmit}>
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            <span>Logout</span>
          </button>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        {/* <div className="sidebar-card d-none d-lg-flex"> */}
        {/* <img
            className="sidebar-card-illustration mb-2"
            src="assets/img/undraw_rocket.svg"
            alt="..."
          /> */}
        {/* <p className="text-center mb-2">
            <strong>Klout Club Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <Link className="btn btn-success btn-sm" to="/upgrade">
            Upgrade to Pro!
          </Link> */}
        {/* </div> */}
      </ul>
    </>
  );
}

export default Sidebar;
