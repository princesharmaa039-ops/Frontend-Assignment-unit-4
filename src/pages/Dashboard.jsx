import React from 'react';

function Dashboard() {
  const stats = [
    { label: 'GPA', value: '3.85', icon: '🧠' },
    { label: 'Attendance', value: '92%', icon: '📅' },
    { label: 'Assignments', value: '24/27', icon: '✓' },
    { label: 'Performance', value: 'A+', icon: '⭐' },
  ];

  const subjects = [
    { name: 'Mathematics', grade: 'A+', percentage: 95 },
    { name: 'English', grade: 'A', percentage: 88 },
    { name: 'Science', grade: 'A+', percentage: 92 },
    { name: 'History', grade: 'B+', percentage: 85 },
  ];

  return (
    <div className="page">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Your Subjects</h2>
        <div className="subjects-list">
          {subjects.map((subject) => (
            <div key={subject.name} className="subject-item">
              <div className="subject-info">
                <h3>{subject.name}</h3>
                <p>{subject.percentage}%</p>
              </div>
              <span className="grade-badge">{subject.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
