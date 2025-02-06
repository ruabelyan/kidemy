import React from 'react';
import styles from './ContentSection.module.scss'; // Import CSS module

const ContentSection = () => {
  return (
    <div className={styles.contentSection}>
      {/* First Section */}
      <div className={styles.flexContainer}>
        <img 
          alt="Tarakan Image" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2FTarakan.webp&w=828&q=75" 
          className={styles.tarakanImage}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            From the moment they're born, today's children are bombarded with screens. From parents proudly snapping photos to showing cartoons and games on devices – we can’t deny that this is all part of a child's development journey! And as caregivers, our mission is to monitor how much screen time our kids have and what content they consume during that time - after all, those moments will shape their future.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className={styles.logoContainer}>
        <img 
          alt="Logo" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2FlogoNew.webp&w=3840&q=75" 
          className={styles.logoImage}
        />
      </div>

      {/* Third Section */}
      <div className={styles.iconContainer}>
        <img 
          alt="Background Bac" 
          id="blue" 
          src="/svg/BackgroundBac.svg" 
          className={styles.backgroundBac}
        />
        <img 
          alt="Red Atom" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2Fyellow.png&w=384&q=75" 
          className={styles.redAtom}
        />
        <img 
          alt="4 Games in One" 
          src="https://kidemy.com/_next/image?url=%2Fimages%2FLearning_Games_%20for_toddlers%20.png&w=750&q=75" 
          className={styles.learningGamesImage}
        />
      </div>
    </div>
  );
};

export default ContentSection;
