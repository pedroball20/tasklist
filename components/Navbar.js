import React from "react";

export const Navbar = ({user}) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
            {user?.name} Task List
            </a>
        <div className="d-flex">
          {user ? (
            <a href="/api/auth/logout" className="btn btn-outline-danger">Logout</a>
          ) : ( 
            <a href="/api/auth/login" className="btn btn-outline-success">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};
