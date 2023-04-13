import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/svg/new-logo.svg";

function NavBar() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section>
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100 ">
            <a className="ff_inter fw-bold fs_2xl text-white z_index1" href="#">
              <img src={logo} alt="logo-img" />
              Agenone
              <em></em>{" "}
            </a>{" "}
            <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke "
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke "
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke "
                  href="#"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke "
                  href="#"
                >
                  About Us
                </a>
              </li>
            </ul>
            <ul className="d-none d-lg-flex mb-0 ">
              <span
                className=" d-flex gap-2 align-items-center contect_btn py-2 px-3"
                href="#"
              >
                {" "}
                <a
                  className="ff_inter fw_med fs_sm text-white z_index text_stroke"
                  href="#"
                >
                  Contact Us
                </a>
              </span>
            </ul>
            <div
              className={
                navShow
                  ? "threeline d-xl-none cursor_pointer"
                  : "threeline d-xl-none cursor_pointer"
              }
              onClick={() => setNavShow(!navShow)}
            >
              <div
                className={navShow ? " threelinechild" : " falseline1"}
              ></div>
              <div className={navShow ? " threelinechild" : " falseline"}></div>
              <div
                className={navShow ? " threelinechild" : " falseline3"}
              ></div>
            </div>
          </div>
          <div className="d-lg-none d-flex ">
            <div className={` ${navShow ? "hidenav" : "shownav"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3  pt-3 transition">
                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke "
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke "
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke "
                    href="#"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke "
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <span
                  className=" d-flex gap-2 align-items-center jetzt_btn py-2 px-3"
                  href="#"
                >
                  {" "}
                  <a
                    className="ff_inter fw_med fs_sm text-white z_index text_stroke"
                    href="#"
                  >
                    Contact Us
                  </a>
                </span>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default NavBar;
