import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="navDiv flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-white ">
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

      <div className="flex items-center gap-x-4 text-white">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-white bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#4c4e51]">
              Log in
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#4c4e51]">
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/logout">
            <button
              className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#4c4e51]"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              LogOut
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#4c4e51]">
              DashBoard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
