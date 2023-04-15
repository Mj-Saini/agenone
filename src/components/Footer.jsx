import React from "react";
import Footerlogo from "../assets/img/png/LogoFooter.png";
import Footerbg from "../assets/img/png/FooterImg.png";
import circle from "../assets/img/svg/Circle.svg";
import footercircle from "../assets/img/svg/footer-circle.svg";

function Footer() {
  return (
    <>
      <section
        className=" position-relative d-flex flex-column position-relative"
        id="Footer"
      >
        <img
          className="position-absolute  bottom-0 end-0 z_index1"
          src={circle}
          alt="round-footer"
        />
        <img
          className="position-absolute top-0 start-0 z_index1"
          src={footercircle}
          alt="round-footer"
        />
        <img
          className=" z_index0 h-100 w-100 position-absolute"
          src={Footerbg}
          alt=""
        />

        <div className=" container position-relative z_index3">
          <div className="d-flex flex-column flex-lg-row justify-content-between px-sm-4 px-3 gap-3 gap-lg-0 px-lg-5 mx-4 align-items-center border_bottom py-xxl-5 py-4">
            <h2
              className="text_clr_white ff_inter fw-normal fs_4xl text-center text-lg-start"
              style={{ maxWidth: "600px" }}
            >
              Let’s discuss and bring your vision to life.
            </h2>
            <span className="pe-0">
              <span className="contect_btn  d-inline-block ff_inter fw-normal fs_md text_clr_white cursor_pointer ">
                Let’s Talk{" "}
                <svg
                  className="changer ms-2"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 9.49997H12.67L7.79 14.38C7.4 14.77 7.4 15.41 7.79 15.8C8.18 16.19 8.81 16.19 9.2 15.8L15.79 9.20997C16.18 8.81997 16.18 8.18997 15.79 7.79997L9.21 1.19997C8.82 0.809971 8.19 0.809971 7.8 1.19997C7.41 1.58997 7.41 2.21997 7.8 2.60997L12.67 7.49997H1.5C0.95 7.49997 0.5 7.94997 0.5 8.49997C0.5 9.04997 0.95 9.49997 1.5 9.49997Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-center z_index3 mt-lg-5 pt-2">
          <div className=" container">
            <div className="row justify-content-between py-5 ">
              <div className="col-lg-4">
                <div className="">
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3">
                    <a href="#">
                      {" "}
                      <img style={{ width: "170px" }} src={Footerlogo} alt="" />
                    </a>
                    <p className=" ff_inter fs_md fw-normal text_clr_dimGrey my-4 text-center text-sm-start">
                      We're a team of experienced designers, developers, and
                      marketers, passionate about delivering exceptional digital
                      solutions.
                    </p>
                    <div className="d-flex gap-3">
                      <span>
                        <a
                          className=" ff_inter fs_md fw-med text_clr_dimGrey"
                          href="mailto:mkhicher404@gmail.com "
                        >
                          hello@agenone.com
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-sm-end mt-5 mt-lg-0">
                  <div className="col-sm-4 col-6">
                    <div className="d-flex flex-column">
                      <h2 className="ff_inter fw-bold fs_md text-white">
                        Menu
                      </h2>
                      <div className="d-flex flex-column gap-3 mt-4">
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Home
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Services
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            About Us
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Project
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Contact
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="d-flex flex-column">
                      {" "}
                      <h2 className="ff_inter fw-bold fs_md text-white">
                        Support
                      </h2>
                      <div className="d-flex flex-column gap-3 mt-4">
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            FAQ
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Privacy Policy
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Terms of Service
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mt-sm-0 mt-5">
                    <div className="d-flex flex-column">
                      {" "}
                      <h2 className="ff_inter fw-bold fs_md text-white">
                        Social Media
                      </h2>
                      <div className="d-flex flex-column gap-3 mt-4">
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Linked In
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Twitter
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Instagram
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Dribbble
                          </a>
                        </span>
                        <span className="">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#"
                          >
                            Behance
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border_bottom mx-4"></div>
            <p className="ff_inter fw-normal fs_md text_clr_dimGrey text-center py-4 mb-0">
              Copyright © 2023 by Agenone. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
