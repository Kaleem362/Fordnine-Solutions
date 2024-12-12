import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        e.target,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="first-div ">
        <div className="contact-header">
          <h2 className="text-start">Contact Fordnine Solutions</h2>
          <p className="text-start">
            We're here to help you! Reach out to us, and we'll get back to you
            as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form mx-auto">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Valid Email ..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject ..."
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter Your concern..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="submit"
            id="sub-btn"
            value="Send Message"
            className="submit-button"
          />
          {status && <p className="status-message">{status}</p>}
        </form>

        <br />
        <p className="text-center fs-5 my-2">OR</p>
        <div className="buttons gap-3 d-flex justify-content-center">
          <a href="https://wa.me/923102722037" id="whatsappbutton">
            Whatsapp us
            <FaWhatsapp style={{ margin: "5px 10px" }} size={24} />
          </a>
          <a id="callbutton" href="tel:+923102722037" className="icon">
            Call us
            <FaPhone style={{ margin: "5px 10px" }} size={24} />
          </a>
        </div>
      </div>
      <div className="second-div">
        <h2 className="contact-header">Why Contact us ?</h2>
        <p>
          At FORD9 Solutions, we are dedicated to providing innovative and
          reliable solutions tailored to your needs. Whether you're seeking
          expert web development, mobile applications, or creative design
          services, our skilled team is here to deliver exceptional results. We
          strive to empower businesses and individuals with cutting-edge
          technology and personalized support. Contact us today and let’s work
          together to achieve your goals and make your vision a reality!
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
