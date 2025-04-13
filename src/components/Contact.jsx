import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import {
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: #0f2027;
  color: white;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const ContactInfo = styled(motion.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #4fc3f7;
  }

  p {
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.2rem;
    color: #4fc3f7;
  }
`;

const ContactForm = styled(motion.form)`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;

    svg {
      margin-right: 0.5rem;
      color: #4fc3f7;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4fc3f7;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #4fc3f7;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #29b6f6;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: #b0bec5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Alert = styled(motion.div)`
  padding: 0.8rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: 500;

  &.success {
    background: #e8f5e9;
    color: #2e7d32;
  }

  &.error {
    background: #ffebee;
    color: #c62828;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [captcha, setCaptcha] = useState(null);
  const formRef = useRef();
  const captchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getIP = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    } catch {
      return "unknown";
    }
  };

  // Spam detection
  const isSpam = (data) => {
    const spamKeywords = ["http://", "https://", "www.", "click here"];
    return (
      spamKeywords.some((keyword) => data.message.includes(keyword)) ||
      data.name.split(" ").length > 5 ||
      data.message.length > 1000
    );
  };

  // Send alerts
  const sendAlerts = async (data) => {
    const ip = await getIP();

    // 1. Email yourself
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      "template_kkcjias",
      {
        ...data,
        ip_address: ip,
        is_spam: isSpam(data),
        "g-recaptcha-response": captcha,
        date: new Date().toLocaleString(),
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Spam check
      if (isSpam(formData) || !captcha) {
        setSubmitStatus("spam");
        captchaRef.current.reset();
        return;
      }

      // 1. Send response to visitor
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_0naolqp",
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      // 2. Send alerts
      await sendAlerts(formData);

      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants}>Contact Information</motion.h3>
          <motion.p variants={itemVariants}>
            Feel free to reach out to me for any questions or opportunities!
          </motion.p>

          <ContactDetails>
            <motion.div variants={itemVariants}>
              <ContactItem>
                <FiMail />
                <span>rsachin179@gmail.com</span>
              </ContactItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactItem>
                <FiPhone />
                <span>+91 8007540792</span>
              </ContactItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactItem>
                <FiMapPin />
                <span>Pune, India, 411033</span>
              </ContactItem>
            </motion.div>
          </ContactDetails>
        </ContactInfo>

        <ContactForm
          ref={formRef}
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <FormGroup>
              <label htmlFor="name">
                <FiUser />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormGroup>
              <label htmlFor="email">
                <FiMail />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormGroup>
              <label htmlFor="message">
                <FiMessageSquare />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormGroup>
          </motion.div>

          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptcha(token)}
            onErrored={() => console.log("CAPTCHA failed")}
            style={{ margin: "20px 0" }}
          />
          {submitStatus === "spam" && (
            <Alert
              className="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our automated security check couldn't process your message. To ensure your message reaches me, please email rsachin179@gmail.com or refresh the page to try again.
            </Alert>
          )}
          <motion.div variants={itemVariants}>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </SubmitButton>
          </motion.div>

          {submitStatus === "success" && (
            <Alert
              className="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you! Your message has been sent successfully.
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert
              className="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Oops! Something went wrong. Please try again later.
            </Alert>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;