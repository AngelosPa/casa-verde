import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Menu from "../menu.json";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [none, setNone] = useState(true);
  const [token, setToken] = useState();

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
    localStorage.clear();
    setToken("");
    redirect();
  };
  // redirect to login when its logged out
  let history = useHistory();
  const redirect = () => {
    history.push("/login");
  };
  let getToken = localStorage.getItem("token");
  useEffect(() => {
    setToken(getToken);
  }, [getToken]);

  return (
    <header>
      <nav>
        <div className="nav-top">
        <Link to="/">
        <div className="logo">img</div>
        </Link>
          <div>
            {token ? (
              <>
                <Link to="/basket">
                  <button>Basket</button>
                </Link>
                <button onClick={logOut}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button>Sign In</button>
                </Link>
                <Link to="/register">
                <button>Register</button>
                </Link>
              </>
            )}
          </div>
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
