import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import About from "./Component/About";
import HeadAndTail from "./Component/HeadAndTail";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./output.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/head-and-tail"
          element={
            <ProtectedRoute>
              <HeadAndTail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
