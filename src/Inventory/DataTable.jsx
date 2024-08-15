import React from 'react';
import StarRating from './StarRating';
import './DataTable.css';

const DataTable = () => {
  const data = [
    { magna: "23/08/30", ultrices: "Consectetur", ornare: "Vestibulum", nisi: 154.181, facilisis: 1, elit: "N/A", senectus: "Pretium", felis: "Turkey", cursus: "Nulla", gravida: "N/A" },
    { magna: "14/08/70", ultrices: "Consectetur", ornare: "Vestibulum", nisi: 154.181, facilisis: 3, elit: "N/A", senectus: "Pretium", felis: "Australia", cursus: "Nulla", gravida: "N/A" },
    { magna: "11/06/55", ultrices: "Consectetur", ornare: "Vestibulum", nisi: 154.181, facilisis: 5, elit: "N/A", senectus: "Pretium", felis: "India", cursus: "Nulla", gravida: "N/A" },
    { magna: "20/07/28", ultrices: "Consectetur", ornare: "Vestibulum", nisi: 154.181, facilisis: 2, elit: "N/A", senectus: "Pretium", felis: "Nigeria", cursus: "Nulla", gravida: "N/A" },
    { magna: "25/11/27", ultrices: "Consectetur", ornare: "Vestibulum", nisi: 154.181, facilisis: 1, elit: "N/A", senectus: "Pretium", felis: "Switzerland", cursus: "Nulla", gravida: "N/A" },
  ];

  // Get the headers dynamically, excluding 'facilisis' so we can add it last
  const headers = Object.keys(data[0]).filter(header => header !== 'facilisis');

  return (
    <table className="data-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
          ))}
          <th>Ratings</th> {/* Add the Ratings header at the end */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, subIndex) => (
              <td key={subIndex}>
                {row[header]}
              </td>
            ))}
            <td>
              <StarRating rating={row.facilisis} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
