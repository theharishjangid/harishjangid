import React, { useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { SiGitea } from "react-icons/si";
import { LuSendHorizonal, LuCheckCircle } from "react-icons/lu";
import { PiChatsFill } from "react-icons/pi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, 1500);
  };
  return (
    <div className="app__contact_container" id="contact">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>
          <SiGitea />
          Sip, Chat, Code!
        </h2>
      </motion.div>
      <div className="app__contact_section">
        <motion.div
          whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="app__contact_section-info"
        >
          <span>
            Let's talk <PiChatsFill />
          </span>
          <h3>
            Feel free to reach out if you have any questions, ideas, or just
            want to chat about all things tech. Looking forward to connecting
            with you!
          </h3>
          <div>
            <IoLocation />
            <p>Bangalore, India</p>
          </div>
          <a href="mailto:hello@micael.com">
            <HiMail />
            <p>harish.n.jangid@gmail.com</p>
          </a>
        </motion.div>
        {!isFormSubmitted ? (
          <motion.div
            whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="app__contact_section-form"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."} <LuSendHorizonal />
            </button>
          </motion.div>
        ) : (
          <div className="app__contact_section-form_submit">
            <LuCheckCircle />
            <h3>Thank you for reaching out!</h3>
            <p>Your message has been received and I'll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
