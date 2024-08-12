import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
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

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label htmlFor="">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-400 text-[15px]">*</sup>
          </p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={FormHandler}
            placeholder="Enter email id"
            required
            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
          />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password <sup className="text-red-400 text-[15px]">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            placeholder="Enter Password"
            onChange={FormHandler}
            name="password"
            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] cursor-pointer "
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <Link to="#">
            <p className="text-xs mt-1 text-sky-400 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </label>

        <button className="bg-[#FFD60A] py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
