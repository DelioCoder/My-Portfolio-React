import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SmoothScrollbar from './components/SmoothScrollbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
            <Route path="/" component={Home}  />
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}

export default App;
