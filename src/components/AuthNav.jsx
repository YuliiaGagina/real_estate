import React from "react";
import { Link } from "react-router-dom";
const AuthNav = () => {
  return (
    <div className="flex ">
      <Link to="#" className="w-16">
        link1
      </Link>
      <Link to="#">link2</Link>
    </div>
  );
};

export default AuthNav;
