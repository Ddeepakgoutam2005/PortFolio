import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/deepakgoutam2005@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus("success");
        event.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Optional: Clear success message after some time
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="section contact" aria-label="contact me" id="contact">
      <div className="container">
        <h2 className="title h2 section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="form-wrapper">
            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />
              <input type="hidden" name="_honey" style={{ display: "none" }} />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting me. I will get back to you soon."
              />

              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="input-field"
                autoComplete="off"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="input-field"
                autoComplete="off"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input-field"
                autoComplete="off"
              />

              <textarea
                name="message"
                placeholder="Enter message"
                required
                className="input-field"
              />

              <button type="submit" className="btn btn:hover" disabled={isSubmitting}>
                <span className="span">{isSubmitting ? "Sending..." : "Get A Quote"}</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>

              {submitStatus === "success" && (
                <p className="popup-message visible" style={{ marginTop: "15px", color: "var(--text-white)", textAlign: "left", fontSize: "var(--fontSize-8)" }}>
                  Submitted successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="popup-message visible" style={{ marginTop: "15px", color: "red", textAlign: "left", fontSize: "var(--fontSize-8)" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6700020684048!2d77.0869671753347!3d28.609675075677192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b001082fc13%3A0xbe7bfabc3024d686!2sDabri%20Gopal%20Mandir!5e0!3m2!1sen!2sbd!4v1766427588612!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <ul className="contact-list">
            <li className="contact-item">
              <div className="item-icon">
                <img
                  src="/assets/images/contact-icon-1.png"
                  width="50"
                  height="50"
                  alt="contact icon"
                />
              </div>
              <div>
                <span className="title h6">+91 9811759060</span>
                {/* <span className="title h6">789 (569) 126 35</span> */}
              </div>
            </li>

            <li className="contact-item">
              <div className="item-icon">
                <img
                  src="/assets/images/contact-icon-2.png"
                  width="50"
                  height="50"
                  alt="contact icon"
                />
              </div>
              <address className="title h6">
                Gopal Mandir, Dabri,
                <br />
                New Delhi, India
              </address>
            </li>

            <li className="contact-item">
              <div className="item-icon">
                <img
                  src="/assets/images/contact-icon-3.png"
                  width="50"
                  height="50"
                  alt="contact icon"
                />
              </div>
              <div>
                <span className="title h6">deepakgoutam2005@gmail.com</span>
                <span className="title h6">goutamdeepak1977@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
