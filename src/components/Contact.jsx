import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("");
  const submissionDestination = "deepakgoutam2005@gmail.com";
  const debugUrl = "http://127.0.0.1:7777/event";

  // #region debug-point A:report-form-submit
  const reportDebug = (hypothesisId, msg, data = {}, runId = "pre-fix") =>
    fetch(debugUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "form-submit-check",
        runId,
        hypothesisId,
        location: "src/components/Contact.jsx",
        msg: `[DEBUG] ${msg}`,
        data,
        ts: Date.now(),
      }),
    }).catch(() => {});
  // #endregion

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // #region debug-point B:submit-start
    reportDebug("B", "Contact form submit started", {
      fieldNames: Object.keys(data),
      hasMessage: Boolean(data.message),
      hasEmail: Boolean(data.email),
    });
    // #endregion

    try {
      // #region debug-point C:fetch-request
      reportDebug("C", "Sending FormSubmit request", {
        endpoint: "https://formsubmit.co/ajax/deepakgoutam2005@gmail.com",
        payloadKeys: Object.keys(data),
      });
      // #endregion
      const response = await fetch("https://formsubmit.co/ajax/deepakgoutam2005@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      let responseData = null;
      try {
        responseData = await response.json();
      } catch {
        // Response might not be valid JSON
      }

      if (response.ok && responseData && (responseData.success === "true" || responseData.success === true)) {
        // #region debug-point D:response-success
        reportDebug("D", "FormSubmit response ok", {
          status: response.status,
          statusText: response.statusText,
          responseData,
        });
        // #endregion
        setSubmitStatus("success");
        event.target.reset();
      } else {
        // #region debug-point E:response-error
        reportDebug("E", "FormSubmit response not ok", {
          status: response.status,
          statusText: response.statusText,
          responseData,
        });
        // #endregion
        setSubmitStatus("error");
        if (responseData && responseData.message) {
          setErrorMessage(responseData.message);
        } else {
          setErrorMessage("The message could not be sent. Please check your network and try again.");
        }
      }
    } catch (error) {
      // #region debug-point F:fetch-exception
      reportDebug("F", "FormSubmit request threw", {
        message: error instanceof Error ? error.message : String(error),
      });
      // #endregion
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Optional: Clear success/error messages after some time
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 8000);
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

              {submitStatus && (
                <p
                  aria-live="polite"
                  style={{
                    marginTop: "16px",
                    padding:
                      submitStatus === "success"
                        ? "0"
                        : "12px 14px",
                    borderRadius: "12px",
                    textAlign: "left",
                    fontSize:
                      submitStatus === "success"
                        ? "var(--fontSize-9)"
                        : "var(--fontSize-8)",
                    fontWeight:
                      submitStatus === "success"
                        ? "var(--weight-medium)"
                        : "normal",
                    lineHeight: 1.6,
                    backgroundColor:
                      submitStatus === "success"
                        ? "transparent"
                        : "rgba(255, 80, 80, 0.16)",
                    color:
                      submitStatus === "success"
                        ? "var(--text-white)"
                        : "#ff9b9b",
                    border:
                      submitStatus === "success"
                        ? "none"
                        : "1px solid rgba(255, 80, 80, 0.4)",
                  }}
                >
                  {submitStatus === "success"
                    ? "Submitted successfully!"
                    : errorMessage || `The message could not be sent. Please try again or email ${submissionDestination} directly.`}
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
