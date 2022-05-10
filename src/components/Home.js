import React from "react";
import { Navigate } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./Repairs.css";

export const Home = () => {
    if (localStorage.getItem("honey_customer")) {
        return (
          <>
            <NavBar />
            <ApplicationViews />
          </>
        );
      } else {
        return <Navigate to="/login" />;
      }
}