import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUpForm = () => {
  const [setFormData, FormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function FormHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="">
      {/* student-instructor tab  */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form action="">
        {/* fist and last name container  */}
        <div>
          <label htmlFor="">
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={FormData.firstName}
              onChange={FormHandler}
              placeholder="Enter First Name"
            />
          </label>

          <label htmlFor="">
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              value={FormData.lastName}
              onChange={FormHandler}
              placeholder="Enter Last Name"
            />
          </label>
        </div>

        {/* email added  */}
        <label htmlFor="">
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={FormData.email}
            onChange={FormHandler}
            placeholder="Enter Your Email id"
          />
        </label>

        {/* createPassword and confirm Password  */}
        <div>
          <label htmlFor="">
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={FormData.password}
              onChange={FormHandler}
              placeholder="Enter Your password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label htmlFor="">
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={FormData.confirmPassword}
              onChange={FormHandler}
              placeholder="Enter Your password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
