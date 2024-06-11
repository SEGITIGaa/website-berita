import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children, setQuery }) => {
  return (
    <div className="col gap-10 font-poppins items-center">
      <Navbar setQuery={setQuery} />
      <main className="w-full px-5 md:px-0 md:w-5/6 col gap-3">{children}</main>
    </div>
  );
};

export default Layout;
