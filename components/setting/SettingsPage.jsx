import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    notifications: false,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update logic here
    console.log('Settings updated:', settings);
  };

  return (
    <div className="settings-container">
      <header className="header">
        <h1>Settings</h1>
      </header>
      <section className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="siteName">Site Name:</label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Admin Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={settings.currentPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={settings.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              Enable Notifications
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleChange}
              />
              Enable Maintenance Mode
            </label>
          </div>

          <button type="submit">Save Changes</button>
        </form>
      </section>
    </div>
  );
};

export default SettingsPage;
