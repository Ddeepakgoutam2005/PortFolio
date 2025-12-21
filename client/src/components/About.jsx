import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">
        <div className="tab-container">
          <ul className="tab-btn-list">
            <li className="tab-btn-item">
              <button className={`tab-btn title h6 ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About Me</button>
            </li>
            <li className="tab-btn-item">
              <button className={`tab-btn title h6 ${activeTab === 'skillset' ? 'active' : ''}`} onClick={() => setActiveTab('skillset')}>Skillset</button>
            </li>
            <li className="tab-btn-item">
              <button className={`tab-btn title h6 ${activeTab === 'interview' ? 'active' : ''}`} onClick={() => setActiveTab('interview')}>Interview</button>
            </li>
            <li className="tab-btn-item">
              <button className={`tab-btn title h6 ${activeTab === 'awward' ? 'active' : ''}`} onClick={() => setActiveTab('awward')}>Awards</button>
            </li>
            <li className="tab-btn-item">
              <button className={`tab-btn title h6 ${activeTab === 'exhibition' ? 'active' : ''}`} onClick={() => setActiveTab('exhibition')}>Exhibition</button>
            </li>
          </ul>

          <div className={`tab-content ${activeTab === 'about' ? 'active' : ''}`}>
             <div className="grid-list">
                <figure className="about-banner img-holder" style={{'--width': '570', '--height': '420'}} data-tilt>
                  <img src="/assets/images/about-banner.jpg" width="570" height="420" loading="lazy" alt="about banner" className="img-cover" />
                </figure>
                <div className="about-content">
                  <h2 className="h4 title section-title">A Brief Journey Through My Universe.</h2>
                  <p className="section-text">
                    Hello! I'm Deepak Goutam, a passionate web developer based in New Delhi. With over 2 years of
                    experience in front-end and back-end development, I specialize in creating dynamic and responsive
                    websites using modern technologies like React, Node.js, and CSS Grid.
                  </p>
                  <ul className="about-list">
                    <li className="about-item"><p className="list-title">Name</p><span className="span title h5">Deepak Goutam</span></li>
                    <li className="about-item"><p className="list-title">Phone Number</p><span className="span title h5">9811759006</span></li>
                    <li className="about-item"><p className="list-title">Email Address</p><span className="span title h5">deepak@gmail.com</span></li>
                    <li className="about-item">
                      <p className="list-title">Social Network</p>
                      <div className="social-list">
                        <a href="https://www.facebook.com/profile.php?id=100022035533716" className="social-link h6" title="Facebook">Fb.</a>
                        <a href="https://www.instagram.com/deepakgoutam2005/" className="social-link h6" title="Instagram">In.</a>
                        <a href="https://www.linkedin.com/in/deepak-goutam-a83409260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link h6" title="Linkedin">Ln.</a>
                        <a href="https://x.com/DeepakG98117590?t=BFC_rdMsm8JVVpyTh6_84g&s=09" className="social-link h6" title="Twitter">Tw.</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          </div>

          <div className={`tab-content ${activeTab === 'skillset' ? 'active' : ''}`}>
             <div className="grid-list">
                <div className="skill-content">
                  <h3 className="h4 title section-title">We help to create visual strategies.</h3>
                  <p className="section-text">
                    In a world driven by constant technological evolution, my skill set is my compass. With expertise in
                    Web Development, I navigate through challenges with creativity and precision. Each skill is a tool,
                    meticulously honed to craft solutions that are both innovative and effective.
                  </p>
                  <ul className="skill-list">
                    <li>
                      <div className="skill-wrapper"><span className="span">Website Development</span><span className="value">95%</span></div>
                      <div className="progress-bar"><div className="progress-fill" style={{width: '95%'}}></div></div>
                    </li>
                    <li>
                      <div className="skill-wrapper"><span className="span">Design UI & UX</span><span className="value">85%</span></div>
                      <div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}></div></div>
                    </li>
                  </ul>
                </div>
                <figure className="skill-banner img-holder" style={{'--width': '570', '--height': '420'}} data-tilt>
                  <img src="/assets/images/skill-banner.jpg" width="570" height="420" loading="lazy" alt="skill banner" className="img-cover" />
                </figure>
              </div>
          </div>

          <div className={`tab-content ${activeTab === 'interview' ? 'active' : ''}`}>
             <div className="grid-list">
                <div className="interview-card img-holder" style={{'--width': '376', '--height': '420'}} data-tilt>
                  <img src="/assets/images/interview-1.jpg" width="376" height="420" loading="lazy" alt="interview 1" className="img-cover" />
                  <button className="btn btn:hover">Play</button>
                </div>
                <div className="interview-card img-holder" style={{'--width': '376', '--height': '420'}} data-tilt>
                  <img src="/assets/images/interview-2.jpg" width="376" height="420" loading="lazy" alt="interview 2" className="img-cover" />
                  <button className="btn btn:hover">Play</button>
                </div>
                <div className="interview-card img-holder" style={{'--width': '376', '--height': '420'}} data-tilt>
                  <img src="/assets/images/interview-3.jpg" width="376" height="420" loading="lazy" alt="interview 3" className="img-cover" />
                  <button className="btn btn:hover">Play</button>
                </div>
              </div>
          </div>

          <div className={`tab-content ${activeTab === 'awward' ? 'active' : ''}`}>
              <h3 className="h4 title section-title">
                We're a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
                by crafting UI/UX.
              </h3>
              <ul className="grid-list">
                <li>
                  <div className="award-card">
                    <figure className="card-banner img-holder" style={{'--width': '534', '--height': '383'}} data-tilt>
                      <img src="/assets/images/awward-1.jpg" width="534" height="383" loading="lazy" alt="certificate" className="img-cover" />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="award-card">
                    <figure className="card-banner img-holder" style={{'--width': '534', '--height': '383'}} data-tilt>
                      <img src="/assets/images/awward-2.jpg" width="534" height="383" loading="lazy" alt="certificate" className="img-cover" />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="award-card">
                    <figure className="card-banner img-holder" style={{'--width': '534', '--height': '383'}} data-tilt>
                      <img src="/assets/images/awward-3.jpg" width="534" height="383" loading="lazy" alt="certificate" className="img-cover" />
                    </figure>
                  </div>
                </li>
              </ul>
          </div>

          <div className={`tab-content ${activeTab === 'exhibition' ? 'active' : ''}`}>
            <ul className="grid-list">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                 <li key={num}>
                  <div className="exhibition-card">
                    <figure className="card-banner img-holder" style={{'--width': '376', '--height': '200'}} data-tilt>
                      <img src={`/assets/images/exhibition-${num}.jpg`} width="376" height="200" loading="lazy" alt="image" className="img-cover" />
                    </figure>
                    <div className="card-icon">
                      <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
