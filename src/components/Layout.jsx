import React from "react";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import logo from "../assets/logo.svg";

import MobileMenu from "./MobileMenu";
import { FaSearch } from "react-icons/fa";
import AuthNav from "./AuthNav";

const Layout = () => {
  return (
    <div className="">
      <nav className="relative z-10 container mx-auto flex gap-4 h-8 justify-between  items-center py-6 pb-6 mb-8">
        <Link className="mr-8" to="/">
          <img className="w-32" src={logo} alt="logo" />
        </Link>
        <div className="md:flex gap-2 items-center xs:hidden sm:hidden md:block">
          {" "}
          <Link
            className="w-32 hover:text-green-90 hover:font-semibold"
            to="/aboutus"
          >
            Chi siamo
          </Link>
          <Link
            className="w-32 hover:text-green-90 hover:font-semibold"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="w-32 hover:text-green-90 hover:font-semibold"
            to="/contacts"
          >
            Contatti
          </Link>
          <Link
            className="w-32 hover:text-green-90 hover:font-semibold"
            to="/faq"
          >
            FAQ
          </Link>
          <Link to="/search" className=" hover:text-green-90 ">
            <FaSearch />
          </Link>
        </div>

        <MobileMenu />
        <AuthNav />
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
