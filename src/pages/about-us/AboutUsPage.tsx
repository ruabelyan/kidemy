import React from 'react';
import styles from './AboutUsPage.module.scss';
import { AboutUsFooter, Slider } from '@/components';

const AboutUsPage = () => {
  return (
    <div className={`${styles.container} ${styles.relative}`}>
      <div className={styles.imageWrapper}>
        <img 
          alt="Classmate Image" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2FClassMate.webp&w=1200&q=75" 
          width="1159" 
          height="596" 
          decoding="async" 
          loading="lazy" 
          className={styles.classmateImage} 
        />
      </div>
      <div className={`${styles.row} ${styles.reverse}`}>
        <img 
          alt="Color 1" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2FZigZag.webp&w=2048&q=75" 
          width="2000" 
          height="189" 
          decoding="async" 
          loading="lazy" 
          className={styles.zigZagImage} 
        />
      </div>

      {/* New Section */}
      <div className={styles.flexContainer}>
        <h2 className={`${styles.header} ${styles.smHidden}`}>WHO WE ARE</h2>

        <img 
          alt="Yellow Dog" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2FYellowDog.webp&w=3840&q=75"
          width="2782"
          height="4177"
          decoding="async"
          loading="lazy"
          className={`${styles.yellowDogImage} ${styles.smBlock}`}
        />

        <div className={styles.smHidden}>
          <p className={styles.description}>
            Kidemy is a game developer and publisher based in Armenia. Our small and smart team develops educational games specially for 2-5-year-old kids. Kidemy's creative team consists of a designer, animator, graphic artist, programmer, QA tester, and producer.
            We also collaborate with musicians, kid psychologists, marketers, content writers, video makers, and translators. We believe that all materials and methodologies of the games are correct and will benefit the right development of children.
          </p>
          <div className={styles.flexContainer}>
            <p className={styles.description}>
              Our main priority is to make the best quality games in the industry. Parents download our games from the Apple App Store and Google Play!
            </p>
          </div>
        </div>

        <div className={styles.mdHidden}>
          <h2 className={styles.header}>WHO WE ARE</h2>
          <p className={styles.description}>
            Kidemy is a game developer and publisher based in Armenia. Our small and smart team develops educational games specially for 2-5-year-old kids. Kidemy's creative team consists of a designer, animator, graphic artist, programmer, QA tester, and producer.
            We also collaborate with musicians, kid psychologists, marketers, content writers, video makers, and translators. We believe that all materials and methodologies of the games are correct and will benefit the right development of children. Our main priority is to make the best quality games in the industry. Parents download our games from the Apple App Store and Google Play!
          </p>
        </div>
      </div>
    <Slider/>
    <div>
    <AboutUsFooter/>
    </div>
    </div>
  );
};

export default AboutUsPage;
