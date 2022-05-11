import React from "react";
import cs from "classnames";
import LazyHydrate from "react-lazy-hydration";

const Footer = () => {
  return (
    <>
      <LazyHydrate whenVisible>
        <footer
          className={cs(
            "p-4",
            "bg-nykaaPink",
            "md:justify-between",
            "md:p-2",
            "sticky",
            "top-[100vh]"
          )}
        >
          <div className={cs("w-100", "text-center", "text-white")}>
            2019 - 2022 Nykaa Fashion Pvt. Ltd. All Rights Reserved
          </div>
        </footer>
      </LazyHydrate>
    </>
  );
};

export default Footer;
