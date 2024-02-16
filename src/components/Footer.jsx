import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-gray-99   text-[#ffffff]">
      <div className="container mx-auto px-1 py-4 sm:flex flex-wrap items-center  md:flex-nowrap  justify-between">
        <div className="">
          <Link className="mr-48" to="/">
            <img className="w-8 h-8" src={logo} alt="" />
          </Link>
          <ul>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Le nostre ultime novità
            </li>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Maggiori informazioni sui servizi
            </li>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Il miglior team di professionisti
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <Link className="hover:text-green-20">
            politica sulla riservatezza
          </Link>
          <Link className="hover:text-green-20">Add recipes</Link>
          <Link className="hover:text-green-20">termine di utente</Link>
          <Link className="hover:text-green-20">chi siamo</Link>
        </div>
        <div className="w-2/5">
          <h3 className="text-lg mb-2">Iscriviti alla nostra Newsletter</h3>
          <a
            href="tel:+393889793370"
            className=" text-3xl text-primary-100 mb-2 block hover:text-primary-300"
          >
            +393889793370
          </a>
          <form action="submit">
            <input
              className="mb-4 px-4 py-1 bg-gray-100 border-b-2 focus:outline-none"
              type="text"
              placeholder="Enter your email address"
            />

            <button
              className="block px-20 py-2 border-2 border-green-20 bg-green-20 text-white hover:text-green-20 hover:bg-white"
              type="submit"
            >
              Sottoscrivi
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
