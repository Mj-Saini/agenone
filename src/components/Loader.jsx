
import React, { useEffect, useState } from "react";
import Loader_img from "../assets/img//png/LogoFooter.png";
function Loader() {
  const [loder, setloader] = useState(0);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === 0) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loder ? (
        <section className=" position-fixed w-100 min-vh-100 Loader d-flex flex-column justify-content-center align-items-center position-relative ">
          <div className=" Overlay_loader position-absolute w-100 h-100 z_index0 "></div>
          <div className="d-flex flex-row align-items-center fontsize_loader gap-2  gap-sm-3 z_index1">
<img className="w-50" src={Loader_img} alt="" />
            <span>
              <span className="LoaderAnimation1 Dot_loader d-inline-block "></span>
              <span className="LoaderAnimation2 Dot_loader d-inline-block "></span>
              <span className="LoaderAnimation3 Dot_loader d-inline-block "></span>
              <span className="LoaderAnimation4 Dot_loader d-inline-block "></span>
            </span>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
