import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

function SignUp({ setIsLoggedIn }) {
  return (
    <div className="text-white ">
      <Template
        title="Welcome Back"
        desc1="Join the millions learning to code with StudyNotion for free."
        desc2="Education to future-proof your Career."
        image={signupImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default SignUp;
