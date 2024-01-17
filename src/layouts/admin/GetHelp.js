import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function GetHelp() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Get Help & Support</h1>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="row p-4">
              <div class="col-sm-12 col-md-6 col-lg-6 p-2">
                <h4>Customer Email </h4>
                <hr />
                <p>
                  <b>Email : </b>support@kloutclub.com
                </p>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6 p-2">
                <h4>Customer Care Number</h4>
                <hr />
                <p>
                  {" "}
                  <b>Toll Free Number : </b>1800 4566 6669
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetHelp;
