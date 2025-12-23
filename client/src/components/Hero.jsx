import React from 'react';

const Hero = () => {
  return (
    <div className="hero text-center" id="home">
      <div className="container">
        <div className="banner-outline has-after">
          <div className="hero-banner img-holder has-after" style={{'--width': '500', '--height': '680'}} data-tilt>
            <img src="/assets/images/hero-banner.jpg" width="500" height="680" alt="Deepak Goutam" className="img-cover" />
          </div>
          <span className="span title">Deepak Goutam</span>
        </div>
        <div className="hero-content">
          <h1 className="h1 title">Get Your Product Identity From Me.</h1>
          <div className="wrapper">
            <a href="https://github.com/Ddeepakgoutam2005/Resume/blob/main/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn:hover">
              <span className="span">Download CV</span>
              <ion-icon name="cloud-download-outline" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </div>
        <img src="/assets/images/hero-shape-1.png" width="559" height="232" alt="shape" className="shape shape-1" />
        <img src="/assets/images/hero-shape-2.png" width="1358" height="497" alt="shape" className="shape shape-2" />
      </div>
    </div>
  );
};
export default Hero;
