import React from 'react';

function Timetable() {
  const timetable = [
    { subject: 'Mathematics', time: '9:00 AM - 10:00 AM', room: '101', instructor: 'Dr. Smith' },
    { subject: 'English', time: '10:15 AM - 11:15 AM', room: '102', instructor: 'Ms. Johnson' },
    { subject: 'Science', time: '11:30 AM - 12:30 PM', room: 'Lab-A', instructor: 'Prof. Williams' },
    { subject: 'Lunch Break', time: '12:30 PM - 1:15 PM', room: 'Cafeteria', instructor: '-' },
    { subject: 'History', time: '1:15 PM - 2:15 PM', room: '104', instructor: 'Dr. Brown' },
    { subject: 'Computer Science', time: '2:30 PM - 3:30 PM', room: 'Lab-B', instructor: 'Mr. Davis' },
  ];

  return (
    <div className="page">
      <h1>Timetable</h1>
      <div className="timetable-container">
        <table className="timetable">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Time</th>
              <th>Room</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((slot, index) => (
              <tr key={index}>
                <td>{slot.subject}</td>
                <td>{slot.time}</td>
                <td>{slot.room}</td>
                <td>{slot.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Timetable;
