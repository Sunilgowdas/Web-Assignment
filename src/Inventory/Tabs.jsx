// Inventory/Tabs.js
import React from 'react';
import './Tabs.css';

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button className="tab active">PRIMARY</button>
        <button className="tab">SECONDARY</button>
        <button className="tab">THIRDLY</button>
      </div>
      
      <div className="header-buttons">
          <button className="header-button update-data">
            <i className="fa fa-refresh"></i> Update Data BD
          </button>
          <button className="header-button update-inventory">
            <i className="fa fa-refresh"></i> Update Inventory
          </button>
        </div>
    </div>
  );
};

export default Tabs;
