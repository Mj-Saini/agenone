import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/svg/new-logo.svg";

function NavBar() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section id="Nav">
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100 ">
            <a className="ff_inter fw-bold fs_2xl text-white z_index1" href="#">
              <img src={logo} alt="logo-img" />
              <em> Agenone</em>{" "}
            </a>{" "}
            <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
              <li className=" position-relative afterline z_index129">
                <a
                  class="ff_inter fw_med fw_md text-white z_index5 text_stroke bottom_line position-relative"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke   bottom_line"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke  bottom_line"
                  href="#"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  class="ff_inter fw_med fw_md text-white z_index text_stroke  bottom_line"
                  href="#"
                >
                  About Us
                </a>
              </li>
            </ul>
            <ul className="d-none d-lg-flex mb-0 ">
              <span
                className="cursor_pointer d-flex gap-2 align-items-center contect_btn py-2 px-3"
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
            <ul
              className={
                navShow
                  ? "z_index129  border border-white py-2 border-2 px-1 pb-2 px-2 rounded-3 mb-0 d-lg-none"
                  : " border border-white border-2 px-1 pb-1 rounded-3 z_index129 mb-0 d-lg-none "
              }
            >
              <div
                className={
                  navShow
                    ? "threeline d-lg-none cursor_pointer"
                    : "threeline d-lg-none cursor_pointer my-2 mb-1"
                }
                onClick={() => setNavShow(!navShow)}
              >
                <div
                  className={navShow ? " falseline1" : "  threelinechild"}
                ></div>
                {/* <div className={navShow ? "falseline" : " threelinechild"}></div> */}
                <div
                  className={navShow ? "falseline3 " : "threelinechild"}
                ></div>
              </div>
            </ul>
          </div>
          <div className="d-lg-none d-flex ">
            <div className={` ${navShow ? "shownav" : " hidenav"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3  pt-3 transition">
                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke  bottom_line"
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke  bottom_line"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke  bottom_line"
                    href="#"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    class="ff_inter fw_med fw_md text-white z_index text_stroke  bottom_line"
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
