import React from 'react';

const StudentCard = ({ name, course, yearLevel }) => {
  return (
    <div className="student-card" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '5px', 
        height: '100%', 
        backgroundColor: 'var(--primary-color)' 
      }}></div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>{name}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ display: 'flex', alignItems: 'center', margin: 0, fontSize: '0.95rem' }}>
          <i className="fas fa-book-open" style={{ width: '20px', color: 'var(--primary-color)', marginRight: '10px' }}></i>
          <strong>Course:</strong> <span style={{ marginLeft: '5px' }}>{course}</span>
        </p>
        <p style={{ display: 'flex', alignItems: 'center', margin: 0, fontSize: '0.95rem' }}>
          <i className="fas fa-layer-group" style={{ width: '20px', color: 'var(--primary-color)', marginRight: '10px' }}></i>
          <strong>Year Level:</strong> <span style={{ marginLeft: '5px' }}>{yearLevel}</span>
        </p>
      </div>
      <button 
        className="btn" 
        onClick={() => alert(`Student: ${name}\nCourse: ${course}\nYear: ${yearLevel}`)}
        style={{ 
          marginTop: '20px', 
          width: '100%', 
          padding: '8px', 
          fontSize: '0.9rem',
          background: 'transparent',
          border: '2px solid var(--secondary-color)',
          color: 'var(--secondary-color)'
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default StudentCard;