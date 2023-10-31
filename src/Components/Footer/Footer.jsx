import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer-container bg-color">
      <div className="footer-wrapper">
        <Link to="/" className="logo-link">
          <h1>
            Sneak<span>Peak</span>
          </h1>
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/">Women</Link>
          </li>
          <li>
            <Link to="/">Collection</Link>
          </li>
          <li>
            <Link to="/">About US</Link>
          </li>
        </ul>

        <ul>
          <Link
            to="https://www.facebook.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FacebookIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </Link>
          <Link
            to="https://www.instagram.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <InstagramIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </Link>

          <Link
            to="https://twitter.com/home"
            style={{ textDecoration: "none", color: "white" }}
          >
            <TwitterIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </Link>
        </ul>
      </div>
      <div className="footer-searchbar">
        <hr id="first"/>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />

        <form action="">
          <input type="search" required placeholder="Search here" />
          <i class="fa fa-search"></i>
        </form>
        <hr />
        <p id="paragraf-footer" style={{ color: 'white' }}>
          Copyright by Albion Paqarizi 2023 All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
