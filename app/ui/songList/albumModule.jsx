"use client";

import { AlbumTable } from "./albumTable";
import { AlbumControls } from "./albumControls";
import { useState } from "react";

export function AlbumModule(props) {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <section className="h-full overflow-auto bg-gradient-to-b from-0% from-[#4b0f0f] to-25% to-[#121212] p-6">
      <AlbumControls
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        isLiked={props.album.isLiked}
      />
      <AlbumTable
        songList={props.album.songList}
        setPlaying={setPlaying}
        isPlaying={isPlaying}
      />
    </section>
  );
}
