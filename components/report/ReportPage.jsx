// src/components/ReportPage.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import './ReportPage.css';
import Profile from '../profile/Profile';

const sampleReports = [
  { id: 1, name: 'John Doe', address: '123 Elm St', status: 'Active' },
  { id: 2, name: 'Jane Smith', address: '456 Oak St', status: 'Inactive' },
  // Add more sample data as needed
];

const ReportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const filteredReports = sampleReports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleStatsClick = () => {
    navigate('/stats'); // Navigate to the new page
  };

  return (
    <div className="report-page">
      <Profile />
      <SearchBar onSearch={setSearchTerm} users={sampleReports}/>
      <button className="stats-button" onClick={handleStatsClick}>
        Stats
      </button>
    </div>
  );
};

export default ReportPage;
