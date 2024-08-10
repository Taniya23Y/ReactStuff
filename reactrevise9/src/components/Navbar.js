import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="navDiv flex justify-evenly text-white">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - DashBoard  */}

      <div className="flex ml-5 mr-3 gap-3 ">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/logout">
            <button
              onClick={() => {
                setIsLoggedIn(false).toast.success("Logged Out");
              }}
            >
              LogOut
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button>DashBoard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
