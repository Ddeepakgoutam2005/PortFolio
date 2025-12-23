import React from 'react';

const Service = () => {
  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">
        <ul className="service-list">
          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img src="/assets/images/service-icon-1.svg" width="80" height="80" loading="lazy" alt="service icon" />
              </div>
              <h3 className="card-title"><a href="#">Web <br />Development</a></h3>
            </div>
          </li>
          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img src="/assets/images/service-icon-2.svg" width="80" height="80" loading="lazy" alt="service icon" />
              </div>
              <h3 className="card-title"><a href="#">Cloud <br />Services</a></h3>
            </div>
          </li>
          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img src="/assets/images/service-icon-3.svg" width="80" height="80" loading="lazy" alt="service icon" />
              </div>
              <h3 className="card-title"><a href="#">Generative <br />AI</a></h3>
            </div>
          </li>
          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img src="/assets/images/service-icon-4.svg" width="80" height="80" loading="lazy" alt="service icon" />
              </div>
              <h3 className="card-title"><a href="#">Machine <br />Learning</a></h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Service;
