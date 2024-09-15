import React, { useState } from "react";
import { Button, Box, Chip } from "@mui/material";
import "./StatusFilter.css";  // Optional if you want additional custom styling

function StatusFilter() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const statusOptions = [
    { label: "All", value: "all", color: "primary" },
    { label: "Registered", value: "registered", color: "success" },
    { label: "Pending", value: "pending", color: "warning" },
    { label: "Abandoned", value: "abandoned", color: "error" },
    { label: "Other", value: "other", color: "info" },
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    console.log(`Selected status: ${status}`);
    // You can trigger a function to filter data based on the status here.
    // filterDataByStatus(status);
  };

  return (
    <Box className="status-filter-container" sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '8px', maxWidth: '200px' }}>
      <h3>Status</h3>
      <Box className="status-buttons" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {statusOptions.map((option) => (
          <Chip
            key={option.value}
            label={option.label}
            onClick={() => handleStatusChange(option.value)}
            color={selectedStatus === option.value ? option.color : "default"}
            variant={selectedStatus === option.value ? "filled" : "outlined"}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default StatusFilter;
