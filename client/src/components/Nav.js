import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import Menu from "../menu.json";
import axios from "axios";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [none, setNone] = useState(true);


  const navMenu = Menu.map((obj) => {
    const { id, name, path } = obj;
    return (
      <li key={id}>
        <Link to={path}>{name}</Link>
      </li>
    );
  });

  const showMenu = () => {
    setOpen(open);
    setClose(!close);
    setNone(!none);
  };
//logout 
const logOut = () => {
  axios.get("user/logout").then((res) => {
    console.log(res);
  });
};
let history = useHistory();
const redirect = () => {
  history.push("/login");
};
  
  return (
    <header>
      <nav>
        <div className="nav-top">
          <div className="logo">img goes here</div>
          <div >{localStorage.getItem("token")? <>  <button
        onClick={() => {
          logOut();
          localStorage.clear();
          redirect();
        }}
      >
        logout
      </button></>:<> <Link to="/login">sign in</Link>
      {"  "}
      <Link to="/register">sign up</Link></>}</div>
          <div
            className={close ? "hamburger close" : "hamburger open"}
            onClick={showMenu}
          >
            <div className="menu-roof"></div>
            <div className="menu-top"></div>
            <div className="menu-center"></div>
            <div className="menu-bottom"></div>
          </div>
        </div>
        <ul className={none ? "none" : "show"} onClick={showMenu}>
          {navMenu}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
