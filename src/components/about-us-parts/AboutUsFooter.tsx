import React from 'react';
import styles from './AboutUsFooter.module.scss';

const AboutUsFooter = () => {
  return (
    <div className={styles.container}>
      <img
        alt="Left Blue"
        src="https://kidemy.com/svg/LeftBlue.svg"
        width="328"
        height="617"
        decoding="async"
        loading="lazy"
        className={styles.leftBlueImage}
      />
      <img
        alt="Right Blue"
        src="https://kidemy.com/svg/RightBlue.svg"
        width="269"
        height="617"
        decoding="async"
        loading="lazy"
        className={styles.rightBlueImage}
      />

      {/* <h4 className={styles.messageHeader}>Message to <br /> Parents</h4> */}

      <div className={styles.bgContainer}>
        <h4 className={styles.hiddenMessageHeader}>Message to Parents</h4>

        <p className={styles.description}>
          From the moment they're born, today's children are bombarded with screens. From parents proudly snapping photos to showing cartoons and games on devices – we can’t deny that this is all part of a child's development journey! And as caregivers, our mission is to monitor how much screen time our kids have and what content they consume during that time - after all, those moments will shape their future.
        </p>
      </div>

      <div className={styles.flexContainer}>
        <img
          alt="Tablet Image"
          src="https://kidemy.com/_next/image?url=%2Fimages%2FPlanshet.webp&w=3840&q=75"
          width="3000"
          height="2000"
          decoding="async"
          loading="lazy"
          className={styles.tabletImage}
        />
        
        <div className={styles.listContainer}>
          <p className={styles.recommendationHeader}>Highly Recommended</p>
          <ul className={styles.list}>
            <li>
              <p className={styles.listItem}>Do not replace real high-quality games and toys with virtual ones.</p>
            </li>
            <li>
              <p className={styles.listItem}>Provide to kid devices with high-quality screens as much as it is possible.</p>
            </li>
            <li>
              <p className={styles.listItem}>It is better for child more to interact with their screen rather than just watch it.</p>
            </li>
            <li>
              <p className={styles.listItem}>Provide a high-quality game experience made specially for children.</p>
            </li>
            <li>
              <p className={styles.listItem}>Spend time showing your child the difference between real and virtual things: It's the most important thing you must do!!!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFooter;
