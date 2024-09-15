import React, { useState } from "react";
import "./Category.css";
import Input from "../../components/Input";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

function Category({ handleChange }) {
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

  // Options to display
  const options = [
    "Nike Inc (122)",
    "Brs Inc",
    "Nike Securities Lp",
    "Adar Import And Distributing Corporation",
    "Better Packages Inc.Orporated",
    "Campomar S L",
    "Cho Dongho"
  ];

  // Filter options based on searchTerm
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="category-container">
      <h2 className="sidebar-title">Owners</h2>

      {/* Search Box */}
      <div className="search-box">
        <TextField
          variant="outlined"
          placeholder="Search..."
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
          <Input
            key={option}
            handleChange={handleCheckboxChange}
            value={option}
            title={option}
            name="checkbox"
            checked={selectedOptions.includes(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
