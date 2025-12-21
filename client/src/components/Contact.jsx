import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email_address: '',
    phone: '',
    message: ''
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/contact', formData);
      setPopupMessage(res.data.message);
      setIsPopupVisible(true);
      setFormData({ name: '', email_address: '', phone: '', message: '' });
      setTimeout(() => setIsPopupVisible(false), 3000);
    } catch (error) {
      console.error(error);
      setPopupMessage('Something went wrong!');
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000);
    }
  };

  return (
      <section className="section contact" aria-label="contact me" id="contact">
        <div className="container">
          <h2 className="title h2 section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="form-wrapper">
              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full name" autoComplete="off" required className="input-field" value={formData.name} onChange={handleChange} />
                <input type="email" name="email_address" placeholder="Email address" autoComplete="off" required className="input-field" value={formData.email_address} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone" autoComplete="off" className="input-field" value={formData.phone} onChange={handleChange} />
                <textarea name="message" placeholder="Enter message" required className="input-field" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit" className="btn btn:hover">
                  <span className="span">Get A Quote</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>
              </form>
              <div id="popupMessage" className={`popup-message ${isPopupVisible ? 'visible' : ''}`} style={{display: isPopupVisible ? 'block' : 'none', color: 'green', marginTop: '10px'}}>{popupMessage}</div>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58727.82712594696!2d76.85695!3d23.0791814!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1723618580322!5m2!1sen!2sbd"
              width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>

            <ul className="contact-list">
              <li className="contact-item">
                <div className="item-icon">
                  <img src="/assets/images/contact-icon-1.png" width="50" height="50" loading="lazy" alt="contact icon" />
                </div>
                <div>
                  <span className="title h6">869. 368. 456. 56</span>
                  <span className="title h6">789 (569) 126 35</span>
                </div>
              </li>
              <li className="contact-item">
                <div className="item-icon">
                  <img src="/assets/images/contact-icon-2.png" width="50" height="50" loading="lazy" alt="contact icon" />
                </div>
                <div>
                  <address className="title h6">
                    30- 24 Gopal Mandir,Dabri,
                    New Delhi, India
                  </address>
                </div>
              </li>
              <li className="contact-item">
                <div className="item-icon">
                  <img src="/assets/images/contact-icon-3.png" width="50" height="50" loading="lazy" alt="contact icon" />
                </div>
                <div>
                  <span className="title h6">info@deepak.com</span>
                  <span className="title h6">jobs@deepak.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
};
export default Contact;
