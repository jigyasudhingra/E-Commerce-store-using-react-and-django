import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>Got Questions!</h4>
          <button className="btn btn-warning btn-lg"><a href="mailto:jigyasudhingra@gmail.com">Contact Me</a></button>
          <div className="container">
            <br></br>
            <span className="text-warning">
              An Amazing E-Commerce Store
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
