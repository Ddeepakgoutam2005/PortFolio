import React from 'react';

const Project = () => {
  return (
    <section className="section project" aria-label="my latest projects" id="project">
      <ul className="slider-list">
        <li className="slider-item">
            <div className="project-card text-center">
              <div className="card-banner img-holder has-before" style={{'--width': '1000', '--height': '763'}}>
                <img src="/assets/images/project-1.jpg" width="1000" height="763" loading="lazy" alt="Project" className="img-cover" />
                <a href="https://spotify2024clone.freewebhostmost.com/" className="btn btn:hover">
                  <span className="span">Project Details</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>
                <h3 className="title h3"><a href="#" className="card-title">Creative & experienced digital design studio</a></h3>
              </div>
            </div>
        </li>
        <li className="slider-item">
            <div className="project-card text-center">
              <div className="card-banner img-holder has-before" style={{'--width': '1000', '--height': '763'}}>
                <img src="/assets/images/project-2.jpg" width="1000" height="763" loading="lazy" alt="Project" className="img-cover" />
                <a href="https://netflixclon.freewebhostmost.com/" className="btn btn:hover">
                  <span className="span">Project Details</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>
                <h3 className="title h3"><a href="#" className="card-title">Front End Development & Maintenance</a></h3>
              </div>
            </div>
        </li>
         <li className="slider-item">
            <div className="project-card text-center">
              <div className="card-banner img-holder has-before" style={{'--width': '1000', '--height': '763'}}>
                <img src="/assets/images/project-3.jpg" width="1000" height="763" loading="lazy" alt="Project" className="img-cover" />
                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>
                <h3 className="title h3"><a href="#" className="card-title">Flutter Framework & Warframe Design</a></h3>
              </div>
            </div>
        </li>
         <li className="slider-item">
            <div className="project-card text-center">
              <div className="card-banner img-holder has-before" style={{'--width': '1000', '--height': '763'}}>
                <img src="/assets/images/project-4.jpg" width="1000" height="763" loading="lazy" alt="Project" className="img-cover" />
                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>
                <h3 className="title h3"><a href="#" className="card-title">Full Web Development Project With JavaScript</a></h3>
              </div>
            </div>
        </li>
         <li className="slider-item">
            <div className="project-card text-center">
              <div className="card-banner img-holder has-before" style={{'--width': '1000', '--height': '763'}}>
                <img src="/assets/images/project-5.jpg" width="1000" height="763" loading="lazy" alt="Project" className="img-cover" />
                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>
                <h3 className="title h3"><a href="#" className="card-title">Cloud Migration & AWS Services</a></h3>
              </div>
            </div>
        </li>
      </ul>
    </section>
  );
};
export default Project;
