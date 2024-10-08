// src/components/ReportPage.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import './ReportPage.css';
import Profile from '../profile/Profile';
import Cards from '../cards/Cards';

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
      <h1>DashBoard</h1>
      <Cards />
      <Profile />
      <SearchBar onSearch={setSearchTerm} users={sampleReports}/>
    </div>
  );
};

export default ReportPage;
