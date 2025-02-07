import React from 'react';
import styles from './MarketsPart.module.scss';

const MarketsPart = () => {
  return (
    <div className={styles.container}>
    <div className={styles.linksContainer}>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.surenhakobyan.smashinggames"
        rel="noopener noreferrer"
        className={styles.storeLink}
      >
        <img
        style={{width:'100%',height:'100%'}}
          alt="Play Market"
          src="https://kidemy.com/_next/image?url=%2Fimages%2FPlayMarket.webp&w=640&q=75"
        />
      </a>
      <a
        target="_blank"
        href="https://apps.apple.com/us/app/smash-master/id684841598"
        className={styles.storeLink}
      >
        <img
        style={{width:'100%',height:'100%'}}
          alt="Apple Store"
          src="https://kidemy.com/_next/image?url=%2Fimages%2FAppleStore.webp&w=640&q=75"
        />
      </a>
    </div>
    <div className={styles.textContainer}>
      <p className={styles.title}></p>
      <p className={styles.description}>
        Smashing game by Kidemy became the favorite pastime for millions of kids all over the world. They adore catching colorful funny bugs running on the screen. Besides having fun, children also develop motor skills of fingers, reaction, learn letters and numbers.
      </p>
    </div>
  </div>
  );
};

export default MarketsPart;
