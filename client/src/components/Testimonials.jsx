import React from 'react';

const Testimonials = () => {
  return (
      <section className="section testi" aria-label="what our client says" id="review">
        <div className="container">
          <div className="testi-content">
            <blockquote className="title h4 section-text">
              &ldquo;Working with Mr. Deepak Goutam and with its team was a fantastic experience. They delivered a
              stunning, user-friendly website on time and within budget. Their communication was excellent, and their
              expertise was evident. Highly recommended for anyone needing top-notch web development! &rdquo;
            </blockquote>
            <div className="profile-card">
              <figure className="card-banner img-holder" style={{'--width': '70', '--height': '70'}}>
                <img src="/assets/images/client.png" width="70" height="70" loading="lazy" alt="Sonali Sharma" className="img-cover" />
              </figure>
              <div>
                <p className="title h5 card-title">Sonali Sharma</p>
                <p className="card-subtitle">Manager of Alxis co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default Testimonials;
