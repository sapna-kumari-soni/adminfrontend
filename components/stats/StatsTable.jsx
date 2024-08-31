import React, { useEffect, useState } from 'react';
import './StatsTable.css'; // Import CSS file for styling

const StatsTable = () => {
  const [data, setData] = useState([]);  // State to hold fetched data
  const [loading, setLoading] = useState(true);  // State to manage loading state
  useEffect(() => {
    // Simulate fetching data from an external source (e.g., an API)
    const mockData = [
      {
        agent: 'John Doe',
        status: 'Active',
        attempted: 100,
        noOfOffers: 15,
        loginTime: '08:00 AM',
        awayTime: '00:30',
        logoutTime: '04:00 PM',
        calls1To3Min: 30,
        calls3To5Min: 25,
        calls5To7Min: 20,
        calls7To10Min: 10,
        calls10To20Min: 5,
        calls20PlusMin: 3,
        totalTalkTime: '4h 30m',
        noOfSales: 8,
        expectedSales: 10,
        totalAmount: '$1200'
      },
      {
        agent: 'Jane Smith',
        status: 'Inactive',
        attempted: 80,
        noOfOffers: 10,
        loginTime: '09:00 AM',
        awayTime: '01:00',
        logoutTime: '03:00 PM',
        calls1To3Min: 20,
        calls3To5Min: 18,
        calls5To7Min: 15,
        calls7To10Min: 5,
        calls10To20Min: 2,
        calls20PlusMin: 1,
        totalTalkTime: '3h 15m',
        noOfSales: 5,
        expectedSales: 7,
        totalAmount: '$800'
      },
      // Add more mock data entries as needed for testing
    ];
    // Simulate delay to mimic API call
    setTimeout(() => {
      setData(mockData);  // Set fetched data to state
      setLoading(false);  // Set loading to false once data is fetched
    }, 1000);
  }, []);

  // useEffect(() => {
  //   // Fetch data from an external source (e.g., an API)
  //   fetch('https://api.example.com/stats')  // Replace with your API endpoint
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);  // Set fetched data to state
  //       setLoading(false);  // Set loading to false once data is fetched
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div className="stats-table-container">
      <h2>Agent Stats</h2>
      {loading ? (
        <p>Loading data...</p>  // Display loading message while fetching data
      ) : (
        <table className="stats-table">
          <thead>
            <tr>
              <th>Agents</th>
              <th>Status</th>
              <th>Attempted</th>
              <th>No of Offers</th>
              <th>Login Time</th>
              <th>Away Time</th>
              <th>Logout Time</th>
              <th>1-3 min calls</th>
              <th>3-5 min calls</th>
              <th>5-7 min calls</th>
              <th>7-10 min calls</th>
              <th>10-20 min calls</th>
              <th>20+ min calls</th>
              <th>Total Talk Time</th>
              <th>No of Sales</th>
              <th>Expected Sales</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (  // Dynamically render table rows based on fetched data
              <tr key={index}>
                <td>{row.agent}</td>
                <td>{row.status}</td>
                <td>{row.attempted}</td>
                <td>{row.noOfOffers}</td>
                <td>{row.loginTime}</td>
                <td>{row.awayTime}</td>
                <td>{row.logoutTime}</td>
                <td>{row.calls1To3Min}</td>
                <td>{row.calls3To5Min}</td>
                <td>{row.calls5To7Min}</td>
                <td>{row.calls7To10Min}</td>
                <td>{row.calls10To20Min}</td>
                <td>{row.calls20PlusMin}</td>
                <td>{row.totalTalkTime}</td>
                <td>{row.noOfSales}</td>
                <td>{row.expectedSales}</td>
                <td>{row.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StatsTable;
