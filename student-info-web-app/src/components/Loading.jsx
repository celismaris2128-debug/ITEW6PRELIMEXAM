import React from 'react';

const Loading = ({ message = "Loading Experience..." }) => {
  return (
    <div className="container" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div className="loader" style={{
        width: '50px',
        height: '50px',
        border: '4px solid var(--accent-color)',
        borderTop: '4px solid var(--primary-color)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ color: 'var(--primary-color)', fontWeight: 600, letterSpacing: '1px' }}>{message}</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;