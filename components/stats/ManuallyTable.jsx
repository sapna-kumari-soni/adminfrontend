import React, { useState } from 'react';
import './ManuallyTable.css'; // Import the CSS file for styling

const ManuallyTable = () => {

  const data = [
    { Name: 'Nicholas', '>1 min': 2, '>3 min': 5, '>5 min': 6, '>7 min': 8, '>10 min': 2, '>20 min': 2, 'Total Talk time': '1hr:45' },
    { Name: 'Jennie', '>1 min': 2, '>3 min': 5, '>5 min': 6, '>7 min': 8, '>10 min': 2, '>20 min': 2, 'Total Talk time': '2hr:45' },
    { Name: 'Austin', '>1 min': 2, '>3 min': 5, '>5 min': 6, '>7 min': 8, '>10 min': 2, '>20 min': 2, 'Total Talk time': '2hr:05' },
    { Name: 'Rose', '>1 min': 2, '>3 min': 5, '>5 min': 6, '>7 min': 8, '>10 min': 2, '>20 min': 2, 'Total Talk time': '1hr:45' },
    { Name: 'Jack', '>1 min': 2, '>3 min': 5, '>5 min': 6, '>7 min': 8, '>10 min': 2, '>20 min': 2, 'Total Talk time': '1hr:45' },
  ];

  const [filteredData, setFilteredData] = useState(data);
  // const [currentPage, setCurrentPage] = useState(1);
  // const rowsPerPage = 5;

  const handleFilterChange = (e, key) => {
    const value = e.target.value.toLowerCase();
    const newFilteredData = data.filter(row => 
      row[key].toString().toLowerCase().includes(value)
    );
    setFilteredData(newFilteredData);
  };

  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setFilteredData(sortedData);
  };

  // const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate paginated rows
  // const indexOfLastRow = currentPage * rowsPerPage;
  // const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <h2>Manually Edit Table</h2>
      {/* Filters */}
      <div className="filters">
        {Object.keys(data[0]).map((key) => (
          <input
            key={key}
            placeholder={`Filter by ${key}`}
            onChange={(e) => handleFilterChange(e, key)}
          />
        ))}
      </div>

      {/* Table */}
      <div className='table-container'>
      <table className="manually-table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} onClick={() => handleSort(key)}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)} className={i + 1 === currentPage ? 'active' : ''}>
            {i + 1}
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default ManuallyTable;
