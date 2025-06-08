import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import sound from "./assets/rex_sound.mp3";
import musicIcon from "./assets/icon_play.gif";
import playIcon from "./assets/icon_play_icon.gif";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Listen for global 'startAudio' event
  useEffect(() => {
    const handleStartAudio = () => {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play failed:", err));
    };

    window.addEventListener("startAudio", handleStartAudio);

    return () => {
      window.removeEventListener("startAudio", handleStartAudio);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play failed:", err));
    }
  };

  //   const playIcon = "https://cdn-icons-png.flaticon.com/512/727/727245.png";
  //   const pauseIcon = "https://cdn-icons-png.flaticon.com/512/727/727239.png";

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={sound} loop />
      <button className="play-button" onClick={togglePlay}>
        <img
          src={isPlaying ? musicIcon : playIcon}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </button>
    </div>
  );
};

export default AudioPlayer;
