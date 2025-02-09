import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  // State variables for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State variables for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Send the data to the backend if validation passes
    try {
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('There was an error submitting the form.');
      }

      // Clear form fields upon successful submission
      setName('');
      setEmail('');
      setMessage('');
      setErrors({}); // Clear errors
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  // Form validation logic
  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email.';
    }

    if (!message.trim()) {
      errors.message = 'Message is required.';
    }

    return errors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      setErrors((prevErrors) => ({ ...prevErrors, name: '' })); // Clear error on change
    }
    if (name === 'email') {
      setEmail(value);
      setErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Clear error on change
    }
    if (name === 'message') {
      setMessage(value);
      setErrors((prevErrors) => ({ ...prevErrors, message: '' })); // Clear error on change
    }
  };

  // Character count for the message field
  const charCount = message.length;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.formTitle}>CONTACT US</p>

          <div className={styles.inputWrapper}>
            <input
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
              className={styles.inputField}
              type="text"
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>

          <div className={styles.inputWrapper}>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className={styles.inputField}
              type="text"
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.textareaWrapper}>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              className={styles.textareaField}
              maxLength="256"
              placeholder="Message"
            ></textarea>
            <p className={styles.charCount}>{charCount}/256</p>
            {errors.message && <p className={styles.errorText}>{errors.message}</p>}
          </div>

          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </form>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img
              alt="Letter Icon"
              src="https://kidemy.com/svg/LetterIcon.svg"
              className={styles.icon}
            />
            <p className={styles.contactText}>hi@kidemy.com</p>
          </div>

          <div className={styles.contactItem}>
            <img
              alt="Navigation Icon"
              src="https://kidemy.com/svg/NavigationIcon.svg"
              className={styles.icon}
            />
            <p className={styles.contactText}>
              Thermal power plant 1,
            </p>
            <p className={styles.contactText}>
              Gortsaranayin street, Hrazdan city, Armenia
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
