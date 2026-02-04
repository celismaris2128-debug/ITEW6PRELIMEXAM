import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div className="hero-section" style={{ 
        textAlign: 'center', 
        padding: '100px 40px',
        background: 'linear-gradient(135deg, rgba(197, 153, 182, 0.9) 0%, rgba(230, 178, 186, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '40px',
        color: '#fff',
        marginBottom: '60px',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            Shape Your Academic <br/> <span style={{ color: '#FAD0C4' }}>Future Today</span>
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, marginBottom: '48px', maxWidth: '750px', margin: '0 auto 48px', fontWeight: 400 }}>
            The all-in-one platform for student success. Manage data, track progress, and explore opportunities with ease.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/students" className="btn" style={{ 
              background: '#fff', 
              color: 'var(--primary-color)', 
              padding: '18px 40px', 
              fontSize: '1.05rem',
              borderRadius: '18px'
            }}>
              Explore Directory <i className="fas fa-arrow-right" style={{ marginLeft: '12px' }}></i>
            </Link>
            <Link to="/about" className="btn" style={{ 
              background: 'rgba(255,255,255,0.15)', 
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.3)', 
              padding: '18px 40px', 
              fontSize: '1.05rem',
              borderRadius: '18px',
              color: '#fff'
            }}>
              Our Philosophy
            </Link>
          </div>
        </div>
      </div>

      <div className="features grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '40px', 
        marginBottom: '80px'
      }}>
        <div className="card" style={{ background: '#fff', padding: '50px 40px', borderRadius: '30px', boxShadow: 'var(--shadow-md)', textAlign: 'center', border: '1px solid var(--glass-border)', transition: 'var(--transition)' }}>
          <div style={{ background: 'rgba(197, 153, 182, 0.1)', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', transform: 'rotate(-5deg)' }}>
            <i className="fas fa-layer-group" style={{ color: 'var(--primary-color)', fontSize: '2rem' }}></i>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '18px', color: 'var(--primary-color)', fontWeight: 700 }}>Smart Organization</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>Our intuitive data structure ensures your information is always exactly where you need it.</p>
        </div>
        <div className="card" style={{ background: '#fff', padding: '50px 40px', borderRadius: '30px', boxShadow: 'var(--shadow-md)', textAlign: 'center', border: '1px solid var(--glass-border)', transition: 'var(--transition)' }}>
          <div style={{ background: 'rgba(197, 153, 182, 0.1)', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', transform: 'rotate(5deg)' }}>
            <i className="fas fa-shield-halved" style={{ color: 'var(--primary-color)', fontSize: '2rem' }}></i>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '18px', color: 'var(--primary-color)', fontWeight: 700 }}>Data Security</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>Rest easy knowing your academic records are protected by modern encryption standards.</p>
        </div>
        <div className="card" style={{ background: '#fff', padding: '50px 40px', borderRadius: '30px', boxShadow: 'var(--shadow-md)', textAlign: 'center', border: '1px solid var(--glass-border)', transition: 'var(--transition)' }}>
          <div style={{ background: 'rgba(197, 153, 182, 0.1)', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', transform: 'rotate(-5deg)' }}>
            <i className="fas fa-wand-magic-sparkles" style={{ color: 'var(--primary-color)', fontSize: '2rem' }}></i>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '18px', color: 'var(--primary-color)', fontWeight: 700 }}>Seamless Experience</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>Enjoy a fluid, responsive interface that works beautifully across all your digital devices.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;