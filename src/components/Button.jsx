import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Button = ({ page, children, ...rest }) => {
  return (
    <>
      <Link
        to={page}
        className={`rounded-md bg-primary-100 px-10 py-2 hover:bg-primary-500 hover:text-white`}
        {...rest}
      >
        {children}
      </Link>
      <Outlet />
    </>
  );
};

export default Button;
