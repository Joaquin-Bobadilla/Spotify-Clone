"use client";

import { AlbumTable } from "./albumTable";
import { AlbumControls } from "./albumControls";
import { AlbumHeader } from "./albumHeader";
import { useState } from "react";

export function AlbumModule(props) {
  return (
    <section className="h-full overflow-auto rounded-lg">
      <AlbumHeader album={props.album} />
      <div
        className="p-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${props.album.colorTo}BF, #121212 25%)`,
        }}
      >
        <AlbumControls album={props.album} />
        <AlbumTable songList={props.album.songList} />
      </div>
    </section>
  );
}
