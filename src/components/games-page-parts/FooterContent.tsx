import React from 'react';
import styles from './FooterContent.module.scss'; // Import CSS module

const ContentSection = () => {
  return (
    <div className={styles.contentSection}>
      {/* First Section */}
      <div className={styles.flexContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textBox}>
            <p className={styles.mainTitle}>Learning games for kids</p>
            <p className={styles.descriptionText}>
              Learning games for kids offering a wide variety of entertaining games for 2-5 year old kids. You can find more than 356 puzzles, coloring and matching games. By playing our games kids develop motor skills, creativity and practice concentration. Your child will have fun by coloring bright images, solving animal puzzles, matching various fruits and much more. We offer good combination of quality and pricing.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <a 
              target="_blank" 
              href="https://play.google.com/store/apps/details?id=com.kidsgame.babygames" 
              rel="noopener noreferrer" 
              className={styles.storeButton}
            >
              <img 
                alt="Play Market" 
                src="https://kidemy.com/_next/image?url=%2Fimages%2FPlayMarket.webp&w=640&q=75" 
                className={styles.storeImage}
              />
            </a>
            <a 
              target="_blank" 
              href="https://apps.apple.com/us/app/Kidsgames-toddler-games/id1532602264" 
              rel="noopener noreferrer" 
              className={styles.storeButton}
            >
              <img 
                alt="Apple Store" 
                srcSet="https://kidemy.com/_next/image?url=%2Fimages%2FAppleStore.webp&w=640&q=75" 
                className={styles.storeImage}
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <img 
            alt="One Eye Monster" 
            src="https://kidemy.com/_next/image?url=%2Fimages%2FOneEyeMonster.webp&w=1200&q=75" 
            className={styles.monsterImage}
            
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
