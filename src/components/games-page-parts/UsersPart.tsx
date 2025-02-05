import React from 'react';
import styles from './UsersPart.module.scss';

const UsersPart = () => {
  return (
    <div className={styles.container}>
    <p className={styles.title}>The Largest educational app for kids is coming soon...</p>
    <div className={styles.imageContainer}>
      <img
        alt="Blue Atom"
        src="https://kidemy.com/_next/image?url=%2Fimages%2FBlueAtomImage.webp&w=384&q=75"
        className={styles.blueAtomImage}
      />
     <div>
     <div className={styles.animationWrapper}>
        <div className={styles.animationImages}>
          <div className={styles.imageGroup}>
            <img
              alt="2"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2F2.jp2&w=64&q=75"
            />
            <img
              alt="0"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2F0.jp2&w=128&q=75"
            />
          </div>
          <div className={styles.imageGroup}>
            <img
              alt="m"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2Fm.jp2&w=256&q=75"
            />
            <img
              alt="I"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2Fi.jp2&w=64&q=75"
            />
            <img
              alt="L"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2FL.jp2&w=128&q=75"
            />
            <img
              alt="L"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2FL.jp2&w=128&q=75"
            />
            <img
              alt="I"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2Fi.jp2&w=64&q=75"
            />
            <img
              alt="o"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2Fo.jp2&w=128&q=75"
            />
            <img
              alt="N"
              className={styles.imageOpacity}
              src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2FN.jp2&w=128&q=75"
            />
          </div>
        </div>
      </div>
      <div className={styles.usersImageContainer}>
        <img
          alt="users"
          className={styles.usersImage}
          src="https://kidemy.com/_next/image?url=%2Fimages%2FAnimation%2Fusers.jp2&w=3840&q=75"
        />
      </div>
      <div className={styles.starsWrapper}>
        <img
          alt="Star Icon"
          className={styles.starImage}
          src="https://kidemy.com/_next/image?url=%2Fimages%2FStar.webp&w=3840&q=75"
        />
        <img
          alt="Star Icon"
          className={styles.starImage}
          src="https://kidemy.com/_next/image?url=%2Fimages%2FStar.webp&w=3840&q=75"
        />
        <img
          alt="Star Icon"
          className={styles.starImage}
          src="https://kidemy.com/_next/image?url=%2Fimages%2FStar.webp&w=3840&q=75"
        />
        <img
          alt="Star Icon"
          className={styles.starImage}
          src="https://kidemy.com/_next/image?url=%2Fimages%2FStar.webp&w=3840&q=75"
        />
        <img
          alt="Star Icon"
          className={styles.starImage}
          src="https://kidemy.com/_next/image?url=%2Fimages%2FStar.webp&w=3840&q=75"
        />
      </div>
     </div>
    </div>
  </div>
  );
};

export default UsersPart;
