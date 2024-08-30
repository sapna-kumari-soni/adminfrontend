// src/HelpSupportPage.js
import React from 'react';
import './HelpSupportPage.css';

const HelpSupportPage = () => {
  return (
    <div className="help-support-container">
      <header className="header">
        <h1>Help and Support</h1>
      </header>
      <section className="content">
        <div className="faq">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-item">
            <h3>How do I reset my password?</h3>
            <p>To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.</p>
          </div>
          <div className="faq-item">
            <h3>How can I contact customer support?</h3>
            <p>You can contact customer support by emailing support@residentialwebsite.com or calling 1-800-123-4567.</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HelpSupportPage;
