import React from "react";
import frameImg from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
// import signupImg from "../assets/signup.png";
// import loginImg from "../assets/login.png";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex justify-evenly items-center">
      <div className="">
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? <SignUpForm /> : <LoginForm />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>Sign Up with Google</button>
      </div>

      <div>
        <img
          src={frameImg}
          alt="frameImg"
          width={504}
          height={504}
          loading="lazy"
        />

        <img
          src={image}
          alt="students"
          width={504}
          height={504}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
