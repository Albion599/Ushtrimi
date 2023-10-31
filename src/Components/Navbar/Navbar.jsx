import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Basket from "../Basket/Basket";
import { Context } from "../../Context/Products";
import Login from "./Login";

const Navbar = () => {
  const [state, dispatch] = useContext(Context);
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const loginForm = () => {
    setLoginVisible(true)
  }

  const logOutForm = () => {
    localStorage.setItem('token', "")
    dispatch({
      type: "USER",
      payland: { username: "" }
    });
  }
  

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <NavLink to="/" className="logo-link">
          <h1>
            Sneak<span>Peak</span>
          </h1>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>

        <ul className={`nav-links ${menuVisible ? "active" : ""}`}>
          <li>
            <NavLink to="/#home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/#men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/#women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/shopall">Collection</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="shopallicon">
            <span onClick={() => setModalVisible(true)} className="shopall-icon-circle">
              <span>{state.basket.length}</span>
              <ShoppingCartIcon />
            </span>
          </li>
          <li>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <div className="search-icon">
                <SearchIcon />
              </div>
            </div>
          </li>
          <li>
            {state.username ? (
              <button className="btn" onClick={() => logOutForm()}>
                Log out - {state.username}
              </button>
            ) : (
              <button className="btn" onClick={() => loginForm()}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
      <Basket open={modalVisible} handleClose={() => setModalVisible(false)} />
      <Login open={loginVisible} handleClose={() => setLoginVisible(false)} />
    </div>
  );
};

export default Navbar;
