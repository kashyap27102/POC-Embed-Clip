import MusicPlayerCard from "@/app/components/MusicPlayerCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  openGraph: {
    title: "Song title",
    description: "Song description",

    images: [
      {
        url: "https://poc-embed-clip.vercel.app/api/og",
        width: 800,
        height: 600,
      },
    ],
    // type: "music.song",
    // audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
  },
};

const page = () => {
  return <MusicPlayerCard />;
};

export default page;
