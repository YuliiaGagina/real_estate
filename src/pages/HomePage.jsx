import React from "react";

import Benefits from "./../components/benefits/index";
import ContactUs from "./../components/ContactUs";
import GoogleMap from "./../components/GoogleMap";
import CookiePopup from "./../components/CookiePopup";

export default function HomePage() {
  return (
    <main className="">
      {/* <div className=" flex items-center justify-center bottom-10  h-96 cover bg-cover"> */}
      <div></div>
      <div className=" flex items-center justify-center  bg-sky relative    cover bg-cover  bottom-20   ">
        <h1 className="text-5xl pl-72 pr-72 py-44 mb-4">
          <span className="text-green-20 xs:text-center ">Benvenuti </span>
          nel nostro portale immobiliare: la vostra chiave per la casa dei
          vostri sogni!
        </h1>
      </div>
      <Benefits />
      <CookiePopup />
      <ContactUs />
      <GoogleMap address="Via Leonina, 46, 00184 Roma RM" />
    </main>
  );
}
