import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    address: "",
    state: "",
    mobileno: "",
    username: "",
    password: "",
  });
  const location = useNavigate();

  const handleClick = () => {
    let flag = false;
    let errObj = {};

    if (!firstname) {
      flag = true;
      errObj.firstname = "The firstname field is required.";
    }
    if (!lastname) {
      flag = true;
      errObj.lastname = "The lastname field is required.";
    }
    if (!address) {
      flag = true;
      errObj.address = "The address field is required.";
    }
    if (!state) {
      flag = true;
      errObj.state = "The state field is required.";
    }
    if (!mobileno) {
      flag = true;
      errObj.mobileno = "The mobileno field is required.";
    }
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

    fetch("http://localhost:9000/api/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        address,
        state,
        mobileno,
        username,
        password,
      }),
    }).then((res) => {
      location("/login");
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6">Signup</h1>
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
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
        />
        <span className="text-red-500">{errors.firstname}</span>
        <br />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last Name"
        />
        <span className="text-red-500">{errors.lastname}</span>
        <br />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <span className="text-red-500">{errors.address}</span>
        <br />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
        <span className="text-red-500">{errors.state}</span>
        <br />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setMobileno(e.target.value)}
          placeholder="Mobile Number"
        />
        <span className="text-red-500">{errors.mobileno}</span>
        <br />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleClick}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
