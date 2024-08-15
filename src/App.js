import React, { useState } from 'react';

import './App.css';
import Navbar from './Inventory/Navbar';
import Tabs from './Inventory/Tabs';
import FilterBar from './Inventory/FilterBar';
import DataTable from './Inventory/DataTable';
import { Pagination } from 'react-bootstrap';



function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12; // assuming 12 pages total for the example

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Logic to fetch data for the selected page would go here
  };


  return (
    
     <div className="app">
      <Navbar />
      <Tabs />
      <FilterBar />
      <DataTable />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
      </div>
  
 
  );
}

export default App;
