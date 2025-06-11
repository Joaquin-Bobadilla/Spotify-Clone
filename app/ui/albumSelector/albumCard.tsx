"use client";

import Link from "next/link";
import { useSongStore } from "@/app/store";
import { cn } from "@/lib/utils";
import type { TAlbum } from "@/lib/placeholder-data";
import { PlayIcon, PauseIcon } from "lucide-react";

export function AlbumCard({ album }: { album: TAlbum }) {
  const { id, image, name, artist, songList } = album;
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
          <PauseIcon className="size-7 fill-black m-auto stroke-0" />
        </button>
      ) : (
        //Play
        <button
          className="z-2 cursor-pointer spotify-btn size-12 rounded-full bg-spotify-green duration-350 ease-in-out hover:ease-linear hover:duration-0 absolute right-5 bottom-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2"
          onClick={() => {
            if (!currentSong || currentSong.album !== id) {
              setCurrentSong(songList[0]);
            }
            setIsPlaying(true);
          }}
        >
          <PlayIcon className="size-6 fill-black m-auto stroke-0" />
        </button>
      )}

      {/* Album Info */}
      <Link href={`/album/${id}`}>
        <img className="rounded-md grow aspect-square" src={image} alt={name} />

        <div className="h-12">
          <span
            className={cn(
              currentSong && currentSong.album === id
                ? "text-spotify-green"
                : "text-white",
              "text-md break-all line-clamp-1 mt-1"
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
