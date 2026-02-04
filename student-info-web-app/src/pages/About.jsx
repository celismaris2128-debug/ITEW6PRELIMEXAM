import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="about-content" style={{ maxWidth: '900px', margin: '40px auto', background: 'var(--accent-color)', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <i className="fas fa-info-circle" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
          <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>About This Application</h1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          <div style={{ padding: '20px', background: '#fff', border: '1px solid rgba(197, 153, 182, 0.2)', borderRadius: '12px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-color)' }}>
              <i className="fas fa-bullseye" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> Our Mission
            </h3>
            <p style={{ color: 'var(--text-color)', fontSize: '0.95rem' }}>
              This Student Info Web Application is designed to provide users with
              a seamless experience in managing and viewing student data.
            </p>
          </div>
          <div style={{ padding: '20px', background: '#fff', border: '1px solid rgba(197, 153, 182, 0.2)', borderRadius: '12px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-color)' }}>
              <i className="fas fa-code-branch" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> Modern Architecture
            </h3>
            <p style={{ color: 'var(--text-color)', fontSize: '0.95rem' }}>
              Built with React, using component-based architecture and 
              efficient state management for optimal performance.
            </p>
          </div>
        </div>

        <div className="tech-stack" style={{ borderTop: '1px solid rgba(197, 153, 182, 0.2)', paddingTop: '30px' }}>
          <h3 style={{ marginBottom: '20px', textAlign: 'center', color: 'var(--primary-color)' }}>Technologies Behind the Project</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            <div style={{ background: 'var(--secondary-color)', color: '#fff', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-react" style={{ marginRight: '8px' }}></i> React
            </div>
            <div style={{ background: 'var(--secondary-color)', color: '#fff', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-route" style={{ marginRight: '8px' }}></i> React Router
            </div>
            <div style={{ background: 'var(--secondary-color)', color: '#fff', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-css3-alt" style={{ marginRight: '8px' }}></i> CSS3
            </div>
            <div style={{ background: 'var(--secondary-color)', color: '#fff', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-font" style={{ marginRight: '8px' }}></i> Google Fonts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;