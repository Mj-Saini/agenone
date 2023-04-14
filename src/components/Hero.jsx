import React from "react";
import NavBar from "./NavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Container } from "react-bootstrap";
import goArrow from "../assets/img/svg/go-arrow.svg";
import star from "../assets/img/svg/star.svg";
import people from "../assets/img/svg/people.svg";
import money from "../assets/img/svg/money.svg";
import expand from "../assets/img/svg/zoom.svg";
import banner from "../assets/img/png/Banner.png";

function Hero() {
  return (
    <>
      <section className="bg_hero_img min-vh-100 d-flex flex-column pt-4 pb-lg-5 pb-4">
        <NavBar />
        <Container className="d-flex flex-grow-1 align-items-center justify-content-center mt-lg-5 mt-4 pb-lg-5">
          <div className="d-flex flex-column align-items-center pt-lg-5 pt-4">
            <div className=" d-flex justify-content-center mb-2">
              <p className="ff_inter fw_med fs_sm text-white bg_dimBlue d-inline px-3 py-2 mb-0 rounded-5">
                NUMBER ONE CREATIVE DIGITAL AGENCY{" "}
              </p>
            </div>
            <h1
              className=" text-center ff_inter fw-bold
             fs_7xl text-white mx-auto lh_02 pt-1"
            >
              <span className="text_grideant d-lg-block">Smart Choices</span>{" "}
              For Your Business Growth{" "}
            </h1>
            <p className=" text-center ff_inter fw_med fs_lg text_clr_dimGrey mx-auto mt-4">
              We're a team of experienced designers, developers,
              <span className="d-lg-block">
                {" "}
                and marketers, passionate about delivering exceptional digital
                solutions.
              </span>
            </p>
            <span className="contect_btn cursor_pointer mt-5">
              <a className="ff_inter fw_med fs_md text-white" href="#">
                Contact Us{" "}
                <svg
                  className="changer"
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
              </a>
            </span>
            <div className="mt-5 pt-lg-4 position-relative d-none d-md-flex">
              <div className="overlay_hero mt-xl-4 pb-2">
                <p className="ff_inter fw-semibold text-white fs_3xl text-center pt-3 pt-xl-0 mt-lg-4 mb-0">
                  Benefit of improving your business
                </p>
                <div className="row mt-xxl-4 justify-content-evenly px-4">
                  <div className="col-3 pt-4">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <img className="expend_img_size" src={expand} alt="img" />
                      <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                        Expanding the Market
                      </p>
                    </div>
                  </div>
                  <div className="col-3 pt-4">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <img className="expend_img_size" src={money} alt="img" />
                      <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                        Cost-Effective
                      </p>
                    </div>
                  </div>
                  <div className="col-3 pt-4">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <img className="expend_img_size" src={star} alt="img" />
                      <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                        More Professional
                      </p>
                    </div>
                  </div>
                  <div className="col-3 pt-4">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <img className="expend_img_size" src={people} alt="img" />
                      <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                        Attract Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img className="w-100 mt-2" src={banner} alt="banner-img" />
            </div>
            <Carousel className="d-md-none">
              <Carousel.Item>
                {" "}
                <div className="mt-5 pt-lg-4 position-relative">
                  <div className="overlay_hero mt-xl-4 pb-2">
                    <p className="ff_inter fw-semibold text-white fs_3xl text-center pt-5 pt-md-3 pt-xl-0 mt-lg-4 mb-0">
                      Benefit of{" "}
                      <span className="d-block d-md-inline">
                        improving your business
                      </span>
                    </p>
                    <div className="row mt-xxl-4 justify-content-center px-4">
                      <div className="col-md-3 pt-4">
                        <div className="d-flex justify-content-center flex-column align-items-center">
                          <img
                            className="expend_img_size"
                            src={expand}
                            alt="img"
                          />
                          <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                            Expanding the Market
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="banner_img mt-2"
                    src={banner}
                    alt="banner-img"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <div className="mt-5 pt-lg-4 position-relative">
                  <div className="overlay_hero mt-xl-4 pb-2">
                    <p className="ff_inter fw-semibold text-white fs_3xl text-center pt-5 pt-md-3 pt-xl-0 mt-lg-4 mb-0">
                      Benefit of{" "}
                      <span className="d-block d-md-inline">
                        improving your business
                      </span>
                    </p>
                    <div className="row mt-xxl-4 justify-content-evenly px-4">
                      <div className="col-md-3 pt-4">
                        <div className="d-flex justify-content-center flex-column align-items-center">
                          <img
                            className="expend_img_size"
                            src={expand}
                            alt="img"
                          />
                          <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                            Expanding the Market
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="banner_img mt-2"
                    src={banner}
                    alt="banner-img"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <div className="mt-5 pt-lg-4 position-relative">
                  <div className="overlay_hero mt-xl-4 pb-2">
                    <p className="ff_inter fw-semibold text-white fs_3xl text-center pt-5 pt-md-3 pt-xl-0 mt-lg-4 mb-0">
                      Benefit of{" "}
                      <span className="d-block d-md-inline">
                        improving your business
                      </span>
                    </p>
                    <div className="row mt-xxl-4 justify-content-evenly px-4">
                      <div className="col-md-3 pt-4">
                        <div className="d-flex justify-content-center flex-column align-items-center">
                          <img
                            className="expend_img_size"
                            src={expand}
                            alt="img"
                          />
                          <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                            Expanding the Market
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="banner_img mt-2"
                    src={banner}
                    alt="banner-img"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <div className="mt-5 pt-lg-4 position-relative">
                  <div className="overlay_hero mt-xl-4 pb-2">
                    <p className="ff_inter fw-semibold text-white fs_3xl text-center pt-5 pt-md-3 pt-xl-0 mt-lg-4 mb-0">
                      Benefit of{" "}
                      <span className="d-block d-md-inline">
                        improving your business
                      </span>
                    </p>
                    <div className="row mt-xxl-4 justify-content-evenly px-4">
                      <div className="col-md-3 pt-4">
                        <div className="d-flex justify-content-center flex-column align-items-center">
                          <img
                            className="expend_img_size"
                            src={expand}
                            alt="img"
                          />
                          <p className="ff_inter fw_med fs_2xl text-center text-white pt-2">
                            Expanding the Market
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="banner_img mt-2"
                    src={banner}
                    alt="banner-img"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;
