import { Metadata } from "next";
import MusicPlayerCard from "./components/MusicPlayerCard";

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

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <MusicPlayerCard />
      </div>
    </>
  );
}
