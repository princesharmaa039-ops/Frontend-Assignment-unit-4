import React from 'react';

function Header() {
  const student = {
    name: 'Prince',
    email: 'prince@school.edu',
    avatar: '👨‍🎓',
  };

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <p className="header-greeting">Welcome back</p>
          <h2 className="header-title">{student.name}</h2>
        </div>
        <div className="header-actions">
          <button className="notification-btn">🔔</button>
          <div className="profile-section">
            <div className="avatar">{student.avatar}</div>
            <div className="profile-info">
              <p className="profile-name">{student.name}</p>
              <p className="profile-email">{student.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
