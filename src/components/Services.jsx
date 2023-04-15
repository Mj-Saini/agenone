import React from "react";
import { Container, Accordion } from "react-bootstrap";
import design from "../assets/img/webp/Img.webp";

function Services() {
  return (
    <>
      <section className="py-lg-5 py-4">
        <Container>
          <h2 className=" ff_inter fw-bold fs_7xl text_clr_primary text-center py-xl-5">
            The Services We Offer <span className="text_grideant">For You</span>
          </h2>

          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item
              eventKey="0"
              className=" mb-4 p-md-5 p-4 bg_lightWhite"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in"
              data-aos-delay="300"
              data-aos-duration="1000">
              <Accordion.Header className="p-0">
                <h2 className="ff_inter fw-semibold fs_3xl text_clr_darkGrey mb-0 pt-2 w-100">
                  <span className="pe-md-5 pe-sm-4 pe-2">01</span> UI/UX Design
                </h2>{" "}
              </Accordion.Header>{" "}
              <Accordion.Body className="pt-0 ">
                <div className="ps-md-5 ps-sm-4">
                  {" "}
                  <p className="ff_inter fw-normal fs_md text_clr_Grey ps-xl-5 ps-4 ms-2">
                    Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                    eu. Ultricies nisl enim{" "}
                    <span className="d-lg-block">
                      lacus id aliquam montes euismod urna sem.
                    </span>
                  </p>{" "}
                  <img
                    className="w-100 accodion_img ps-xl-5 ps-4 pt-md-2 mx-2"
                    src={design}
                    alt="img-ux-ui"
                  />
                </div>
              </Accordion.Body>{" "}
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              className=" mb-4 p-md-5 p-4 bg_lightWhite"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in"
              data-aos-delay="300"
              data-aos-duration="1000">
              <Accordion.Header className="p-0">
                <h2 className="ff_inter fw-semibold fs_3xl text_clr_darkGrey mb-0 pt-2 w-100">
                  <span className="pe-md-5 pe-sm-4 pe-2">02</span> Digital
                  Marketing
                </h2>{" "}
              </Accordion.Header>{" "}
              <Accordion.Body className="pt-0 ">
                <div className="ps-md-5 ps-sm-4">
                  {" "}
                  <p className="ff_inter fw-normal fs_md text_clr_Grey ps-xl-5 ps-4 ms-2">
                    Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                    eu. Ultricies nisl enim{" "}
                    <span className="d-lg-block">
                      lacus id aliquam montes euismod urna sem.
                    </span>
                  </p>{" "}
                  <img
                    className="w-100 accodion_img ps-xl-5 ps-4 pt-md-2 mx-2"
                    src={design}
                    alt="img-ux-ui"
                  />
                </div>
              </Accordion.Body>{" "}
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              className=" mb-4 p-md-5 p-4 bg_lightWhite"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in"
              data-aos-delay="300"
              data-aos-duration="1000">
              <Accordion.Header className="p-0">
                <h2 className="ff_inter fw-semibold fs_3xl text_clr_darkGrey mb-0 pt-2 w-100 d-flex">
                  <span className="pe-md-5 pe-sm-4 pe-2">03</span>
                  <span> Social Media Management</span>
                </h2>{" "}
              </Accordion.Header>{" "}
              <Accordion.Body className="pt-0 ">
                <div className="ps-md-5 ps-sm-4">
                  {" "}
                  <p className="ff_inter fw-normal fs_md text_clr_Grey ps-xl-5 ps-4 ms-2">
                    Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                    eu. Ultricies nisl enim{" "}
                    <span className="d-lg-block">
                      lacus id aliquam montes euismod urna sem.
                    </span>
                  </p>{" "}
                  <img
                    className="w-100 accodion_img ps-xl-5 ps-4 pt-md-2 mx-2"
                    src={design}
                    alt="img-ux-ui"
                  />
                </div>
              </Accordion.Body>{" "}
            </Accordion.Item>
            <Accordion.Item
              eventKey="3"
              className=" mb-4 p-md-5 p-4 bg_lightWhite"
              data-aos-anchor-placement="center-bottom"
              data-aos="fade-in-right"
              data-aos-easing="ease-in"
              data-aos-delay="300"
              data-aos-duration="2000">
              <Accordion.Header className="p-0">
                <h2 className="ff_inter fw-semibold fs_3xl text_clr_darkGrey mb-0 pt-2 w-100">
                  <span className="pe-md-5 pe-sm-4 pe-2">04</span> Development
                </h2>{" "}
              </Accordion.Header>{" "}
              <Accordion.Body className="pt-0 ">
                <div className="ps-md-5 ps-sm-4">
                  {" "}
                  <p className="ff_inter fw-normal fs_md text_clr_Grey ps-xl-5 ps-4 ms-2">
                    Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                    eu. Ultricies nisl enim{" "}
                    <span className="d-lg-block">
                      lacus id aliquam montes euismod urna sem.
                    </span>
                  </p>{" "}
                  <img
                    className="w-100 accodion_img ps-xl-5 ps-4 pt-md-2 mx-2"
                    src={design}
                    alt="img-ux-ui"
                  />
                </div>
              </Accordion.Body>{" "}
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}

export default Services;
