import React, { useState } from "react";
import BgImgGrid from "../assets/img/png/Grid-lines-bg.png";
import Circelsmall from "../assets/img/png/Circlesmall.png";
import CircelBIG from "../assets/img/png/CircleBIG.png";
import img_ourProjects_col6_1 from "../assets/img/png/OurProject_Img1.png";
import img_ourProjects_col6_2 from "../assets/img/png/OurProject_Img2.png";
import Circle_Arrow from "../assets/img/png/bg_layer_arrow_ourProjects.png";
import bg_layer_blur from "../assets/img/png/Img_bgBlur_OurProjects.png";
import Logo1 from "../assets/img/png/Slack.png";
import Logo2 from "../assets/img/png/Google.png";
import Logo3 from "../assets/img/png/Netflix.png";
import Logo4 from "../assets/img/png/Airndb.png";
import Logo5 from "../assets/img/png/Adobe.png";
import Logo6 from "../assets/img/png/Microsoft.png";

function OurProjects() {
  const [activeTab, setActiveTab] = useState("Digital");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section
        id="project"
        className="bg_img_Ourprojects bg_primery position-relative min-vh-100 "
      >
        <img
          src={BgImgGrid}
          className=" position-absolute w-100 h-100 z_index0"
          alt="Error to Fatch Api"
        />
        <img
          className=" position-absolute z_index1 start-0 top-0"
          src={Circelsmall}
          alt="Error to Fatch Api"
        />
        <img
          className=" position-absolute z_index1 end-0 bottom-0"
          src={CircelBIG}
          alt="Error to Fatch Api"
        />
        <div className=" container position-relative z_index2">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="py-md-5 py-4 "
          >
            ======={" "}
            <h2 className=" text-center ff_intes fs_7xl fw-bold text_clr_white">
              Our Project Have Been <span className="text_Grident">Done</span>{" "}
            </h2>
            <p
              style={{ maxWidth: "928px" }}
              className="text-center ff_inter fs_lg fw-med mx-auto text_clr_dimGrey pt-3"
            >
              Take a look at some of our recent projects and see how we've
              helped other businesses elevate their brand and drive business
              growth.
            </p>
            <div className="d-flex justify-content-center mt-5 gap-sm-2 pt-3">
              <div className=" text_clr_offBlue fw-med fs_sm ff_inter  bg-white d-inline-block p-1 p-sm-2 rounded-100 ">
                <span
                  className={activeTab ? "Digital cursor_pointer" : "active"}
                  onClick={() => handleTabClick("Digital")}
                >
                  <span className="btn_our_info cursor_pointer d-inline-block">
                    UI/UX
                    <span className="d-none d-sm-inline-block">
                      {" "}
                      Design{" "}
                    </span>{" "}
                  </span>
                </span>
                <span
                  className={activeTab ? "Digital cursor_pointer" : "active"}
                  onClick={() => handleTabClick("Digital")}
                >
                  <span className="btn_our_info cursor_pointer d-inline-block">
                    <span className="d-none d-d-sm-inline-block"> Digital</span>{" "}
                    Marketing
                  </span>
                </span>
                <span
                  className={activeTab ? "uiux cursor_pointer" : "active"}
                  onClick={() => handleTabClick("uiux")}
                >
                  <span className="btn_our_info cursor_pointer d-inline-block">
                    <span className="d-none d-lg-inline-block"> Sosmed</span>{" "}
                    <span className="d-none d-sm-inline-block">Management</span>{" "}
                    <span className=" d-sm-none">SMM</span>
                  </span>
                </span>
                <span className="btn_our_info cursor_pointer d-inline-block">
                  Dev<span className="d-none d-md-inline-block">elopment</span>
                </span>
              </div>
            </div>
            <div className=" pt-4 mt-5 pb-5">
              <div className="row gap-lg-0 gap-sm-4 gap-2">
                {activeTab === "Digital" && (
                  <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    className="col-lg-6 "
                  >
                    <div className=" bg_blue rounded-4 p-3 overlayParant">
                      <div className=" position-relative">
                        <div className=" position-absolute  w-100 h-100 overlay transition300">
                          <img
                            className=" w-100 h-100 position-absolute"
                            src={bg_layer_blur}
                            alt="Error to Fatch Api"
                          />
                          <div className=" position-absolute CircleBgArrow d-inline-block">
                            <img
                              className="transition300 cursor_pointer img_circle"
                              src={Circle_Arrow}
                              alt="Error to Fatch Api"
                            />
                          </div>
                        </div>
                        <img
                          className="w-100 "
                          src={img_ourProjects_col6_1}
                          alt="Error to Fatch Api"
                        />
                      </div>
                      <h2 className=" text_clr_white pt-2 mt-3 ff_inter fw-bold fs_3xl">
                        Title
                      </h2>
                      <p className=" ff_inter fw-normal fs_lg  text_clr_dimGrey pt-2 mt-1">
                        We are designed to help your business thrive in the
                        online world.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "Digital" && (
                  <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    className="col-lg-6 "
                  >
                    <div className=" bg_blue rounded-4 p-3 overlayParant">
                      <div className=" position-relative">
                        <div className=" position-absolute  w-100 h-100 overlay transition300">
                          <img
                            className=" w-100 h-100 position-absolute"
                            src={bg_layer_blur}
                            alt="Error to Fatch Api"
                          />
                          <div className=" position-absolute CircleBgArrow d-inline-block">
                            <img
                              className="transition300 cursor_pointer img_circle"
                              src={Circle_Arrow}
                              alt="Error to Fatch Api"
                            />
                          </div>
                        </div>
                        <img
                          className="w-100 rounded-5 "
                          src={img_ourProjects_col6_2}
                          alt="Error to Fatch Api"
                        />
                      </div>
                      <h2 className=" text_clr_white pt-2 mt-3 ff_inter fw-bold fs_3xl">
                        Title
                      </h2>
                      <p className=" ff_inter fw-normal fs_lg  text_clr_dimGrey pt-2 mt-1">
                        We are designed to help your business thrive in the
                        online world.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "uiux" && (
                  <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    className="col-lg-6 "
                  >
                    <div className=" bg_blue rounded-4 p-3 overlayParant">
                      <div className=" position-relative">
                        <div className=" position-absolute  w-100 h-100 overlay transition300">
                          <img
                            className=" w-100 h-100 position-absolute"
                            src={bg_layer_blur}
                            alt="Error to Fatch Api"
                          />
                          <div className=" position-absolute CircleBgArrow d-inline-block">
                            <img
                              className="transition300 cursor_pointer img_circle"
                              src={Circle_Arrow}
                              alt="Error to Fatch Api"
                            />
                          </div>
                        </div>
                        <img
                          className="w-100 rounded-5 "
                          src={img_ourProjects_col6_2}
                          alt="Error to Fatch Api"
                        />
                      </div>
                      <h2 className=" text_clr_white pt-2 mt-3 ff_inter fw-bold fs_3xl">
                        Title
                      </h2>
                      <p className=" ff_inter fw-normal fs_lg  text_clr_dimGrey pt-2 mt-1">
                        We are designed to help your business thrive in the
                        online world.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "uiux" && (
                  <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    className="col-lg-6 "
                  >
                    <div className=" bg_blue rounded-4 p-3 overlayParant">
                      <div className=" position-relative">
                        <div className=" position-absolute  w-100 h-100 overlay transition300">
                          <img
                            className=" w-100 h-100 position-absolute"
                            src={bg_layer_blur}
                            alt="Error to Fatch Api"
                          />
                          <div className=" position-absolute CircleBgArrow d-inline-block">
                            <img
                              className="transition300 cursor_pointer img_circle"
                              src={Circle_Arrow}
                              alt="Error to Fatch Api"
                            />
                          </div>
                        </div>
                        <img
                          className="w-100 "
                          src={img_ourProjects_col6_1}
                          alt="Error to Fatch Api"
                        />
                      </div>
                      <h2 className=" text_clr_white pt-2 mt-3 ff_inter fw-bold fs_3xl">
                        Title
                      </h2>
                      <p className=" ff_inter fw-normal fs_lg  text_clr_dimGrey pt-2 mt-1">
                        We are designed to help your business thrive in the
                        online world.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-down"
        data-aos-easing="ease-in"
        data-aos-delay="0"
        data-aos-duration="1000"
        className=" bg_primery "
        id="LogoParant"
      >
        <div className=" container ">
          <div class="LogoParant ">
            <div class="slide_logo d-flex gap-5 px-3 align-items-center">
              <img className="img_logo_1" src={Logo1} alt="Logo Partners" />
              <img className="img_logo_2" src={Logo2} alt="Logo Partners" />
              <img
                className="img_logo_4"
                src={Logo3}
                alt="Logo Partners"
              />{" "}
              <img className="img_logo_3" src={Logo4} alt="Logo Partners" />
              <img className="img_logo_5" src={Logo5} alt="Logo Partners" />
              <img className="img_logo_6" src={Logo6} alt="Logo Partners" />
            </div>
            <div class="slide_logo d-flex gap-5  align-items-center ms-auto">
              {" "}
              <img className="img_logo_1" src={Logo1} alt="Logo Partners" />
              <img className="img_logo_2" src={Logo2} alt="Logo Partners" />
              <img
                className="img_logo_4"
                src={Logo3}
                alt="Logo Partners"
              />{" "}
              <img className="img_logo_3" src={Logo4} alt="Logo Partners" />
              <img className="img_logo_5" src={Logo5} alt="Logo Partners" />
              <img className="img_logo_5" src={Logo6} alt="Logo Partners" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurProjects;
