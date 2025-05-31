"use client";

import { SongRow } from "./songRow";
import { useState } from "react";

export function AlbumTable(props) {
  const [playingId, setPlayingId] = useState(0);

  const playSong = (songId) => {
    setPlayingId(songId);
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="text-spotify-gray border-b-spotify-gray/25 border-b-1 h-10 cursor-default">
          <th className="min-w-14 font-normal text-[1.1em]">#</th>
          <th className="text-left font-normal sm:resize-x overflow-hidden">
            Título
          </th>
          <th className="text-left font-normal hidden sm:table-cell px-3">
            Reproducciones
          </th>
          <th className="min-w-45">
            <svg
              className="ml-auto mr-12 fill-spotify-gray size-[1.5em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="m620.12-320.15 34.73-34.73-150.47-150.65v-212.05h-47.96v232.93l163.7 164.5ZM480.09-124.08q-73.53 0-138.25-27.82-64.73-27.83-113.47-76.6-48.73-48.77-76.51-113.51-27.78-64.74-27.78-138.36 0-73.69 27.82-138.6 27.83-64.92 76.6-113.16 48.77-48.23 113.51-76.01 64.74-27.78 138.36-27.78 73.69 0 138.61 28.06 64.92 28.07 112.94 76.18 48.03 48.11 76.01 112.97 27.99 64.87 27.99 138.62 0 73.53-27.82 138.25-27.83 64.73-76.1 113.47-48.27 48.73-113.18 76.51-64.92 27.78-138.73 27.78ZM480-480Zm.48 307.96q127.55 0 217.52-90.44 89.96-90.44 89.96-218 0-127.55-89.96-217.52-89.97-89.96-217.52-89.96-127.56 0-218 89.96-90.44 89.97-90.44 217.52 0 127.56 90.44 218t218 90.44Z" />
            </svg>
          </th>
        </tr>
      </thead>

      <tbody>
        {props.songList.map(
          ({ songId, title, artists, streams, duration, isLiked }) => {
            return (
              <SongRow
                playSong={playSong}
                setPlaying={props.setPlaying}
                isPlaying={props.isPlaying}
                playingId={playingId}
                key={songId}
                songId={songId}
                title={title}
                artists={artists}
                streams={streams}
                duration={duration}
                isLiked={isLiked}
              />
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default AlbumTable;
