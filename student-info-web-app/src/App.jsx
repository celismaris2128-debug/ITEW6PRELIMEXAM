import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './styles/App.css';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Students = lazy(() => import('./pages/Students'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/students" component={Students} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;