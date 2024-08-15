import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import './FilterBar.css';

const FilterBar = ({ onFilter }) => {
  // State to manage the selected filters
  const [dateFilter, setDateFilter] = useState("");
  const [ornareFilter, setOrnareFilter] = useState("");
  const [ulricesFilter, setUlrichesFilter] = useState("");

  // Handler to clear all filters
  const clearFilters = () => {
    setDateFilter("");
    setOrnareFilter("");
    setUlrichesFilter("");
    if (onFilter) {
      onFilter({ date: "", ornare: "", ulrices: "" }); // Clear all filters
    }
  };

  // Handler to apply filters (only called when the button is clicked)
  const applyFilters = () => {
    if (onFilter) {
      onFilter({ date: dateFilter, ornare: ornareFilter, ulrices: ulricesFilter });
    }
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-bar-header">
        <div className="header-text">
          <h2>PRIMARY DATA</h2>
          <p>Parchment be turns stand veela fawkes mistletoe snare drops.</p>
        </div>
        <div className="action-buttons">
          <button className="action-button add-service">+ Add Service</button>
          <button className="action-button add-houk-service">+ Add Houk Service</button>
        </div>
      </div>

      <div className="filter-bar">
        <select
          className="filter-dropdown"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">Choose a date</option>
          {/* Add your date options here */}
        </select>

        <select
          className="filter-dropdown"
          value={ornareFilter}
          onChange={(e) => setOrnareFilter(e.target.value)}
        >
          <option value="">Select an Ornare</option>
          {/* Add your ornare options here */}
        </select>

        <select
          className="filter-dropdown"
          value={ulricesFilter}
          onChange={(e) => setUlrichesFilter(e.target.value)}
        >
          <option value="">Select an Ulrices</option>
          {/* Add your ulrices options here */}
        </select>

        <button className="filter-button clear-button" onClick={applyFilters}>
          <FaFilter /> Filter All
        </button>

        {/* <button className="filter-button clear-button" onClick={clearFilters}>
          Clear Filters
        </button> */}
      </div>
    </div>
  );
};

export default FilterBar;
