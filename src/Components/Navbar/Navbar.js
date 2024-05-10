import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
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
          <Link to="/" style={{ textDecoration: "none", color: "#171717" }}><img src={logo} alt="" /></Link>
          <p> <Link to="/" style={{ textDecoration: "none", color: "#171717" }}>
              <b>PASAL</b>
            </Link>
          </p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => {setMenu("shop");}}> <Link style={{ textDecoration: "none", color: "black" }} to="/">Shop </Link>{" "} {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={()=>{setMenu("category")}}> <Link  style={{ textDecoration: "none", color: "black" }} to="/category"> Category</Link> {menu === "category" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("mens"); }} > <Link style={{ textDecoration: "none", color: "black" }} to="/mens">Men </Link>{menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => {setMenu("womens");}}><Link style={{ textDecoration: "none", color: "black" }}to="/womens" >Women</Link> {menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => {setMenu("kids"); }}> <Link style={{ textDecoration: "none", color: "black" }} to="/kids"> Kids </Link>{menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div>
          {localStorage.getItem("accessToken") ? (
            <>
              <div className="nav-login-cart">
              <Link to="/cart">
                  <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <button onClick={onLogOut}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <div className="nav-login-cart">
              <Link to="/cart">
                  <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
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
