import React from 'react';

import { About, Footer, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <Work />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
