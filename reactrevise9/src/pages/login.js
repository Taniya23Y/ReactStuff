import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <div className="flex justify-center items-center text-white">
      <Template
        title="Welcome Back"
        desc1="Build Skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your Career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
