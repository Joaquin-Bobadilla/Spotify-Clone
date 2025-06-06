"use client";

import Link from "next/link";
import { useSongStore } from "@/app/store";
import { cn } from "@/lib/utils";
import type { TAlbum } from "@/lib/placeholder-data";

export function AlbumCard(props: { album: TAlbum }) {
  const { id, image, name, artist } = props.album;
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    useSongStore();

  return (
    <div className="relative group flex flex-col p-3 rounded-lg cursor-pointer hover:backdrop-brightness-170 grow w-32 min-w-32">
      {/* Play/Pause */}
      {currentSong && currentSong.album === id && isPlaying ? (
        //Pause
        <button
          className="z-2 cursor-pointer spotify-btn size-12 rounded-full bg-spotify-green duration-350 ease-in-out hover:ease-linear hover:duration-0 absolute right-5 bottom-16 opacity-100 -translate-y-2"
          onClick={() => setIsPlaying(false)}
        >
          <svg
            className="size-5 fill-black m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        </button>
      ) : (
        //Play
        <button
          className="z-2 cursor-pointer spotify-btn size-12 rounded-full bg-spotify-green duration-350 ease-in-out hover:ease-linear hover:duration-0 absolute right-5 bottom-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2"
          onClick={() => {
            if (!currentSong || currentSong.album !== props.album.id) {
              setCurrentSong(props.album.songList[0]);
            }
            setIsPlaying(true);
          }}
        >
          <svg
            className="size-6 fill-black m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </button>
      )}

      {/* Album Info */}
      <Link href={`/album/${id}`}>
        <img className="rounded-md grow aspect-square" src={image} alt={name} />

        <div className="h-12">
          <span
            className={cn(
              "text-md break-all line-clamp-1 mt-1",
              currentSong && currentSong.album === id
                ? "text-spotify-green"
                : "text-white"
            )}
          >
            {name}
          </span>
          <span className="text-spotify-gray text-sm break-all line-clamp-1">
            Álbum • {artist}
          </span>
        </div>
      </Link>
    </div>
  );
}
