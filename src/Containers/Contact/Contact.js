import React, { useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { SiGitea } from "react-icons/si";
import { LuSendHorizonal, LuMailCheck, LuMailX } from "react-icons/lu";
import { PiChatsFill } from "react-icons/pi";
import { useFormik } from "formik";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";

const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const user_key = process.env.REACT_APP_USER_KEY;

const ContactSchema = object({
  username: string()
    .min(2, "Name must be at least 2 characters")
    .max(100)
    .required("Please enter your name"),
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: string()
    .min(10, "Message must be at least 10 characters")
    .required("Please enter the message"),
});

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    submitCount,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setLoading(true);
      await emailjs.send(service_id, template_id, values, user_key).then(
        (result) => {
          setEmailStatus(true);
        },
        (error) => {
          setEmailStatus(false);
        }
      );
      setLoading(false);
      setIsFormSubmitted(true);
    },
  });

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
          <motion.form
            whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="app__contact_section-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p>{errors.username}</p>
              ) : null}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? (
                <p>{errors.message}</p>
              ) : null}
            </div>
            <button type="submit" disabled={!(isValid && dirty)}>
              {!loading ? "Send Message" : "Sending..."} <LuSendHorizonal />
            </button>
          </motion.form>
        ) : (
          <div className="app__contact_section-form_submit">
            {emailStatus ? (
              <LuMailCheck className="success_message" />
            ) : (
              <LuMailX className="failure_message" />
            )}
            <h3>
              {emailStatus
                ? "Thank you for reaching out!"
                : "Oops! Something went wrong."}
            </h3>
            <p>
              {emailStatus
                ? "Your message has been received and I'll be in touch soon."
                : "Please try again and I'll get in touch with you soon."}
            </p>
            {submitCount < 3 ? (
              <button onClick={() => setIsFormSubmitted(false)}>
                Send Again <LuSendHorizonal />
              </button>
            ) : (
              "Limit exceeded. Try again later"
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
