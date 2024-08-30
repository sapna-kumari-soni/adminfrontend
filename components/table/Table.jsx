import React, { useState } from 'react';
import TableAction from "./TableAction";
import "./Table.css";
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import { AiFillEdit } from "react-icons/ai";



const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 13 Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 400,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 100,
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 60,
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 80,
  },
];
  

const Table = () => {
  const [filter, setFilter] = useState(""); // State to hold the selected filter
  const [title, setTitle] = useState("PENDING OFFERS"); // State to hold the table title
  const [searchTerm, setSearchTerm] = useState("");

  // Function to get the filtered data based on the selected filter
  const getFilteredData = () => {
    switch (filter) {
      case "pending":
        return ALL_DATA.filter(item => item.status === "pending");
      case "expired":
        return ALL_DATA.filter(item => item.status === "expired");
      case "rejected":
        return ALL_DATA.filter(item => item.status === "rejected");
      case "connected":
        return ALL_DATA.filter(item => item.status === "connected");
      case "not-connected":
        return ALL_DATA.filter(item => item.status === "not-connected");
      case "ni-without-offer":
        return ALL_DATA.filter(item => item.status === "ni-without-offer");
      case "paid":
        return ALL_DATA.filter(item => item.status === "paid");
      default:
        return ALL_DATA;
    }
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    // Update the title based on the selected filter
    switch (selectedFilter) {
      case "pending":
        setTitle("PENDING OFFERS");
        break;
      case "expired":
        setTitle("EXPIRED OFFERS");
        break;
      case "rejected":
        setTitle("REJECTED");
        break;
      case "connected":
        setTitle("CONNECTED");
        break;
      case "not-connected":
        setTitle("NOT CONNECTED");
        break;
      case "ni-without-offer":
        setTitle("NI WITHOUT OFFER");
        break;
      case "paid":
        setTitle("PAID");
        break;
      default:
        setTitle("ALL DATA");
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    // You can add additional search logic here if needed
  };
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <div className="table-header">
          <select className="table-select" onChange={handleFilterChange}>
            <option value="">Select </option>
            <option value="pending">Pending Offers</option>
            <option value="expired">Expired Offers</option>
            <option value="rejected">REJECTED</option>
            <option value="connected">CONNECTED</option>
            <option value="not-connected">NOT CONNECTED</option>
            <option value="ni-without-offer">NI WITHOUT OFFER</option>
            <option value="paid">PAID</option>
          </select>
          <h4 className="data-table-title">{title}</h4>
          <div className='table-search-container'>
          <input 
          type="text" 
          className="table-search" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
          />
          <button className="table-search-btn" onClick={handleSearchClick}>
            <FaSearch  />
          </button>
          </div>
          </div>
        </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    {/* <TableAction /> */}
                    <button type="button" className="action-dropdown-btn">
                    <AiFillEdit/><span className='button-font'>Edit</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;