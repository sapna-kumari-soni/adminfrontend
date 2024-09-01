// // src/components/ReportTable.js
// import React from 'react';
// import './ReportTable.css';

// const ReportTable = ({ reports }) => {
//   return (
//     <table className="report-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Address</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {reports.map(report => (
//           <tr key={report.id}>
//             <td>{report.id}</td>
//             <td>{report.name}</td>
//             <td>{report.address}</td>
//             <td>{report.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ReportTable;

// src/EditableTable.js
import React, { useState, useEffect } from "react";
import "./ManuallyTable.css"; // Import the CSS file for styling

const ManuallyTable = () => {
  // const [data, setData] = useState([]); // State to store table data
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "234-567-8901" },
    { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", phone: "345-678-9012" },
    { id: 4, name: "Emily Davis", email: "emily.davis@example.com", phone: "456-789-0123" },
    { id: 5, name: "Robert Brown", email: "robert.brown@example.com", phone: "567-890-1234" },
  ]);
  const [editIdx, setEditIdx] = useState(-1); // State to track which row is being edited


  // Fetch data from an external source (API, database, etc.)
  // useEffect(() => {
  //   // Simulate fetching data from an external source
  //   const fetchData = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const result = await response.json();
  //     setData(result);
  //   };
  //   fetchData();
  // }, []);

  // Handle changes to table cells
  const handleChange = (e, index, key) => {
    const newData = [...data];
    newData[index][key] = e.target.value;
    setData(newData);
  };

  // Save changes and exit editing mode
  const handleSave = () => {
    setEditIdx(-1);
    console.log("Data saved: ", data); // Here, you would typically send updated data to the server
  };

  // Cancel editing mode without saving
  const handleCancel = () => {
    setEditIdx(-1);
  };

  return (
    <div className="editable-table-container">
      <table className="editable-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>
                {editIdx === index ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleChange(e, index, "name")}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {editIdx === index ? (
                  <input
                    type="text"
                    value={row.email}
                    onChange={(e) => handleChange(e, index, "email")}
                  />
                ) : (
                  row.email
                )}
              </td>
              <td>
                {editIdx === index ? (
                  <input
                    type="text"
                    value={row.phone}
                    onChange={(e) => handleChange(e, index, "phone")}
                  />
                ) : (
                  row.phone
                )}
              </td>
              <td>
                {editIdx === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => setEditIdx(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManuallyTable;
