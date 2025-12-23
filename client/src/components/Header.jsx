import React from 'react';

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
            <li><a href="#service" className="navbar-link" data-nav-link>Services</a></li>
            <li><a href="#about" className="navbar-link" data-nav-link>About</a></li>
            <li><a href="#project" className="navbar-link" data-nav-link>Project</a></li>
            {/* <li><a href="#review" className="navbar-link" data-nav-link>Review</a></li> */}
            <li><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
          </ul>
        </nav>
        <button className="nav-open-btn btn:hover" aria-label="open menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
        <div className="overlay" data-overlay data-nav-toggler></div>
      </div>
    </header>
  );
};
export default Header;
