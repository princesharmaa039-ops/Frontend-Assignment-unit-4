import React from 'react';

function Attendance() {
  const attendance = [
    { week: 'Week 1', present: 4, absent: 1, percentage: 80 },
    { week: 'Week 2', present: 5, absent: 0, percentage: 100 },
    { week: 'Week 3', present: 4, absent: 1, percentage: 80 },
    { week: 'Week 4', present: 5, absent: 0, percentage: 100 },
  ];

  return (
    <div className="page">
      <h1>Attendance</h1>
      <div className="attendance-grid">
        {attendance.map((record) => (
          <div key={record.week} className="attendance-card">
            <h3>{record.week}</h3>
            <div className="attendance-stats">
              <div className="stat">
                <p className="stat-value present">{record.present}</p>
                <p className="stat-label">Present</p>
              </div>
              <div className="stat">
                <p className="stat-value absent">{record.absent}</p>
                <p className="stat-label">Absent</p>
              </div>
            </div>
            <div className="attendance-percentage">
              <p>{record.percentage}% Attendance</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
