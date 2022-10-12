import React from "react";
import "./ErrorPage.css";
import {BiArrowBack} from 'react-icons/bi'
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div style={{display:"flex"}} >
         <div className="text-box">
        <Link to='/' className="btn btn-white btn-animate">
          Back to Main Page
        </Link>
      </div>

        <img
          src="404Page.jpg"
          alt=""
          style={{ height: "433px", width: "600px",marginLeft:"193px" }}
        />

    </div>
  );
};

export default ErrorPage;
