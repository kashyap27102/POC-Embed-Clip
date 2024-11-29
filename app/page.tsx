import { Metadata } from "next";
import Link from "next/link";

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
  },
};

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <button className="bg-slate-300 text-black p-2 rounded-lg">
        <Link href="/audio/3535">Go to Music</Link>
      </button>
    </div>
  );
}
