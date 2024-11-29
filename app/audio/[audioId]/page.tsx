import MusicPlayerCard from "@/app/components/MusicPlayerCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-96">
        <MusicPlayerCard />
      </div>
    </div>
  );
};

export default page;
