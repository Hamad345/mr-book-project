import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Rectangle1 from "../Images/Rectangle1.png";

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in by verifying the presence of the token
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      // Redirect the user to the home screen
      navigate("/");
    }
  }, [navigate]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://mr-book-066682c9409f.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("object", response.data);

      // Check if the login was successful
      if (response.status === 200) {
        console.log("Login successful!", response.data);

        // You can also check response.data.success if needed
        localStorage.setItem("token", response.data.token);

        // Redirect to the home page or any other page upon successful login
        navigate("/");
      } else {
        // Handle unsuccessful login (show an error message, etc.)
        console.error("Login failed. Invalid credentials.");
      }
    } catch (error) {
      // Handle errors from the API or network issues
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative  w-1/2 h-full hidden md:block">
        <img src={Rectangle1} className="w-full h-full" alt="Background" />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col md:px-9 py-4">
        <h1 className="text-2xl md:text-4xl font-semibold px-3 py-8 mt-8 font-sans leading-3 h-16">
          Welcome back to MrBook
        </h1>
        {/* <p className="px-4 mt-2 font-sans items-center">
          Lorem ipsum dolor sit amet consectetur. Viverra diam elit tellus erat
          ipsum tortor amet vel at. Ut urna in imperdie Lorem ipsum dolor sit
          amet consectetur.
        </p> */}
        <div className="w-full flex flex-col gap-y-2 px-2">
          <label className=" py-2 text-gray-600 font-bold">
            Email address:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-md px-3 border-black py-3"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2 px-2">
          <label className=" text-gray-600  py-2 font-bold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border rounded-md px-3 border-black py-3"
          />
        </div>
        <div className="w-full">
          <button
            onClick={handleLogin}
            className="w-full py-3 text-white bg-amber-400 mt-6 border rounded-md"
          >
            Login
          </button>
        </div>
        <div className="text-center font-medium leading-5 mt-2">
          <Link to="/registration">
            {" "}
            <h3>No account Please? Create Account</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
