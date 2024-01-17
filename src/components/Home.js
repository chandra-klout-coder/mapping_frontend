import React from "react";
import { Link, useHistory } from "react-router-dom";
// import "./Home.css";
import axios from "axios";

import swal from "sweetalert";

function Home() {
  // localStorage.setItem("auth_token", res.data.access_token);
  // localStorage.setItem("auth_name", "user");

  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/logout`).then((res) => {
        if (res.data.status === 200) {
          
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_name");

          swal("Success", res.data.message, "success");

          history.push("/");
        }
      });
    });
  };

  var AuthButtons = "";
  if (!localStorage.getItem("auth_token")) {
    AuthButtons = (
      <>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="btn btn-primary text-white shadow">
            Register Now
          </Link>
        </li>
      </>
    );
  } else {
    AuthButtons = (
      <>
        <li className="nav-item">
          <Link onClick={logoutSubmit} className="nav-link">
            Logout
          </Link>
        </li>
      </>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top shadow-sm bg-white px-4">
        <Link to="/" className="navbar-brand">
          Klout
        </Link>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Event Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>

            {AuthButtons}
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="btn btn-primary text-white shadow"
              >
                Register Now
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* <!-- header --> */}
      <header
        className="header"
        style={{ backgroundImage: "url(assets/images/headerback.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          {/* <div className="description">
            <h1>
              Hello ,Welcome To My official Website
              <p>
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button className="btn btn-outline-secondary btn-lg">See more</button>
            </h1>
          </div> */}
        </div>
      </header>

      {/* <!-- about section --> */}
      <div className="about" id="about">
        <div className="container">
          <h1 className="text-center">About Us</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="assets/images/team-3.jpg" className="img-fluid" />
              <span className="text-justify">S.Web Developer</span>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 desc">
              <h3>D.John</h3>
              <p>
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- portfolio --> */}
      <div className="portfolio" id="portfolio">
        <h1 className="text-center">Portfolio</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
              <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <img
                src="assets/images/portfolio/port13.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Posts section --> */}
      <div className="blog" id="blog">
        <div className="container">
          <h1 className="text-center">Blog</h1>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/images/posts/polit.jpg"
                    className="img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">Post Title</h4>
                  <p className="card-text">
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/images/posts/images.jpg"
                    className="img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">Post Title</h4>
                  <p className="card-text">
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/images/posts/imag2.jpg"
                    className="img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">Post Title</h4>
                  <p className="card-text">
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Team section --> */}
      <div className="team" id="team">
        <div className="container">
          <h1 className="text-center">Our Team</h1>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 item mb-3 d-flex flex-column align-items-center justify-content-center">
              <img
                src="assets/images/team-2.jpg"
                className="img-fluid"
                alt="team"
              />
              <div className="des">Sara</div>
              <span className="text-muted">Manager</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 item mb-3 d-flex flex-column align-items-center justify-content-center">
              <img
                src="assets/images/team-3.jpg"
                className="img-fluid"
                alt="team"
              />
              <div className="des">Chris</div>
              <span className="text-muted">S.enginner</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 item mb-3 d-flex flex-column align-items-center justify-content-center">
              <img
                src="assets/images/team-2.jpg"
                className="img-fluid"
                alt="team"
              />
              <div className="des">Layla</div>
              <span className="text-muted">Front End Developer</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 item mb-3 d-flex flex-column align-items-center justify-content-center">
              <img
                src="assets/images/team-3.jpg"
                className="img-fluid"
                alt="team"
              />
              <div className="des">J.Jirard</div>
              <span className="text-muted">Team Manger</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contact form --> */}
      <div className="contact-form" id="contact">
        <div className="container">
          <form>
            <div className="row">
              <h1 className="mx-3">Get in touch with us</h1>

              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    name=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Mobile Number"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Company Name"
                    name="email"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="No. of Event you Host in a year"
                    name="email"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Message"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  className="btn btn-lg btn-secondary "
                  value="Send"
                  name=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="footer mt-auto py-3" style={{ background: "#F97300" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mt-3 text-center">
              <p>
                klout Club™ is a fully-integrated, cloud-based platform,
                designed by event organizers for event organizers who want to
                curate and delight speakers & sponsors by removing the chaos
                from event execution.
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mt-3 text-center">
              <h4 className="has-text-align-center">
                <strong>
                  <span className="has-inline-color has-white-color">
                    Contact Info
                  </span>
                </strong>
              </h4>

              <p className="has-text-align-center">
                <a
                  href="mailto:support@speakerengage.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  support@speakerengage.com
                </a>
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mt-3 text-center">
              <p className="text-center text-white lead">
                Copyright &copy;{" "}
                <script type="text/javascript">
                  document.write(new Date().getFullYear());
                </script>{" "}
                Klout Club
              </p>
              <p>All Rights Reserved</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mt-3"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
