import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TiThMenuOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-menu-container">
      <button className="menu-toggle md:hidden" onClick={toggleMenu}>
        <TiThMenuOutline />
      </button>

      <div
        className={`mobile-menu ${isMenuOpen ? "block" : "hidden"} mg:hidden  `}
      >
        <nav className="w-80 h-96 text-white  bg-green-90 p-16 flex flex-col items-center gap-6 justify-center absolute z-50 top-0 left-0">
          <Link onClick={closeMenu} className="w-32" to="/aboutus">
            Chi siamo
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/blog">
            Blog
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/contacts">
            Contatti
          </Link>
          <Link onClick={closeMenu} className="w-32" to="/faq">
            FAQ
          </Link>

          <Link to="/search" onClick={closeMenu}>
            {" "}
            <CiSearch />
          </Link>
          <button className="close-menu" onClick={toggleMenu}>
            ✕
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
