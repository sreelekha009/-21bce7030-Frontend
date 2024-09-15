import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import StatusFilter from "./StatusFilter/StatusFilter";
import "./Sidebar.css";

const Sidebar = ({ handleChange, isOpen }) => {
  return (
    <section className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo-container">
        {/* Add your logo or branding here if needed */}
      </div>

      {/* New Status Filter at the top */}
      <StatusFilter />

      {/* Existing Filters */}
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
