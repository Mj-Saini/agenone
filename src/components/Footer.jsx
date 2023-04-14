import React from "react";
import Footerlogo from "../assets/img/png/LogoFooter.png";
import Footerbg from "../assets/img/png/FooterImg.png";
import btnFooterArrow from "../assets/img/png/ArrowRight.png";

function Footer() {
  return (
    <>
      <section className=" position-relative d-flex flex-column" id="Footer">
        <img
          className=" z_index0 h-100 w-100 position-absolute"
          src={Footerbg}
          alt=""
        />

        <div className=" container position-relative z_index3">
          <div className="d-flex flex-column flex-lg-row justify-content-between px-sm-4 px-3 gap-3 gap-lg-0 px-lg-5 mx-5 align-items-center border_bottom py-xxl-5 py-4">
            <h2
              className="text_clr_white ff_inter fw-normal fs_4xl text-center text-lg-start"
              style={{ maxWidth: "600px" }}>
              Let’s discuss and bring your vision to life.
            </h2>
            <span className="pe-0">
              <span className="footerBtn d-inline-block ff_inter fw-normal fs_md text_clr_white cursor_pointer ">
                Let’s Talk{" "}
                <img style={{ width: "24px" }} src={btnFooterArrow} alt="" />
              </span>
            </span>
          </div>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-center z_index3 mt-lg-5 pt-2">
          <div className=" container">
            <div className="row justify-content-between py-5">
              <div className="col-lg-4">
                <div className="">
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3">
                    <img style={{ width: "170px" }} src={Footerlogo} alt="" />
                    <p className=" ff_inter fs_md fw-normal text_clr_dimGrey my-4 text-center text-sm-start">
                      We're a team of experienced designers, developers, and
                      marketers, passionate about delivering exceptional digital
                      solutions.
                    </p>
                    <div>
                      <a
                        className=" ff_inter fs_md fw-med text_clr_dimGrey"
                        href="mailto:mkhicher404@gmail.com ">
                        hello@agenone.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-sm-end mt-5 mt-lg-0">
                  <div className="col-sm-4">
                    <div className="d-flex flex-column align-items-center">
                      <h2 className="ff_inter fw-bold fs_md text-white">
                        Menu
                      </h2>
                      <div className="d-flex flex-column gap-3 justify-content-center justify-content-sm-start">
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Home
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Services
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            About Us
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Project
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Contact
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-5 mt-sm-0">
                    <div className="d-flex flex-column align-items-center">
                      {" "}
                      <h2 className="ff_inter fw-bold fs_md text-white">
                        Support
                      </h2>
                      <div className="d-flex flex-column gap-3 justify-content-center justify-content-sm-start">
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            FAQ
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Privacy Policy
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Terms of Service
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mt-sm-0 mt-5">
                    <div className="d-flex flex-column align-items-center">
                      {" "}
                      <h2 className="ff_inter fw-bold fs_md text-white">
                        Social Media
                      </h2>
                      <div className="d-flex flex-column gap-3 justify-content-center justify-content-sm-start">
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Linked In
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Twitter
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Instagram
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Dribbble
                          </a>
                        </span>
                        <span className="d-flex justify-content-center">
                          <a
                            className="ff_inter fw-normal fs_md text_clr_dimGrey"
                            href="#">
                            Behance
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
