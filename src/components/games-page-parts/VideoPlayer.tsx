import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "./VideoPlayer.module.scss";

const VideoPlayer = ({ url }: { url: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  // Extract video ID and start time from the URL
  const extractVideoDetails = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/
    );
    const startTimeMatch = url.match(/[?&]t=(\d+)[s]*/);

    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    const startTime = startTimeMatch ? parseInt(startTimeMatch[1], 10) : 0;

    return { videoId, startTime };
  };

  const { videoId, startTime } = extractVideoDetails(
    url || "https://www.youtube.com/watch?v=dLRvYEv46F0&t=35s"
  );

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      start: startTime,
      autoplay: 0, // Autoplay video
      rel: 0, // Don't show related videos
      showinfo: 0, // Hide video info (deprecated but still helps)
      modestbranding: 1, // Hide YouTube logo
      controls: 0, // Hide all player controls
      disablekb: 1, // Disable keyboard shortcuts
      fs: 0, // Disable fullscreen button
      iv_load_policy: 3, // Hide annotations
      playsinline: 1, // Prevent fullscreen on mobile
    },
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
  };

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
        <YouTube style={{height:'100%'}}  videoId={videoId || ""} opts={opts} onReady={onReady} />
      </div>
      <div className={styles.overlay}>
        <img
          className={styles.playButton}
          alt="Play Video"
          onClick={handlePlayPause}
          src={
            !isPlaying
              ? "https://kidemy.com/_next/image?url=%2Fimages%2FPlayButton.webp&w=96&q=75"
              : "https://kidemy.com/svg/PauseIcon.svg"
          }
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
