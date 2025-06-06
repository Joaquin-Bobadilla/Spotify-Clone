"use client";

import { useState } from "react";
import { cn, secondsToText } from "@/lib/utils";
import { useSongStore } from "@/app/store";
import { SongRow } from "./songRow";
import type { TAlbum, TSong } from "@/lib/placeholder-data";

export function AlbumControls(props: { album: TAlbum }) {
  const [isLiked, setLiked] = useState(props.album.isLiked);
  const [isShuffle, setShuffle] = useState(false);
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    useSongStore();

  return (
    <div className="w-full flex gap-5 mb-5 items-center">
      {/*play button*/}
      {currentSong && currentSong.album === props.album.id && isPlaying ? (
        <button
          className="cursor-pointer hover:scale-103 hover:brightness-110 size-[56px] bg-spotify-green rounded-full flex items-center justify-center"
          onClick={() => setIsPlaying(false)}
        >
          <svg
            className="size-[20px] fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        </button>
      ) : (
        <button
          className="cursor-pointer hover:scale-103 hover:brightness-110 size-[56px] bg-spotify-green rounded-full flex items-center justify-center"
          onClick={() => {
            if (!currentSong || currentSong.album !== props.album.id) {
              setCurrentSong(props.album.songList[0]);
            }
            setIsPlaying(true);
          }}
        >
          <svg
            className="size-[20px] fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
          </svg>
        </button>
      )}

      {/*shuffle button*/}
      <button
        className="cursor-pointer hover:scale-103 hover:brightness-150"
        onClick={() => setShuffle(!isShuffle)}
      >
        <svg
          className={cn(
            "size-[32px]",
            isShuffle ? "fill-spotify-green" : "fill-spotify-gray"
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
          <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
        </svg>
      </button>
      {/*like button*/}
      {isLiked ? (
        <button
          className="cursor-pointer hover:scale-103 hover:brightness-110"
          onClick={() => setLiked(!isLiked)}
        >
          <svg
            className="size-[32px] fill-spotify-green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
          </svg>
        </button>
      ) : (
        <button
          className="cursor-pointer hover:scale-103 hover:brightness-150"
          onClick={() => setLiked(!isLiked)}
        >
          <svg
            className="size-[32px] fill-spotify-gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
            <path
              d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"
              fill="#B3B3B3"
            ></path>
          </svg>
        </button>
      )}
      {/*download button*/}
      <button className="cursor-pointer hover:scale-103 hover:brightness-150 ">
        <svg
          className="size-[32px] fill-spotify-gray"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
          <path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"></path>
        </svg>
      </button>
      {/*more options button*/}
      <button className="cursor-pointer hover:scale-103 hover:brightness-150 ">
        <svg
          className="size-[32px] fill-spotify-gray"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
        </svg>
      </button>
      {/*list button*/}
      <button className="flex items-center gap-2 p-2 ml-auto hover:brightness-150 cursor-pointer">
        <span className="text-spotify-gray">Lista</span>
        <svg
          className="size-[18px] fill-spotify-gray"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
        </svg>
      </button>
    </div>
  );
}

export function AlbumHeader(props: { album: TAlbum }) {
  return (
    <header
      className="flex flex-row gap-6 @container p-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${props.album.colorFrom}, ${props.album.colorTo})`,
      }}
    >
      <img
        className="min-h-39 h-1/4 max-h-58 min-w-39 w-1/4 max-w-58 aspect-square rounded-md drop-shadow-neutral-950/30 drop-shadow-2xl"
        src={props.album.image}
      />

      <div className="flex flex-col justify-end text-white">
        <span>Álbum</span>
        <h1 className="font-extrabold text-3xl @5xl:text-7xl mb-3">
          {props.album.name}
        </h1>
        <span className="text-white/80">
          <a
            className="font-bold text-white hover:cursor-pointer hover:underline"
            href=""
          >
            {props.album.artist}
          </a>
          {` • ${props.album.year} • ${
            props.album.songList.length
          } canciones, ${secondsToText(props.album.duration)}`}
        </span>
      </div>
    </header>
  );
}

export function AlbumTable(props: { songList: TSong[] }) {
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
        {props.songList.map((song, index) => {
          return <SongRow key={song.id} song={song} ord={index + 1} />;
        })}
      </tbody>
    </table>
  );
}
