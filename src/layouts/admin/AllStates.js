import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import DefaultBanner from "../../assets/images/default-banner.jpg";

function AllStates() {
    
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    axios.get("/api/states").then((res) => {
      if (res.data.status === 200) {
        setData(res.data.data);
      }

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = data.filter((d) => {
      const nameMatch = d.name.toLowerCase().includes(nameFilter.toLowerCase());
      return nameMatch;
    });

    const searchFiltered = filtered.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(searchFiltered);
  }, [nameFilter, search, data]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const deleteRow = (e, id) => {
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
          .delete(`/api/destroy-states/${id}`)
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

  let dataList = "";

  if (loading) {
    return <h6>Loading...</h6>;
  } else {
    dataList = paginatedData.map((row) => {
      return (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td style={{ padding: "14px 4px" }}>{row.name}</td>
          <td>{row.parent_id}</td>
          <td>
            {/* <Link
              to={`view-state/${row.id}`}
              data-toggle="tooltip"
              data-placement="bottom"
              title="View State"
              className="btn btn-sm btn-info btn-circle mt-2"
              style={{ borderRadius: "50%", color: "#fff" }}
            >
              <i class="fas fa-eye"></i>
            </Link> */}
            &nbsp; &nbsp;
            <Link
              to={`edit-state/${row.id}`}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit State"
              className="btn btn-sm btn-primary btn-circle mt-2"
              style={{ borderRadius: "50%" }}
            >
              <i class="fas fa-edit"></i>
            </Link>
            &nbsp; &nbsp;
            <button
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete State"
              className="btn btn-sm btn-danger btn-circle mt-2"
              onClick={(e) => deleteRow(e, row.id)}
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
      <div className="d-sm-flex align-items-center justify-content-between m-4">
        <h1 className="h3 mb-0 text-gray-800">All States</h1>

        <Link
          to="/admin/add-state"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          style={{
            backgroundColor: "#F5007E",
            borderColor: "#F5007E",
            color: "white",
            borderRadius: "12px",
          }}
        >
          <i className="fa fa-plus fa-sm mx-1"></i> Add State
        </Link>
      </div>

      <div className="row p-3">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              All States
            </h6>
          </div>

          <div className="card-body">
            <div className="row pb-4">
              <div className="col-3">
                <label forHtml="State">State Name</label>
                <input
                  type="text"
                  placeholder="Filter by State"
                  value={nameFilter}
                  className="form-control"
                  onChange={(e) => setNameFilter(e.target.value)}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover" width="100%" cellspacing="4">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>State Name</th>
                    <th>Parent</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.length > 0 ? (
                    dataList
                  ) : (
                    <tr>
                      <td className="text-center" colSpan={7}>
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <nav aria-label="Page navigation comments" className="mt-4">
                {filteredData.length > 0 && (
                  <ReactPaginate
                    previousLabel="<< Previous"
                    nextLabel="Next >>"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={2}
                    pageCount={Math.ceil(filteredData.length / itemsPerPage)}
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

export default AllStates;
