import React from "react";
import Logo from "./../assets/img/klout_original_logo.jpg";
import MockUp from "./../assets/img/hand-mockup.png";
import Showcase from "./../assets/img/showcase.png";
import Showcase2 from "./../assets/img/showcase2.png";
import Author1 from "./../assets/img/author/author1.jpg";
import Author2 from "./../assets/img/author/author2.jpg";
import QrCode from "./../assets/img/qr.svg";

import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="home_container">
      <header class="header sticky">
        <div class="container">
          <div class="row flexbox-center">
            <div class="col-lg-2 col-md-3 col-6">
              <div class="logo">
                <a href="#home">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-lg-10 col-md-9 col-6">
              <div class="responsive-menu"></div>
              <div class="mainmenu">
                <ul id="primary-menu">
                  <li>
                    <a class="nav-link active" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="#feature">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="#download">
                      Download
                    </a>
                  </li>
                  <li>
                    <Link class="appao-btn" to="/login">
                      Login Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Hero Area --> */}
      <section class="hero-area" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-area-content">
                <h1>Explore new markets with the superpower of networking</h1>
                <p>
                  Get in touch with founders and C-levels, earn Social Capital
                  points for helping each other and get support every step of
                  the way from the people who've already walked your path.
                </p>
                <a href="#" class="appao-btn">
                  Google Play
                </a>
                <a href="#" class="appao-btn">
                  App Store
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="hand-mockup text-lg-left text-center">
                <img src={MockUp} alt="Hand Mockup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Klout --> */}
      <section class="about-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sec-title">
                <h2>
                  About Klout Club
                  <span class="sec-title-border">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="single-about-box">
                <i class="icofont icofont-ruler-pencil"></i>
                <h4>Find Decision Makers</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>• Meet inspiring professional.</li>
                  <li>
                    • Meet new business professional, get meetings, drive
                    conversations.
                  </li>
                  <li>• Seize the opportunities that come your way</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-about-box active">
                <i class="icofont icofont-computer"></i>
                <h4>Connect and Network</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>• Meet inspiring professional.</li>
                  <li>
                    • Meet new business professional, get meetings, drive
                    conversations.
                  </li>
                  <li>• Seize the opportunities that come your way</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-about-box">
                <i class="icofont icofont-headphone-alt"></i>
                <h4>Your meeting awaits</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    • Get introduced to the person in conclaves and events.
                  </li>
                  <li>
                    • Get an introduction, start the conversion and then get a
                    meeting.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features --> */}
      <section class="feature-area ptb-90" id="feature">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="sec-title">
                <h2 class="mt-4 mb-4 text-center text-white">
                  How Klout can help you
                </h2>
                <p class="text-white">
                  Klout helped 110k+ people all over the globe solve their tacks
                  with the power of networking.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 offset-2">
              <div class="row">
                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(198, 245, 255)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(255, 219, 245)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(240, 233, 222)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 offset-2">
              <div class="row">
                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(229, 232, 255)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(255, 235, 187)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(196, 255, 175)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 offset-2">
              <div class="row">
                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(229, 245, 209)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(211, 233, 254)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-md-4 mt-1">
                  <a href="">
                    <div
                      class="card"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "rgb(251, 216, 216)",
                      }}
                    >
                      <div class="card-body">
                        <div
                          class="card-img"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        >
                          <img src="" alt="" />
                        </div>

                        <h5
                          class="card-title mb-1 flex"
                          style={{ marginTop: "35%" }}
                        >
                          Get Recommended for New Customers
                        </h5>
                        <a href="#" class="card-link">
                          <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Video Introduction --> */}
      <section
        class="video-introduction-area ptb-90"
        style={{ background: "#efefef" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div>
                <div class="">
                  <iframe
                    src="https://www.youtube.com/embed/SMB6lWGGVwc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{
                      width: "100%",
                      aspectRatio: "72 / 45",
                      marginBottom: "40px",
                      borderRadius: "18px / 20px",
                    }}
                  ></iframe>
                  <div>
                    <h2 class="mt-4 mb-4 text-center">Why Klout Club</h2>
                    <p class="mb-3">
                      Intch makes &nbsp;
                      <span style={{ fontWeight: "700" }}>
                        your network the #1 superpower
                      </span>
                      &nbsp; in growing your business. It’s not just accepting
                      connection requests from strangers — it’s &nbsp;
                      <span style={{ fontWeight: "700" }}>
                        building real connections
                      </span>
                      &nbsp; by helping verified members of the community in a
                      &nbsp;
                      <span style={{ fontWeight: "700" }}>
                        simple and gamified
                      </span>
                      &nbsp; way.
                    </p>

                    <ol style={{ paddingLeft: "14px" }}>
                      <li>
                        Say goodbye to cold outreach — just post your business
                        request on Intch and the app &nbsp;
                        <span style={{ fontWeight: "700" }}>
                          will match it with the relevant people.
                        </span>
                        &nbsp;
                      </li>
                      <li>
                        &nbsp;{" "}
                        <span style={{ fontWeight: "700" }}>
                          Earn Social Capital points
                        </span>
                        &nbsp; for helping others with their requests: introduce
                        someone who can help or share your expertise and support
                        it with a personal story.
                      </li>
                      <li>
                        Use Social Capital to get more replies to your requests
                        and &nbsp;{" "}
                        <span style={{ fontWeight: "700" }}>
                          get in touch with more awesome people.
                        </span>
                        &nbsp;
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- User Feedback --> */}
      <section class="testimonial-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sec-title">
                <h2>
                  User Feedback
                  <span class="sec-title-border">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </h2>
                {/* <!-- <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt
                  </p> --> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="testimonial-wrap">
                <div class="single-testimonial-box">
                  <div class="author-img">
                    <img src={Author1} alt="author" />
                  </div>
                  <h5>Mary Balogh</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in
                  </p>
                  <div class="author-rating">
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="video-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="video-popup">
                <a
                  href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                  class="popup-youtube"
                >
                  <i class="icofont icofont-ui-play"></i>
                </a>
                <h1>Watch Video Demo</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="showcase-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sec-title">
                <h2>
                  How it works
                  <span class="sec-title-border">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </h2>
                {/* <!-- <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt
                  </p> --> */}
              </div>
            </div>
          </div>

          <div class="row flexbox-center">
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <h4>Get relevant requests</h4>
                <p>
                  You specify your areas of expertise. Based on it Intch AI
                  selects requests from over 100k users worldwide.
                </p>
                <a href="#" class="appao-btn appao-btn2">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <img src={Showcase} alt="showcase" />
              </div>
            </div>
          </div>

          <div class="row flexbox-center">
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <img src={Showcase2} alt="showcase" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <h4>Help out yourself or introduce someone you know</h4>
                <p>With Intch it’s faster and easier than writing an email.</p>
                <a href="#" class="appao-btn appao-btn2">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="row flexbox-center">
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <h4>Earn Social Capital</h4>
                <p>
                  When you help others by making introductions or giving advice,
                  you earn SC.
                </p>
                <a href="#" class="appao-btn appao-btn2">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <img src={Showcase} alt="showcase" />
              </div>
            </div>
          </div>

          <div class="row flexbox-center">
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <img src={Showcase2} alt="showcase" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-showcase-box">
                <h4>
                  Achieve your goals through the power of Business Community
                </h4>
                <p>
                  Bigger Social Capital means more people will see your profile
                  and requests.
                </p>
                <a href="#" class="appao-btn appao-btn2">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="single-counter-box">
                <i class="icofont icofont-heart-alt"></i>
                <h1>
                  <span class="counter">10</span>
                </h1>
                <p>Happy Clients</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-counter-box">
                <i class="icofont icofont-protect"></i>
                <h1>
                  <span class="counter">108</span>
                </h1>
                <p>Completed Events</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-counter-box">
                <i class="icofont icofont-download-alt"></i>
                <h1>
                  <span class="counter">1</span>K
                </h1>
                <p>Apps Download</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-counter-box">
                <i class="icofont icofont-trophy"></i>
                <h1>
                  <span class="counter">25</span>
                </h1>
                <p>Our Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="download-area ptb-90"
        id="download"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sec-title">
                <h2>
                  Download Available
                  <span class="sec-title-border">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </h2>
                <p></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul>
                <li>
                  <a
                    href="#"
                    class="download-btn flexbox-center"
                    style={{ background: "black" }}
                  >
                    <div class="download-btn-icon">
                      <i class="icofont icofont-brand-android-robot"></i>
                    </div>
                    <div class="download-btn-text">
                      <p style={{ marginBottom: "0rem" }}>Available on</p>
                      <h4>Android Store</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="download-btn flexbox-center"
                    style={{ background: "black" }}
                  >
                    <div class="download-btn-icon">
                      <i class="icofont icofont-brand-apple"></i>
                    </div>
                    <div class="download-btn-text">
                      <p style={{ marginBottom: "0rem" }}>Available on</p>
                      <h4>Apple Store</h4>
                    </div>
                  </a>
                </li>
                {/* <!-- <li>
                    <a href="#" class="download-btn flexbox-center">
                      <div class="download-btn-icon">
                        <i class="icofont icofont-brand-windows"></i>
                      </div>
                      <div class="download-btn-text">
                        <p>Available on</p>
                        <h4>Windows Store</h4>
                      </div>
                    </a>
                  </li> --> */}
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="sec-title mt-4">
                <p>Or scan this QR code to download the app</p>

                <ul class="mt-4">
                  <li>
                    <a href="#" class="flexbox-center">
                      <div class="download-btn-icon">
                        {/* <!-- <i class="icofont icofont-brand-android-robot"></i>
                           --> */}
                      </div>
                      <div class="download-btn-text">
                        <img src={QrCode} alt="QR" width="50%" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="contact-form">
                <h4>Get in Touch</h4>
                <p class="form-message"></p>
                <form id="contact-form" action="#" method="POST">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                  />
                  <textarea placeholder="Messege" name="message"></textarea>
                  <button type="submit" name="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-address">
                <h4>Address</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <div class="contact-address-icon">
                      <i class="icofont icofont-headphone-alt"></i>
                    </div>
                    <div class="contact-address-info">
                      <a href="tel:+8800000000">+8800000000</a>
                      <a href="tel:+8800000001">+8800000001</a>
                    </div>
                  </li>
                  <li>
                    <div class="contact-address-icon">
                      <i class="icofont icofont-envelope"></i>
                    </div>
                    <div class="contact-address-info">
                      <a href="support@klout.club">support@klout.club</a>
                    </div>
                  </li>
                  <li>
                    <div class="contact-address-icon">
                      <i class="icofont icofont-web"></i>
                    </div>
                    <div class="contact-address-info">
                      <a href="www.klout.club">www.klout.club</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Your email address here" />
                  <button type="submit">Subcribe</button>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-area">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-brand-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-google-plus"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  Copyright &copy; 2023-24 All rights reserved | The Klout Club
                  is made with &nbsp;
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by &nbsp;
                  <a href="https://insightner.com/" target="_blank">
                    Insightner
                  </a>
                </p>

                <p>
                  <a href="/privacy-policy" target="_blank">
                  Privacy Policy 
                  </a>
                  |
                  <a href="/terms-and-condition" target="_blank">
                  Terms and Conditions
                  </a>
                </p>


              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home2;
