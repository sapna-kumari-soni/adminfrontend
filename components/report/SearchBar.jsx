
import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Icons for active/inactive status
import { FaCircle } from "react-icons/fa";
import './SearchBar.css'; // Import CSS for dropdown styling
import { useNavigate } from 'react-router-dom'; 

const SearchBar = ({ onSearch, users }) => {
  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    // Replace this with an actual API call
    setUser([
      { name: 'Natalia Jackson', status: 'available' },
      { name: 'Sam K', status: 'busy' },
      { name: 'Jack Wilson', status: 'offline' },
      { name: 'Garry Porter', status: 'available' },
      { name: 'Austin Henderson', status: 'busy' },
      { name: 'Isaac Parker', status: 'offline' },
      { name: 'Linda Russel', status: 'available' },
      { name: 'Natalia ackson', status: 'available' },
      { name: 'Sam K', status: 'busy' },
      { name: 'Jack Wilson', status: 'offline' },
      { name: 'Garry Porter', status: 'available' },
      { name: 'Austin Henderson', status: 'busy' },
      { name: 'Isaac Parker', status: 'offline' },
      { name: 'Linda Russel', status: 'available' },
      // Add more agents as needed
    ]);
  }, []);


  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest('.search-bar-container')) {
  //       setShowDropdown(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredUsers([]);
    } else {
      setFilteredUsers(
        user.filter((u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, user]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
    setShowDropdown(true);
  };

   const handleUserSelect = (selectedUser) => {
    setSearchTerm(selectedUser.name); // Set the input to the selected user's name
    setShowDropdown(false); // Close dropdown after selection
  };

  // const filteredUsers = users.filter(user =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const handleSearchClick = () => {
    navigate('/results',  { state: { search: searchTerm } });// Navigate to the 'results' page
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search users..."
        className="search-input"
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Close dropdown after blur with a delay to allow item click

      />
      {showDropdown && (
        <div className="dropdown-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user,index) => (
              <div key={index} className="dropdown-item" onClick={() => handleUserSelect(user)} >
                <span className="dropdown-item-name">{user.name}</span>
                <span className={`dropdown-item-status ${user.status}`}>
                  {/* {user.status === 'Active' ? <AiOutlineCheck /> : <AiOutlineClose />} */}
                  <FaCircle />
                </span>
              </div>
            ))
           ) : (
            <div className="dropdown-item">No users found</div>
          )} 
        </div>
      )}
      <button className='search-bar-btn' onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
