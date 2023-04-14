import React from "react";
import { Container, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <section className="about_bg_gradient py-lg-5 py-4">
        <Container className="pt-xl-4 px-md-0">
          <div>
            <h3 className="ff_inter fw_med fs_4xl text_clr_Primery pb-3">
              We are passionate about helping businesses grow and succeed in the
              digital age. We take pride in our work and strive to exceed your
              expectations every time.
            </h3>
            <Row className="bg_gradient_green mt-5 mx-1">
              <div className="col-lg-3 col-sm-6">
                <div className="py-4 px-4">
                  <h2 className="ff_inter fw-bold fs_7xl text-white text-center">
                    10+
                  </h2>
                  <p className="ff_inter fw_med fs_2xl text_light_white text-center mb-0">
                    Years of Experiences
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="py-4 px-4">
                  <h2 className="ff_inter fw-bold fs_7xl text-white text-center">
                    666+
                  </h2>
                  <p className="ff_inter fw_med fs_2xl text_light_white text-center mb-0">
                    Project Completed
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="py-4 px-4">
                  <h2 className="ff_inter fw-bold fs_7xl text-white text-center">
                    555+
                  </h2>
                  <p className="ff_inter fw_med fs_2xl text_light_white text-center mb-0">
                    Satisfied Client
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="py-4 px-4">
                  <h2 className="ff_inter fw-bold fs_7xl text-white text-center">
                    10+
                  </h2>
                  <p className="ff_inter fw_med fs_2xl text_light_white text-center mb-0">
                    Awards Achieved
                  </p>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
