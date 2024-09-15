import React from "react";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FaTrademark } from "react-icons/fa";
import { AiOutlineUser, AiOutlineGlobal } from "react-icons/ai";
import { IoLeafOutline } from "react-icons/io5";
import { FaCcAmex } from "react-icons/fa";
import "./Nav.css";

const Nav = ({ handleInputChange, query, toggleSidebarFilter }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded image: ", file);
    }
  };

  return (
    <div>
      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="nav-container">
          <img src="/logo.png" alt="Logo" className="nav-logo" />

          {/* MUI Search Bar with camera icon */}
          <TextField
            className="search-input"
            variant="outlined"
            placeholder="Enter your search shoes."
            value={query}
            onChange={handleInputChange}
            sx={{
              width: '700px',
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
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton component="label">
                    <CameraAltIcon />
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageUpload}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Search Button */}
          <Button
            variant="contained"
            className="search-button"
            sx={{
              marginLeft: '20px',
              backgroundColor: '#007bff', /* Blue color */
              color: 'white',
              borderRadius: '25px',
              textTransform: 'none', /* Prevents all caps in text */
              '&:hover': {
                backgroundColor: '#0056b3', /* Dark blue on hover */
              },
              padding: '12px 24px', /* Larger padding for larger button */
              fontSize: '16px', /* Larger font size */
            }}
          >
            Search
          </Button>

          {/* Apply for Trademark Button */}
          <Button
            variant="contained"
            className="trademark-button"
            sx={{
              marginLeft: '20px',
              backgroundColor: '#ff6f00', /* Orange color */
              color: 'white',
              borderRadius: '25px', /* Rounded corners */
              textTransform: 'none', /* Prevents all caps in text */
              '&:hover': {
                backgroundColor: '#e65100', /* Darker orange on hover */
              },
              padding: '12px 24px', /* Larger padding for larger button */
              fontSize: '16px', /* Larger font size */
            }}
          >
            Apply for Trademark
          </Button>
        </div>
      </nav>

      {/* Small Navigation Bar */}
      <nav className="small-nav">
        <ul>
          <li>
            <a href="#trademarks">
              <FaTrademark /> Trademarks
            </a>
          </li>
          <li>
            <a href="#owners">
              <AiOutlineUser /> Owners
            </a>
          </li>
          <li>
            <a href="#logos">
              <IoLeafOutline /> Logos
            </a>
          </li>
          <li>
            <a href="#internet-brand-search">
              <AiOutlineGlobal /> Internet Brand Search
            </a>
          </li>
          <li>
            <a href="#copyrights">
              <FaCcAmex /> Copyrights
            </a>
          </li>
        </ul>
        <Button
          variant="outlined"
          className="filter-button"
          onClick={toggleSidebarFilter} // Trigger sidebar visibility toggle
          sx={{
            borderColor: '#007bff', /* Blue border color */
            color: '#007bff', /* Blue text color */
            borderRadius: '25px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#e1f5fe', /* Light blue background on hover */
              borderColor: '#0056b3', /* Darker blue border on hover */
              color: '#0056b3', /* Darker blue text color on hover */
            },
            padding: '8px 16px',
            fontSize: '14px',
          }}
        >
          <FilterAltIcon /> Filter
        </Button>
      </nav>
    </div>
  );
};

export default Nav;
