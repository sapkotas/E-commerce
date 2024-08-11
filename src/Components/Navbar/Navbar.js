import React, {  useState } from "react";
import "./Navbar.css";
import cart_icon from "../Assests/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navigate = useNavigate();

  

  const onLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const onLogin = () => {
    navigate("/login");
  };



  return (
    <>
      <div className="navbar">
      <div className="nav-logo">
          
          <img src= "https://c8.alamy.com/comp/2EA9JJG/clothes-hanger-modern-icon-vector-isolated-on-white-background-shop-symbol-2EA9JJG.jpg" alt="/"></img>
            <p> <Link to="/" style={{ textDecoration: "none", color: "#171717" }}>
                <b>AURORA</b>
              </Link>
            </p>
          </div>
        <ul className="nav-menu">
          <li onClick={() => {setMenu("home");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/">Home </Link>{" "} {menu === "home" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("shop");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/shop">Shop </Link>{" "} {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("about");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/about">About us </Link>{" "} {menu === "about" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("FAQ");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/faq">FAQ </Link>{" "} {menu === "FAQ" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("terms");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/terms">Our Services </Link>{" "} {menu === "terms" ? <hr /> : <></>}</li>

          
       
     
        </ul>
        <div>
          {localStorage.getItem("accessToken") ? (
            <>
              <div className="nav-login-cart">
              <Link to="/cart">
                  <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count"></div>
                <button onClick={onLogOut}>Logout</button>
                <li onClick={() => {setMenu("blogs");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/add">Addproduct </Link></li>
              </div>
            </>
          ) : (
            <>
              <div className="nav-login-cart">
              <Link to="/cart">
                  <img src={cart_icon} alt="" />
                </Link> 
                <div className="nav-cart-count"></div>
                <button onClick={onLogin}>Login</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

