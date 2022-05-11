import React from "react";
import cs from "classnames";
import dynamic from "next/dynamic";
import LazyHydrate from "react-lazy-hydration";
const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div className={cs("h-screen")}>
        <LazyHydrate whenVisible>
          <Header />
        </LazyHydrate>
        {children}
        <LazyHydrate whenVisible>
          <Footer />
        </LazyHydrate>
      </div>
    </>
  );
};

export default MainLayout;
