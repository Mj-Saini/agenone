import React from "react";
import Avtar1 from "../assets/img/png/Avtar1.png";
import Avtar2 from "../assets/img/png/Avatar2.png";
import Avtar3 from "../assets/img/png/Avatar2.png";
import Avtar4 from "../assets/img/png/Avtar4.png";

function GridComponents() {
  return (
    <>
      <section
        style={{ maxHeight: "800px" }}
        className=" overflow-auto"
        id="GridComponents"
      >
        <div className=" container">
          <div className=" d-grid">
            <div className="gridbox1 rounded-4 bg_lightWhite p-4">
              <p className=" ff_inter fs_lg fw-normal  text_clr_offBlue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div className="d-flex align-items-center gap-3 pt-4">
                <img
                  style={{ width: "72px" }}
                  src={Avtar1}
                  alt="Err????
                   to load Png "
                />
                <div>
                  <h2 className=" text_clr_offBlue ff_inter fs_lg fw-semibold">
                    Clara Insomnia
                  </h2>
                  <h4 className=" text_clr_offBlue ff_inter fs_sm fw-normal">
                    Occupation
                  </h4>
                </div>
              </div>
            </div>
            <div className="gridbox2 rounded-4 bg_lightWhite p-4">
              <p className=" ff_inter fs_lg fw-normal  text_clr_offBlue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div className="d-flex align-items-center gap-3 pt-4">
                <img
                  style={{ width: "72px" }}
                  src={Avtar2}
                  alt="Err to load Png "
                />
                <div>
                  <h2 className=" text_clr_offBlue ff_inter fs_lg fw-semibold">
                    Clara Insomnia
                  </h2>
                  <h4 className=" text_clr_offBlue ff_inter fs_sm fw-normal">
                    Occupation
                  </h4>
                </div>
              </div>
            </div>
            <div className="gridbox3 rounded-4 bg_lightWhite p-4">
              <p className=" ff_inter fs_lg fw-normal  text_clr_offBlue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div className="d-flex align-items-center gap-3 pt-4">
                <img
                  style={{ width: "72px" }}
                  src={Avtar3}
                  alt="Err to load Png "
                />
                <div>
                  <h2 className=" text_clr_offBlue ff_inter fs_lg fw-semibold">
                    Clara Insomnia
                  </h2>
                  <h4 className=" text_clr_offBlue ff_inter fs_sm fw-normal">
                    Occupation
                  </h4>
                </div>
              </div>
            </div>
            <div className="gridbox4 rounded-4 bg_lightWhite p-4">
              <p className=" ff_inter fs_lg fw-normal  text_clr_offBlue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div className="d-flex align-items-center gap-3 pt-4">
                <img
                  style={{ width: "72px" }}
                  src={Avtar4}
                  alt="Err to load Png "
                />
                <div>
                  <h2 className=" text_clr_offBlue ff_inter fs_lg fw-semibold">
                    Clara Insomnia
                  </h2>
                  <h4 className=" text_clr_offBlue ff_inter fs_sm fw-normal">
                    Occupation
                  </h4>
                </div>
              </div>
            </div>
            <div className="gridbox5 rounded-4 bg_lightWhite p-4">
              <p className=" ff_inter fs_lg fw-normal  text_clr_offBlue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div className="d-flex align-items-center gap-3 pt-4">
                <img
                  style={{ width: "72px" }}
                  src={Avtar4}
                  alt="Err to load Png "
                />
                <div>
                  <h2 className=" text_clr_offBlue ff_inter fs_lg fw-semibold">
                    Clara Insomnia
                  </h2>
                  <h4 className=" text_clr_offBlue ff_inter fs_sm fw-normal">
                    Occupation
                  </h4>
                </div>
              </div>
            </div>
            <div className="gridbox6 rounded-4 bg_lightWhite p-4">
              <p className=" ff_inter fs_lg fw-normal  text_clr_offBlue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div className="d-flex align-items-center gap-3 pt-4">
                <img
                  style={{ width: "72px" }}
                  src={Avtar2}
                  alt="Err to load Png "
                />
                <div>
                  <h2 className=" text_clr_offBlue ff_inter fs_lg fw-semibold">
                    Clara Insomnia
                  </h2>
                  <h4 className=" text_clr_offBlue ff_inter fs_sm fw-normal">
                    Occupation
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GridComponents;
