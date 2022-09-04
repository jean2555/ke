import React from 'react';

import { Footer, Blog, Possibility, Features, Skeez, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './index.css'
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Skeez />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;