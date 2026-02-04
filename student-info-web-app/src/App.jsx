import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Students = lazy(() => import('./pages/Students'));

// Modern loading component for Suspense fallback
const PageLoader = () => (
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
    <p style={{ color: 'var(--primary-color)', fontWeight: 600, letterSpacing: '1px' }}>Loading Experience...</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/students" component={Students} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;