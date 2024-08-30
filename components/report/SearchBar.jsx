// // src/components/SearchBar.js
// import React from 'react';
// import './SearchBar.css';

// const SearchBar = ({ onSearch }) => {
//   const handleChange = (event) => {
//     onSearch(event.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search by name..."
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default SearchBar;
// src/components/SearchBar.js

// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Icons for active/inactive status
import './SearchBar.css'; // Import CSS for dropdown styling

const SearchBar = ({ onSearch, users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
    setShowDropdown(true);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.search-bar-container')) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search users..."
        className="search-input"
        onFocus={() => setShowDropdown(true)}
      />
      {showDropdown && (
        <div className="dropdown-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div key={user.id} className="dropdown-item">
                <span className="dropdown-item-name">{user.name}</span>
                <span className={`dropdown-item-status ${user.status.toLowerCase()}`}>
                  {user.status === 'Active' ? <AiOutlineCheck /> : <AiOutlineClose />}
                </span>
              </div>
            ))
          ) : (
            <div className="dropdown-item">No users found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
