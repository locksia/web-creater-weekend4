import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import FiveTerre from './FiveTerre';
import Corniglia from './Corniglia';
import Manarola from './Manarola';
import Monterosso from './Monterosso';
import Riomaggiore from './Riomaggiore';
import Vernazza from './Vernazza';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <Router>
      <div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w3-container w3-teal">
          <div className="w3-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <i className="fa fa-bars w3-button w3-teal w3-xlarge" onClick={openSidebar} style={{ marginRight: '20px', fontSize: '20px'}}>#</i>
              <span id="myIntro" className="w3-hide">W3.CSS: Introduction</span>
            <div>
              <h1>Summer Holiday</h1>
            </div>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100vh', paddingTop: '20px' }}>
                <h2 style={{ fontSize: '50px', color: 'black' }}>Welcome!!</h2>
              </div>
            } />
            <Route path="/5terre" element={<FiveTerre/>} />
            <Route path="/corniglia" element={<Corniglia/>} />
            <Route path="/manarola" element={<Manarola/>} />
            <Route path="/monterosso" element={<Monterosso/>} />
            <Route path="/riomaggiore" element={<Riomaggiore/>} />
            <Route path="/vernazza" element={<Vernazza/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
