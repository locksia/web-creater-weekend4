import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav
        id="mySidebar"
        className={`w3-sidebar w3-bar-block w3-animate-left w3-card ${isOpen ? 'w3-show' : 'w3-hide'}`}
        style={{ zIndex: 3, width: '250px', position: 'fixed', top: 0, left: 0 }}
      >
        <a className="w3-bar-item w3-button w3-border-bottom w3-large" href="#">
          <img src="https://www.w3schools.com/images/w3schools.png" style={{ width: '80%' }} alt="로고" />
        </a>
        <a className="w3-bar-item w3-button" onClick={closeSidebar}>
          닫기 <i className="fa fa-remove"></i>
        </a>
        <Link to="/5terre" className="w3-bar-item w3-button" onClick={closeSidebar}>5terre</Link>
        <Link to="/corniglia" className="w3-bar-item w3-button" onClick={closeSidebar}>Corniglia</Link>
        <Link to="/manarola" className="w3-bar-item w3-button" onClick={closeSidebar}>Manarola</Link>
        <Link to="/monterosso" className="w3-bar-item w3-button" onClick={closeSidebar}>Monterosso</Link>
        <Link to="/riomaggiore" className="w3-bar-item w3-button" onClick={closeSidebar}>Riomaggiore</Link>
        <Link to="/vernazza" className="w3-bar-item w3-button" onClick={closeSidebar}>Vernazza</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
