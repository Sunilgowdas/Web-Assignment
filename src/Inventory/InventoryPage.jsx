import React, { useState } from 'react';
import FilterBar from './FilterBar';
import DataTable from './DataTable'; // Assuming this is where your data is displayed

const InventoryPage = () => {
  const originalData = [
    // Your data here
  ];
  
  const [filteredData, setFilteredData] = useState(originalData); // originalData is your complete data set

  const handleFilter = ({ date, ornare, ulrices }) => {
    const filtered = originalData.filter(item => {
      return (
        (date ? item.magna === date : true) &&
        (ornare ? item.ornare === ornare : true) &&
        (ulrices ? item.ulrices === ulrices : true)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <FilterBar onFilter={handleFilter} />
      <DataTable data={filteredData} />
    </div>
  );
};

export default InventoryPage;
