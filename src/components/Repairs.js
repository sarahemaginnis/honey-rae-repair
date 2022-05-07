import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Home } from "./Home";
import "./Repairs.css";

export const Repairs = () => (
  <Routes>
    <Route path="*"
      element={<Home/>}
    />

    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
);