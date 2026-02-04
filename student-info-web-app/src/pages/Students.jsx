import React, { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import { fetchStudents } from '../services/api';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  if (loading) return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh',
      gap: '20px'
    }}>
      <div className="loader" style={{
        width: '60px',
        height: '60px',
        border: '5px solid var(--accent-color)',
        borderTop: '5px solid var(--primary-color)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <h2 style={{ color: 'var(--primary-color)', fontWeight: 600, animation: 'pulse 1.5s infinite' }}>
        Retrieving Student Data...
      </h2>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
  if (error) return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh',
      gap: '20px',
      textAlign: 'center'
    }}>
      <div style={{ color: '#ff6b6b', fontSize: '4rem', marginBottom: '10px' }}>
        <i className="fas fa-exclamation-circle"></i>
      </div>
      <h2 style={{ color: 'var(--text-color)', fontWeight: 700 }}>Oops! Connection Issue</h2>
      <p style={{ color: 'var(--text-light)', maxWidth: '400px' }}>{error}</p>
      <button className="btn" onClick={() => window.location.reload()} style={{ marginTop: '20px' }}>
        <i className="fas fa-redo"></i> Try Again
      </button>
    </div>
  );

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '40px 0', color: 'var(--primary-color)', fontWeight: 700 }}>
        <i className="fas fa-users-graduation" style={{ marginRight: '15px' }}></i>
        Students Directory
      </h1>
      
      <div className="search-filter-section" style={{ 
        background: 'var(--accent-color)', 
        padding: '24px', 
        borderRadius: '16px', 
        boxShadow: 'var(--shadow)',
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        alignItems: 'center',
        border: '1px solid rgba(197, 153, 182, 0.2)'
      }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
          <i className="fas fa-search" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)' }}></i>
          <input 
            type="text" 
            placeholder="Search students by name..." 
            style={{ 
              width: '100%', 
              padding: '12px 12px 12px 40px', 
              borderRadius: '8px', 
              border: '1px solid var(--secondary-color)',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box',
              background: '#fff'
            }}
          />
        </div>
        <select style={{ 
          padding: '12px 15px', 
          borderRadius: '8px', 
          border: '1px solid var(--secondary-color)',
          fontSize: '1rem',
          outline: 'none',
          cursor: 'pointer',
          background: '#fff',
          color: 'var(--text-color)'
        }}>
          <option value="">All Courses</option>
          <option value="CS">Computer Science</option>
          <option value="IT">Information Technology</option>
          <option value="IS">Information Systems</option>
        </select>
        <button className="btn" style={{ height: '45px', background: 'var(--primary-color)' }}>
          <i className="fas fa-filter" style={{ marginRight: '8px' }}></i> Filter
        </button>
      </div>

      <div className="students-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px',
        paddingBottom: '40px'
      }}>
        {students.map(student => (
          <StudentCard key={student.id} name={student.name} course={student.course} yearLevel={student.yearLevel} />
        ))}
      </div>
    </div>
  );
};

export default Students;