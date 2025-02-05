import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <p className={styles.formTitle}>CONTACT US</p>

          <div className={styles.inputWrapper}>
            <input
              placeholder="Name"
              className={styles.inputField}
              type="text"
              value=""
            />
          </div>

          <div className={styles.inputWrapper}>
            <input
              placeholder="Email"
              className={styles.inputField}
              type="text"
              value=""
            />
          </div>

          <div className={styles.textareaWrapper}>
            <textarea
              className={styles.textareaField}
              maxLength="256"
              placeholder="Message"
            ></textarea>
            <p className={styles.charCount}>0/256</p>
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
