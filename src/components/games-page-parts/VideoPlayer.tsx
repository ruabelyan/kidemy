import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({url}:{url:string}) => {
  const iframeRef = useRef(null); // Ref to the div where iframe will be injected
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Load the YouTube Iframe API script only once
  const loadYouTubeAPI = () => {
    return new Promise((resolve, reject) => {
      // Check if YT is already defined, if so resolve immediately
      if (window.YT && window.YT.Player) {
        resolve(window.YT);
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.onload = () => {
          if (window.YT && window.YT.Player) {
            resolve(window.YT);
          } else {
            reject(new Error('YouTube API did not load correctly'));
          }
        };
        script.onerror = () => reject(new Error('Error loading YouTube API'));
        document.body.appendChild(script);
      }
    });
  };

  // Extract video ID and start time from the URL
  const extractVideoDetails = (url) => {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
    const startTimeMatch = url.match(/[?&]t=(\d+)[s]*/);
    
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    const startTime = startTimeMatch ? parseInt(startTimeMatch[1], 10) : 0; // default start time is 0 if not found

    return { videoId, startTime };
  };

  useEffect(() => {
    const { videoId, startTime } = extractVideoDetails(url || 'https://www.youtube.com/watch?v=dLRvYEv46F0&t=35s');
    
    if (videoId) {
      loadYouTubeAPI()
        .then((YT) => {
          // Ensure that YT.Player is available before creating the player
          if (YT && YT.Player) {
            const playerInstance = new YT.Player(iframeRef.current, {
              videoId, // Use extracted videoId
              playerVars: {
                start: startTime, // Start the video at the specified time
                autoplay: 1, // Automatically play video
                rel: 0, // Don't show related videos at the end
                showinfo: 0, // Hide video info
              },
              events: {
                onReady: () => {
                  setPlayer(playerInstance);
                },
                onStateChange: (event) => {
                  if (event.data === YT.PlayerState.PLAYING) {
                    setIsPlaying(true);
                  } else if (event.data === YT.PlayerState.PAUSED) {
                    setIsPlaying(false);
                  }
                },
              },
            });
          } else {
            console.error('YT.Player is not available');
          }
        })
        .catch((error) => {
          console.error('Error loading YouTube API:', error);
        });
    }

    // Cleanup when the component is unmounted
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []); // Empty dependency array ensures it only runs once

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        {/* This div is where YouTube will inject the iframe */}
        <div ref={iframeRef} className={styles.videoIframe}></div>
      </div>
      <div className={styles.overlay}>
        <img
          className={styles.playButton}
          alt="Play Video"
          onClick={handlePlayPause}
          src={!isPlaying ? "https://kidemy.com/_next/image?url=%2Fimages%2FPlayButton.webp&w=96&q=75" : 'https://kidemy.com/svg/PauseIcon.svg'}
          width="83"
          height="83"
        />
        <img
          className={styles.volumeIcon}
          alt="Volume Control Icon"
          onClick={handleMuteUnmute}
          src="https://kidemy.com/svg/VolumeControlIcon.svg"
          width="81"
          height="64"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
