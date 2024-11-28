import MusicPlayerCard from "@/app/components/MusicPlayerCard";
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<MusicPlayerCard />, {
    width: 1200,
    height: 300,
  });
}
