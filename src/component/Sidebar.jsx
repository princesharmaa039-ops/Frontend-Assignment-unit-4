import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/courses', label: 'Courses', icon: '📚' },
    { path: '/assignments', label: 'Assignments', icon: '📝' },
    { path: '/attendance', label: 'Attendance', icon: '✓' },
    { path: '/timetable', label: 'Timetable', icon: '⏰' },
    { path: '/fees', label: 'Fees', icon: '💳' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">🎓</span>
        <h1>Student Dashboard</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className="nav-link">
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
