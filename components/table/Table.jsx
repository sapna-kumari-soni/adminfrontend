import React, { useState } from 'react';
import "./Table.css";
import { FaSearch } from 'react-icons/fa'; 
import { AiFillEdit } from "react-icons/ai";

const getOfferCounts = () => {
  const counts = {
    pending: 0,
    expired: 0,
    rejected: 0,
    connected: 0,
    "not-connected": 0,
    "ni-without-offer": 0,
    paid: 0,
  };

  TABLE_DATA.forEach(item => {
    if (counts[item.status] !== undefined) {
      counts[item.status]++;
    }
  });

  return counts;
};

const TABLE_HEADS = [
  "Contact",
  "Date",
  "Name",
  "Mobile",
  "Email",
  "Offer Start Date",
  "Offer",
  "Qty",
  "Type",
  "Total",
  "End Date",
  "Action"
];

const TABLE_DATA = [
  {
    contact: "8252342435",
    date: "31-08-2024",
    name: "Sapna",
    mobile: "8252342435",
    email: "sapnakr12@gmail.com",
    offerStartDate: "02-08-2024",
    offer: "3",
    qty: "4",
    type: "none",
    total: "20",
    endDate: "10-10-2024",
  },
  {
    contact: "8252342435",
    date: "31-08-2024",
    name: "Sapna",
    mobile: "8252342435",
    email: "sapnakr12@gmail.com",
    offerStartDate: "02-08-2024",
    offer: "3",
    qty: "4",
    type: "none",
    total: "20",
    endDate: "10-10-2024",
  },
  {
    contact: "8252342435",
    date: "31-08-2024",
    name: "Sapna",
    mobile: "8252342435",
    email: "sapnakr12@gmail.com",
    offerStartDate: "02-08-2024",
    offer: "3",
    qty: "4",
    type: "none",
    total: "20",
    endDate: "10-10-2024",
  },
];
  

const Table = () => {
  const [filter, setFilter] = useState(""); // State to hold the selected filter
  const [title, setTitle] = useState("PENDING OFFERS"); // State to hold the table title
  const [searchTerm, setSearchTerm] = useState("");
  const [offerCounts, setOfferCounts] = useState(getOfferCounts());
  const [editIdx, setEditIdx] = useState(-1); // State to track which row is being edited

  // useEffect(() => {
  //   // Fetch data from an external source (e.g., an API)
  //   fetch('https://api.example.com/offers') // Replace with your API endpoint
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data); // Set fetched data to state
  //       setLoading(false); // Set loading to false once data is fetched
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  

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
    <section className="content-area-table">
      <div className="data-table-info">
        <div className="table-header">
          <select className="table-select" onChange={handleFilterChange}>
            <option value="">Select </option>
            <option value="pending">
              <span className='offer-text'>Pending Offers</span> 
              <span className='offer-count'>{offerCounts.pending || 0}</span>
            </option>
            <option value="expired">
              Expired Offers 
              <span>{offerCounts.expired || 0}</span>
            </option>
            <option value="rejected">
              Rejected 
              <span>{offerCounts.rejected || 0}</span>
            </option>
            <option value="connected">
              Connected 
              <span>{offerCounts.connected || 0}</span>
            </option>
            <option value="not-connected">
              Not Connected 
              <span>{offerCounts["not-connected"] || 0}</span>
            </option>
            <option value="ni-without-offer">
              NI Without Offer 
              <span>{offerCounts["ni-without-offer"] || 0}</span>
            </option>
            <option value="paid">
              Paid 
              <span>{offerCounts.paid || 0}</span>
            </option>
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
            {TABLE_DATA?.map((dataItem,index) => {
              return (
                <tr key={index}>
                  <td>{dataItem.contact}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.mobile}</td>
                  {/* <td>{dataItem.email}</td> */}
                  <td>
                {editIdx === index ? (
                  <input
                    type="text"
                    value={index.email}
                    onChange={(e) => handleChange(e, index, "email")}
                  />
                ) : (
                  dataItem.email
                )}
              </td>
                  <td>{dataItem.offerStartDate}</td>
                  <td>{dataItem.offer}</td>
                  <td>{dataItem.qty}</td>
                  <td>{dataItem.type}</td>
                  <td>{dataItem.total}</td>
                  <td>{dataItem.endDate}</td>
                  {/* <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td> */}
                  {/* <td>${dataItem.amount.toFixed(2)}</td> */}
                  {/* <td className="dt-cell-action">
                    <button type="button" className="action-dropdown-btn">
                    <AiFillEdit/><span className='button-font'>Edit</span>
                    </button>
                  </td> */}
                  <td className="dt-cell-action">
                  {editIdx === index ? (
                  <>
                    <button type="button" className="action-dropdown-btn" onClick={handleSave}>
                    <span className='button-font'>Save</span>
                    </button>
                    <button type="button" className="action-dropdown-btn" onClick={handleCancel}>
                    <span className='button-font'>Cancel</span>
                    </button>
                  </>
                ) : (
                  <button type="button" className="action-dropdown-btn" onClick={() => setEditIdx(index)}>
                    <AiFillEdit/><span className='button-font'>Edit</span>
                  </button>
                )}
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