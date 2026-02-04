import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', boxShadow: '0 4px 12px rgba(197, 153, 182, 0.3)' }}>
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h1 style={{ cursor: 'default' }}>Student<span style={{ fontWeight: 400 }}>Hub</span></h1>
        </div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '8px', margin: 0, padding: 0 }}>
            <li><NavLink to="/" exact activeClassName="active"><i className="fas fa-home" style={{ marginRight: '8px', fontSize: '0.9rem' }}></i>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active"><i className="fas fa-info-circle" style={{ marginRight: '8px', fontSize: '0.9rem' }}></i>About</NavLink></li>
            <li><NavLink to="/students" activeClassName="active"><i className="fas fa-user-graduate" style={{ marginRight: '8px', fontSize: '0.9rem' }}></i>Students</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;