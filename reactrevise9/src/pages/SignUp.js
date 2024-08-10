import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

function SignUp({ setIsLoggedIn }) {
  return (
    <div className="text-white ">
      <Template
        title="Welcome Back"
        desc1="Build Skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your Career."
        image={signupImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default SignUp;
