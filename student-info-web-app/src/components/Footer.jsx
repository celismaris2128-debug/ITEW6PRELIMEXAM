import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      marginTop: 'auto', 
      padding: '60px 0 40px',
      background: 'transparent'
    }}>
      <div className="container">
        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', 
          marginBottom: '40px' 
        }}></div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '24px' 
        }}>
          <div className="social-links" style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--primary-color)', fontSize: '1.2rem', transition: 'var(--transition)' }}><i className="fab fa-facebook-f"></i></a>
            <a href="#" style={{ color: 'var(--primary-color)', fontSize: '1.2rem', transition: 'var(--transition)' }}><i className="fab fa-twitter"></i></a>
            <a href="#" style={{ color: 'var(--primary-color)', fontSize: '1.2rem', transition: 'var(--transition)' }}><i className="fab fa-linkedin-in"></i></a>
            <a href="#" style={{ color: 'var(--primary-color)', fontSize: '1.2rem', transition: 'var(--transition)' }}><i className="fab fa-github"></i></a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 600, color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '8px' }}>StudentHub</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)', opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} Modern Academic Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;