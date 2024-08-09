import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Rectangle from "../Images/Rectangle.png";

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://mr-book-066682c9409f.herokuapp.com/api/signup",
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          confirm_password: confirmPassword,
        }
      );

      // Check if the HTTP status code is 200 (OK)
      if (response.status === 200) {
        console.log("Signup successful!", response.data);

        // You can also check response.data.success if needed
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          localStorage.removeItem("token");
          console.log("Token removed from localStorage after 24 hours");
        }, 24 * 60 * 60 * 1000);
        // Redirect to the desired page upon successful registration
        navigate("/");
      } else {
        // Handle other status codes if needed
        console.error("Signup failed. Please check the form data.");
      }
    } catch (error) {
      // Handle errors from the API or network issues
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div className="w-full h-screen  bg-red- flex gap-x-12">
      <div className="hidden md:block w-1/2 h-full ">
        <img src={Rectangle} className="w-full h-full" alt="Background" />
      </div>
      <div className="w-full  md:w-1/2 px-1 bg-fuchsia-">
        <h1 className="text-3xl font-bold px-3 py-4 ">
          Welcome to Mr Book
        </h1>
       
        <div className=" md:flex gap-x-2 pt-6 items-center">
          <div className="w-full flex flex-col gap-y-3">
            <label className=" text-gray-600 px-3 font-bold">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border rounded-md border-black px-3 py-3 "
            />
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label className=" text-gray-600 px-3 font-bold">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="border rounded-md  border-black px-3 py-3 "
            />
          </div>
        </div>
        <div className="w-full flex flex-col  gap-y-2">
          <label className=" text-gray-600 py-4 font-bold">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-md w-full border-black py-3 px-4"
          />
        </div>
        <div className="md:flex gap-x-3 pt-4">
          <div className="w-full flex flex-col gap-y-2">
            <label className=" text-gray-600 px-3 font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border rounded-md border-black px-3 py-3"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label className=" text-gray-600 px-4 font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="border rounded-md  border-black px-3 py-3"
            />
          </div>
        </div>
        <div className="w-full ">
          <button
            onClick={handleSignup}
            className=" py-4  text-white w-full bg-amber-400 mt-6 border rounded-md"
          >
            Create Account
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-2 justify-center  font-medium leading-5 mt-5">
          <h3 className=" ">Already have an account? </h3>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
