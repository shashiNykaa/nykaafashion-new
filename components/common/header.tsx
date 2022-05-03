import React from "react";
import cs from "classnames";

const Header = () => {
  return (
    <>
      <div
        className={cs(
          "w-100",
          "bg-blue",
          "text-white",
          "text-center",
          "h-8",
          "p-1",
          "flex",
          "items-center",
          "justify-center",
        )}
      >
        <div className={cs("w-1/2 relative flex overflow-x-hidden")}>
          <div className={cs("animate-marquee", "whitespace-nowrap", "mx-20")}>
            <span className={cs("mx-20")}>
              Download the Nykaa Fashion app and get extra ₹300 off. Use code:NFAPP300
            </span>
          </div>
          <div
            className={cs(
              "absolute",
              "animate-marquee2",
              "whitespace-nowrap",
              "top-0",
              "mx-20"
            )}
          >
            <span className={cs("mx-20")}>
              Download the Nykaa Fashion app and get extra ₹300 off. Use code:
              NFAPP300
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
