import React, { useState } from "react";
import "./Colors.css";
import Input from "../../components/Input";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

const Colors = ({ handleChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const colorOptions = [
    { value: "class 25 ", title: "class 25 ", color: "class 25" },
    { value: "class 9", title: "class 9", color: "class 9" },
    { value: "class 13", title: "class 13", color: "class 13" },
    { value: "class 15", title: "class 15", color: "class 15" },
    { value: "class 3", title: "class 3", color: "class 3" },
    { value: "class 17", title: "class 17", color: "class 17" },
    { value: "class 30", title: "class 30", color: "class 30" },
    { value: "class 12", title: "class 12", color: "class 12", border: "2px solid black" },
  ];

  const filteredOptions = colorOptions.filter(option =>
    option.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="color-container">
      <h2 className="sidebar-title color-title">Categories</h2>

      
      <div className="search-box">
        <TextField
          variant="outlined"
          placeholder="Search ...."
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            width: '100%',
            borderRadius: '25px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Scrollable Container */}
      <div className="scrollable-options">
        {filteredOptions.map((option) => (
          <label className="sidebar-label-container" key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={handleCheckboxChange}
            />
            <span
              className="checkmark"
              style={{ background: option.color, border: option.border || 'none' }}
            ></span>
            {option.title}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Colors;
