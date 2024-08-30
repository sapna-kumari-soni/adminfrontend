// src/components/ReportTable.js
import React from 'react';
import './ReportTable.css';

const ReportTable = ({ reports }) => {
  return (
    <table className="report-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {reports.map(report => (
          <tr key={report.id}>
            <td>{report.id}</td>
            <td>{report.name}</td>
            <td>{report.address}</td>
            <td>{report.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
