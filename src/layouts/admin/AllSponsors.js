import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

import * as XLSX from "xlsx";

function AllSponsors(props) {
  const [loading, setLoading] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [event, setEvent] = useState([]);

  const [search, setSearch] = useState("");
  const [firstNameFilter, setFirstNameFilter] = useState("");
  const [emailIDFilter, setEmailIDFilter] = useState("");
  const [eventFilter, setEventFilter] = useState("");

  const [phoneFilter, setPhoneFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [event_id, setEventID] = useState(props.match.params.id);

  useEffect(() => {
    axios.get("/api/sponsors").then((res) => {
      if (res.data.status == 200) {
        setSponsors(res.data.data);
        setFilteredSponsors(res.data.data);
      }
      setLoading(false);
    });

    // axios.get(`/api/events/${event_id}`).then((res) => {
    //   if (res.data.status == 200) {
    //     setEvent(res.data.data);
    //   }
    // });
  }, []);

  useEffect(() => {
    // Apply filters whenever name, email, or phoneFilter changes
    const filtered = sponsors.filter((attendee) => {

      const eventMatch = attendee.event_title
        .toLowerCase()
        .includes(eventFilter.toLowerCase());

      const firstnameMatch = attendee.first_name
        .toLowerCase()
        .includes(firstNameFilter.toLowerCase());

      const emailMatch = attendee.official_email
        .toLowerCase()
        .includes(emailIDFilter.toLowerCase());

      // const phoneMatch = attendee.phone_number.includes(phoneFilter);

      return firstnameMatch && emailMatch && eventMatch; // && phoneMatch

    });

    // Apply search filter
    const searchFiltered = filtered.filter((attendee) =>
      attendee.first_name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredSponsors(searchFiltered);
  }, [
    firstNameFilter,
    emailIDFilter,
    eventFilter,
    phoneFilter,
    search,
    sponsors,
  ]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const paginatedData = filteredSponsors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToExcel = () => {
    // Convert attendee data to Excel worksheet
    const worksheet = XLSX.utils.json_to_sheet(filteredSponsors);

    // Create a workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendees");

    // Export the workbook to Excel file
    XLSX.writeFile(workbook, "attendee_list.xlsx");
  };

  const capitalizeWord = (str) => {
    return str;
  };

  const deleteSponsor = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/sponsors/${id}`)
          .then(function (res) {
            Swal.fire({
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            thisClicked.closest("tr").remove();
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "An Error Occured!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  let sponsorList = "";

  if (loading) {
    return <h6>Loading...</h6>;
  } else {
    sponsorList = paginatedData.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index+1}</td>
          <td>{capitalizeWord(item.event_title)}</td>
          <td>{capitalizeWord(item.first_name)}</td>
          <td>{capitalizeWord(item.last_name)}</td>
          <td>{item.job_title}</td>
          <td>{capitalizeWord(item.company)}</td>
          <td>{item.official_email}</td>
          <td>{item.phone_number}</td>
          <td>{item.status === 1 ? "Active" : "Inactive" }</td>
          <td>
            {/* <Link
                to={`add-attendee/${item.id}`}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add Attendees"
                className="btn btn-sm btn-secondary btn-circle"
                style={{ borderRadius: "50%" }}
              >
                <i class="fas fa-user"></i>
              </Link> */}
            <Link
              to={`/admin/view-sponsor-details/${item.uuid}`}
              data-toggle="tooltip"
              data-placement="bottom"
              title="View Sponsor Detail"
              className="btn btn-sm btn-info btn-circle"
              style={{ borderRadius: "50%", color: "#fff" }}
            >
              <i class="fas fa-eye"></i>
            </Link>
            &nbsp; &nbsp;
            <Link
              to={`/admin/edit-sponsor/${item.uuid}`}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit Sponsor"
              className="btn btn-sm btn-primary btn-circle"
              style={{ borderRadius: "50%" }}
            >
              <i class="fas fa-edit"></i>
            </Link>
            &nbsp; &nbsp;
            <button
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete Sponsor"
              className="btn btn-sm btn-danger btn-circle"
              onClick={(e) => deleteSponsor(e, item.id)}
              style={{ borderRadius: "50%" }}
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">All Sponsors</h1>
        {/* <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a> */}
        {/* 
          <Link
            to="/admin/add-event"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            style={{
              backgroundColor: "#F5007E",
              borderColor: "#F5007E",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <i className="fa fa-plus fa-sm"></i> Create New Event
          </Link> */}

        <div className="d-none d-sm-inline-block shadow-sm">
          {/* <Link
            to={`/admin/dashboard`}
            className="btn btn-sm btn-primary shadow-sm"
            style={{
              backgroundColor: "#F5007E",
              borderColor: "#F5007E",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <i class="fa fa-solid fa-arrow-left"></i>&nbsp; Go To Dashboard
          </Link> */}

          <Link
          to="/admin/add-sponsor"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          style={{
            backgroundColor: "#F5007E",
            borderColor: "#F5007E",
            color: "white",
            borderRadius: "12px",
          }}
        >
          <i className="fa fa-plus fa-sm mx-1"></i> Add Sponsor
        </Link>
        </div>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">All Sponsors</h6>
          </div>
          <div className="card-body">
            <div className="row pb-4">
              <div className="col-6 col-lg-3">
                {/* Event filter input */}
                <input
                  type="text"
                  placeholder="Filter by Event"
                  value={eventFilter}
                  className="form-control"
                  onChange={(e) => setEventFilter(e.target.value)}
                />
              </div>

              {/* Name filter input */}
              {/* <div className="col-2">
                <input
                  type="text"
                  placeholder="Filter by Name"
                  value={firstNameFilter}
                  className="form-control"
                  onChange={(e) => setFirstNameFilter(e.target.value)}
                />
              </div> */}

              {/* Email filter input */}
              {/* <div className="col-2">
                <input
                  type="text"
                  placeholder="Filter by Email"
                  value={emailIDFilter}
                  className="form-control"
                  onChange={(e) => setEmailIDFilter(e.target.value)}
                />
              </div> */}

              {/* Phone filter input */}
              {/* <div className="col-2">
                <input
                  type="text"
                  placeholder="Filter by Phone"
                  value={phoneFilter}
                  className="form-control"
                  onChange={(e) => setPhoneFilter(e.target.value)}
                />
              </div> */}

              {/* <div className="col-2">
                  {/* Search input */}
              {/* <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    className="form-control"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div> */}

              {/* <div className="col-3 ">
                <button
                  onClick={exportToExcel}
                  class="btn btn-success float-right"
                >
                  <i class="fa fa-solid fa-download"></i> Export to Excel
                </button>
              </div> */}
            </div>

            <div className="table-responsive">
              <table className="table table-hover" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Event</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Designation</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>{AttendeeList}</tbody> */}
                <tbody>
                  {sponsorList.length > 0 ? (
                    sponsorList
                  ) : (
                    <tr>
                      <td className="text-center" colSpan={9}>
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <nav aria-label="Page navigation comments" className="mt-4">
                {filteredSponsors.length > 0 && (
                  <ReactPaginate
                    previousLabel="<< Previous"
                    nextLabel="Next >>"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={2}
                    pageCount={Math.ceil(
                      filteredSponsors.length / itemsPerPage
                    )}
                    onPageChange={({ selected }) =>
                      handlePageChange(selected + 1)
                    }
                    containerClassName="pagination"
                    activeClassName="active"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                  />
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllSponsors;
