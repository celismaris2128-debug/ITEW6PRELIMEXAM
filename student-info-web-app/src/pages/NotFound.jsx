import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh',
      textAlign: 'center'
    }}>
      <div style={{ 
        fontSize: '8rem', 
        fontWeight: 900, 
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
        marginBottom: '20px'
      }}>
        404
      </div>
      <h2 style={{ fontSize: '2rem', color: 'var(--text-color)', marginBottom: '16px' }}>
        Lost in the Clouds?
      </h2>
      <p style={{ color: 'var(--text-light)', maxWidth: '500px', marginBottom: '40px', fontSize: '1.1rem' }}>
        The page you're looking for doesn't exist or has been moved to a new academic orbit.
      </p>
      <Link to="/" className="btn" style={{ padding: '15px 40px', borderRadius: '20px' }}>
        <i className="fas fa-home" style={{ marginRight: '10px' }}></i> Return to Base
      </Link>
    </div>
  );
};

export default NotFound;