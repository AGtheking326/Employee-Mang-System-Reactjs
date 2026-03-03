import React, { useState } from "react";
import bgImage from "../../assets/img2.2.png";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Soft Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Layer */}
      <div className="relative flex h-full w-full items-center justify-end pr-32">
        
        {/* Login Box */}
        <div className="border border-emerald-500 rounded-2xl p-20 backdrop-blur-sm bg-black/30 shadow-2xl">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="outline-none bg-transparent border-2 border-emerald-500 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 text-white w-72"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter password"
              className="outline-none bg-transparent border-2 border-emerald-500 font-medium text-lg py-2 px-6 rounded-full mt-4 placeholder:text-gray-400 text-white w-72"
            />

            <button
              type="submit"
              className="mt-8 text-white hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-72 rounded-full transition duration-300"
            >
              Log in
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;