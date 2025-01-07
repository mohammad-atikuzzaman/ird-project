"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import player from "@/public/audioBtn.png";

const Audio = ({ audio }) => {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause

  if (!audio) return null;

  const handleTogglePlay = () => {
    if (audioRef?.current) {
      if (isPlaying) {
        audioRef?.current.pause();
      } else {
        audioRef?.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button
        onClick={handleTogglePlay}
        className=""
      >
       <Image src={player} alt="play" />
      </button>
      {/* Hidden audio element */}
      <audio ref={audioRef}>
        <source src={audio? audio: null} type="audio/mpeg" />
        <source src={audio? audio: null} type="audio/ogg" />
      </audio>
    </div>
  );
};

export default Audio;
