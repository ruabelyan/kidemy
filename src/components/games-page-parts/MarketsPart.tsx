import React from 'react';
import styles from './MarketsPart.module.scss';

const MarketsPart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marketButtonsContainer}>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.surenhakobyan.smashinggames"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <img
            alt="Play Market"
            src="https://kidemy.com/_next/image?url=%2Fimages%2FPlayMarket.webp&w=640&q=75"
            width="580"
            height="184"
            decoding="async"
            className={styles.image}
            loading="lazy"
            style={{ color: 'transparent' }}
          />
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/smash-master/id684841598"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <img
            alt="Apple Store"
            src="https://kidemy.com/_next/image?url=%2Fimages%2FAppleStore.webp&w=640&q=75"
            width="580"
            height="184"
            decoding="async"
            className={styles.image}
            loading="lazy"
            style={{ color: 'transparent' }}
          />
        </a>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.title}>Smashing game by Kidemy</p>
        <p className={styles.description}>
          Smashing game by Kidemy became the favorite pastime for Millions of Kids all over the world. They adore catching colorful funny bugs running on the screen. Besides having fun, children also develop motor skills of fingers, reaction, learn letters, and numbers.
        </p>
      </div>
    </div>
  );
};

export default MarketsPart;
