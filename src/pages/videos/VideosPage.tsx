import React from 'react';
import styles from './VideosPage.module.scss';

const VideosPage = () => {
  return (
    <main className={styles.main}>
      <div>
        <div className={`${styles.textContainer} ${styles.textCenter}`}>
          <p className={styles.text}>
            You can send a video of your kid to{' '}
            <span className={styles.highlight}>hi@kidemy.com</span> and join us!
          </p>
        </div>
        <div className={styles.videoGrid}>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/ZiIeMudD4e0?loop=1&playlist=ZiIeMudD4e0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/H0ZLR8MtExw?loop=1&playlist=H0ZLR8MtExw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/tIoKprunOYc?loop=1&playlist=tIoKprunOYc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/FWJIQ8f5OCg?loop=1&playlist=FWJIQ8f5OCg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/tieMj5fW0F4?loop=1&playlist=tieMj5fW0F4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/niM-hZdjVPw?loop=1&playlist=niM-hZdjVPw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/CW6mvgxKqUQ?loop=1&playlist=CW6mvgxKqUQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/z-m6vdeWx8w?loop=1&playlist=z-m6vdeWx8w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/mAOv2Wf-zpE?loop=1&playlist=mAOv2Wf-zpE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideosPage;
