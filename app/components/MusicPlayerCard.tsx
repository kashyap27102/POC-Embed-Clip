"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaShareAlt } from "react-icons/fa";

const MusicPlayerCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText("https://example.com/song");
    alert("Song link copied to clipboard!");
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime =
        (Number(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress(Number(e.target.value));
    }
  };

  useEffect(() => {
    console.log("useEffect");

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, []);

  return (
    <div className="w-96 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg p-6">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
      />

      {/* Album Cover */}
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album Cover"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Song Details */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold">Song Title</h3>
        <p className="text-gray-400">Artist Name</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          className="w-full cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>
            {audioRef.current
              ? formatTime(audioRef.current.currentTime)
              : "0:00"}
          </span>
          <span>
            {audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handlePlayPause}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg shadow-md"
        >
          {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg shadow-md"
        >
          <FaShareAlt size={16} /> Share
        </button>
      </div>
    </div>
  );
};

const formatTime = (time: number) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default MusicPlayerCard;
