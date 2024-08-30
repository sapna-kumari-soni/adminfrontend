// import React from 'react'
// import './Profile.css'
// const Profile = () => {
//   return (
//     <div className='profile'>
//         <div className='user-profile'>
//             <div className='user-details'>
//                 <img src='/' alt=''/>
//                 <h3 className='username'>admin</h3>
//                 <span className='email'>admin@gmail.com</span>
//                 <div className="additional-info">
//             <div className="info-item">
//               <span className="info-label">Mobile Number:</span>
//               <span className="info-value">+1234567890</span>
//             </div>
//             <div className="info-item">
//               <span className="info-label">Address:</span>
//               <span className="info-value">123 Elm Street, Springfield</span>
//             </div>
//           </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Profile
import React, { useState } from 'react';
import './Profile.css';
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Admin',
    email: 'admin@gmail.com',
    mobile: '+1234567890',
    address: '123 Elm Street, Springfield'
  });
  const [formData, setFormData] = useState({ ...user });
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');
  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the profile image preview
      };
      reader.readAsDataURL(file);
      setNewProfileImage(file); // Store the file for further processing
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="user-profile">
        <div className="user-details">
          {isEditing ? (
            
            <form onSubmit={handleSubmit} className="edit-form">
              <div className="profile-image-container">
                <img
                  src={profileImage}
                  alt="User Profile"
                  className="profile-image"
                />
                <label className="upload-btn">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <AiFillEdit className='camera-icon' />
                </label>
              </div>
              <label>
              <span className="info-sub">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
              <span className="info-sub">Email:</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
              <span className="info-sub">Mobile:</span>                
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
              <span className="info-sub">Address:</span>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className='button-adjust'>
              <button type="submit" className="save-button">Save</button>
              <button type="button" onClick={handleEditClick} className="cancel-button">Cancel</button>
              </div>
            </form>
          ) : (
            <>
            <h3 className="username">{user.name}</h3>
            <div className='user-direction'>
            <div className="profile-image-container">
                <img
                  src={profileImage}
                  alt="User Profile"
                  className="profile-image"
                />
                <label className="upload-btn">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <AiFillEdit className='camera-icon'/>
                  </label>
              </div>
              <div className="additional-info">
              <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Mobile Number:</span>
                  <span className="info-value">{user.mobile}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Address:</span>
                  <span className="info-value">{user.address}</span>
                </div>
              </div>
            </div>
              <button onClick={handleEditClick} className="edit-button">
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
