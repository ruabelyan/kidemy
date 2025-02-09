import React, { useEffect, useState } from 'react';
import styles from './VideosPage.module.scss';
import { Loader } from '@/ui-components';

const VideosPage = () => {
  const [videos, setVideos] = useState<any[]>([]); // Store videos
  const [loading, setLoading] = useState<boolean>(true); // Handle loading state
  const [error, setError] = useState<string>(''); // Handle errors

  useEffect(() => {
    // Fetch videos from API
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://kidemy.com/api/videos');
        const data = await response.json();
        setVideos(data); // Assuming the API returns an array of video objects
      } catch (err) {
        setError('Failed to fetch videos. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
       <Loader/>
    ); // Display loader while data is being fetched
  }

  if (error) {
    return <div className={styles['response-container']}>{error}</div>; // Error message
  }

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
          {/* Dynamically render videos from API */}
          {videos.map((video: any) => (
            <div key={video.id}>
              <iframe
                className={styles.video}
                src={`https://www.youtube.com/embed/${video.id}?loop=1&playlist=${video.id}`}
                title={`YouTube video player - ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideosPage;
