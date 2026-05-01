import React from 'react';

function Assignments() {
  const assignments = [
    { id: 1, title: 'Math Project - Algebra', subject: 'Mathematics', due: '2026-05-10', status: 'submitted' },
    { id: 2, title: 'Essay - Shakespeare', subject: 'English', due: '2026-05-08', status: 'submitted' },
    { id: 3, title: 'Lab Report', subject: 'Physics', due: '2026-05-15', status: 'pending' },
    { id: 4, title: 'Presentation', subject: 'History', due: '2026-05-12', status: 'pending' },
  ];

  return (
    <div className="page">
      <h1>Assignments</h1>
      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="assignment-card">
            <div className="assignment-header">
              <h3>{assignment.title}</h3>
              <span className={`status-badge status-${assignment.status}`}>
                {assignment.status}
              </span>
            </div>
            <p className="subject">Subject: {assignment.subject}</p>
            <p className="due-date">Due: {assignment.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
