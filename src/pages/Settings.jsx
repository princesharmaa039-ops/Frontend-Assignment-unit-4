import React, { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    language: 'English',
  });

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const handleChange = (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="page">
      <h1>Settings</h1>

      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Push Notifications</p>
            <p className="setting-description">Receive push notifications for important updates</p>
          </div>
          <button 
            className={`toggle-btn ${settings.notifications ? 'active' : ''}`}
            onClick={() => handleToggle('notifications')}
          >
            {settings.notifications ? 'ON' : 'OFF'}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Email Updates</p>
            <p className="setting-description">Receive email updates about your courses</p>
          </div>
          <button 
            className={`toggle-btn ${settings.emailUpdates ? 'active' : ''}`}
            onClick={() => handleToggle('emailUpdates')}
          >
            {settings.emailUpdates ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Display</h2>
        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Dark Mode</p>
            <p className="setting-description">Enable dark mode for comfortable viewing</p>
          </div>
          <button 
            className={`toggle-btn ${settings.darkMode ? 'active' : ''}`}
            onClick={() => handleToggle('darkMode')}
          >
            {settings.darkMode ? 'ON' : 'OFF'}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Language</p>
            <p className="setting-description">Choose your preferred language</p>
          </div>
          <select 
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
            className="select-input"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
