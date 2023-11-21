import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const location = useNavigate();

  const handleClick = () => {
    let flag = false;
    let errObj = {};
    if (!username) {
      flag = true;
      errObj.username = "The username field is required.";
    }
    if (!password) {
      flag = true;
      errObj.password = "The password field is required.";
    }

    if (flag) {
      setErrors({ ...errors, ...errObj });
      return false;
    }

    setErrors("");

    fetch("http://localhost:9000/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        location("/");
      });
  };

  const handleClickSignUp = () => {
    location("/signup");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <span className="text-red-500">{errors.username}</span>
        <br />
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <span className="text-red-500">{errors.password}</span>
        <br />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={handleClick}
        >
          Login
        </button>
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
          onClick={handleClickSignUp}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Login;
