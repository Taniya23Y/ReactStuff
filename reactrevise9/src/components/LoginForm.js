import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function FormHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <form action="">
        <label htmlFor="">
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={FormHandler}
            placeholder="Enter email id"
            required
          />
        </label>

        <label htmlFor="">
          <p>
            Password Address <sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={FormHandler}
            placeholder="Enter Password"
            required
          />

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forget Password</p>
          </Link>
        </label>

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
