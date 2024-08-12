import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState(false);

  function FormHandler(event) {
    setFormData([
      (prev) => [
        {
          ...prev,
          [event.target.name]: event.target.value,
        },
      ],
    ]);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (FormData.password !== FormData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created!");
    const accountData = {
      ...FormData,
    };
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div className="">
      {/* student-instructor tab  */}
      <div className="pt-2">
        <div className="flex bg-[#161D29] p-1 gap-x-2 rounded-full max-w-max">
          <button
            onclick={() => setAccountType("student")}
            className={`${
              accountType === "student"
                ? "bg-[#000814] text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all`}
          >
            Student
          </button>
          <button
            onclick={() => setAccountType("instructor")}
            className={`${
              accountType === "instructor"
                ? "bg-[#000814] text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all`}
          >
            Instructor
          </button>
        </div>
      </div>

      <form action="" onSubmit={submitHandler}>
        {/* fist and last name container  */}
        <div className="flex gap-x-4 pt-2">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-400 text-[15px]">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={FormData.firstName}
              onChange={FormHandler}
              placeholder="Enter First Name"
              className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-red-400 text-[15px]">*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              value={FormData.lastName}
              onChange={FormHandler}
              placeholder="Enter Last Name"
              className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
            />
          </label>
        </div>

        {/* email added  */}
        <div className="pt-2">
          <label htmlFor="" className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address
              <sup className="text-red-400 text-[15px]">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={FormData.email}
              onChange={FormHandler}
              placeholder="Enter Your Email id"
              className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
            />
          </label>
        </div>

        {/* createPassword and confirm Password  */}
        <div className="flex gap-x-2  pt-2">
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-red-400 text-[15px]">*</sup>
            </p>
            <input
              required
              type={showCreatePass ? "text" : "password"}
              name="password"
              value={FormData.password}
              onChange={FormHandler}
              placeholder="Enter Password"
              className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
            />

            <span
              onClick={() => setShowCreatePass((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {!showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-red-400 text-[15px]">*</sup>
            </p>
            <input
              required
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={FormData.confirmPassword}
              onChange={FormHandler}
              placeholder="Confirm password"
              className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-2 border-b-[#4c4e51]"
            />

            <span
              onClick={() => setShowConfirmPass((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {!showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-[#FFD60A] text-black py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
