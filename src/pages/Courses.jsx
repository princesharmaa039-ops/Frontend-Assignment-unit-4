import React from 'react';

function Courses() {
  const courses = [
    { id: 1, name: 'Advanced Mathematics', instructor: 'Dr. Smith', progress: 85, credits: 4 },
    { id: 2, name: 'English Literature', instructor: 'Ms. Johnson', progress: 78, credits: 3 },
    { id: 3, name: 'Physics', instructor: 'Prof. Williams', progress: 92, credits: 4 },
    { id: 4, name: 'Chemistry', instructor: 'Dr. Brown', progress: 88, credits: 3 },
  ];

  return (
    <div className="page">
      <h1>Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p className="instructor">Instructor: {course.instructor}</p>
            <p className="credits">Credits: {course.credits}</p>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <p className="progress-text">{course.progress}% Complete</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
