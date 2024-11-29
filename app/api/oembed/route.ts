import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Extract URL query parameter
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  // Validate the URL
  if (!url || !url.startsWith("https://poc-embed-clip.vercel.app/audio/")) {
    return NextResponse.json(
      { error: "Invalid URL or unsupported format." },
      { status: 400 }
    );
  }

  // Parse the audio ID from the URL
  const audioId = url.split("/audio/")[1];
  if (!audioId) {
    return NextResponse.json({ error: "Invalid audio ID." }, { status: 400 });
  }

  // Example: Mock audio data (replace with your backend or database logic)
  const audioData = {
    id: audioId,
    title: "Sample Audio Track",
    author_name: "Audio Creator",
    author_url: "https://poc-embed-clip.vercel.app/creator/audio-creator",
    thumbnail_url:
      "https://poc-embed-clip.vercel.app/assets/audio-thumbnail.jpg",
    html: `
      <iframe
        src="https://poc-embed-clip.vercel.app/embed/audio/${audioId}"
        width="300"
        height="150"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      ></iframe>
    `,
  };

  // Return the oEmbed JSON response
  return NextResponse.json({
    version: "1.0",
    type: "rich", // 'rich' indicates embedded HTML content
    title: audioData.title,
    author_name: audioData.author_name,
    author_url: audioData.author_url,
    thumbnail_url: audioData.thumbnail_url,
    html: audioData.html,
    width: 300,
    height: 150,
  });
}
