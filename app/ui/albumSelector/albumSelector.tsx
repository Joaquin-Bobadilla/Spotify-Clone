"use client";

import { useState } from "react";
import { AlbumCard } from "./albumCard";
import { cn } from "@/app/lib/utils";
import type { TAlbum } from "@/lib/placeholder-data";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "lucide-react";

export function AlbumSelector({ likedAlbums }: { likedAlbums: TAlbum[] }) {
  const [isSearch, setIsSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="bg-spotify-background min-w-18 max-w-105 resize-x overflow-auto rounded-lg flex flex-col ">
      <header className="p-5">
        <h1 className="font-bold text-white">Tu biblioteca</h1>
      </header>

      <div className="flex flex-col p-2 grow overflow-y-scroll items-baseline">
        {/* Search/Filter */}
        <div className="group w-full relative flex flex-row justify-between items-center px-3 mb-2">
          <button
            className={cn(
              isSearch ? "bg-none" : "hover:bg-[#2a2a2a]",
              "size-8 rounded-full hover:brightness-130 cursor-pointer absolute left-3 z-2"
            )}
            onClick={() => setIsSearch(!isSearch)}
            onBlur={() => setIsSearch(false)}
          >
            <SearchIcon className="m-auto size-4 stroke-spotify-gray" />
          </button>
          <input
            className={cn(
              isSearch ? "visible w-49 opacity-100" : "collapse opacity-0",
              "w-0 bg-[#2a2a2a] text-spotify-gray text-sm pl-8 h-8 rounded-sm focus:outline-0 duration-300 ease-in-out origin-left break-all overflow-hidden line-clamp-1"
            )}
            placeholder="Buscar en Tu biblioteca"
            onChange={useDebouncedCallback(
              (e) => setSearchVal(e.target.value),
              300
            )}
            onFocus={() => setIsSearch(true)}
            onBlur={() => setIsSearch(false)}
          ></input>

          <div className="flex flex-row items-center justify-end gap-2 spotify-btn">
            <div className={cn("duration-200", isSearch ? "w-0" : "grow")}>
              <span className="text-spotify-gray text-sm break-all overflow-hidden line-clamp-1">
                Recientes
              </span>
            </div>
            <svg
              className="size-4 fill-spotify-gray"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z"></path>
            </svg>
          </div>
        </div>

        {/* Album Grid */}
        <div className="flex flex-row flex-wrap">
          {likedAlbums.map((album) => {
            if (
              !searchVal ||
              album.name.toUpperCase().includes(searchVal.toUpperCase())
            ) {
              return <AlbumCard key={album.id} album={album} />;
            }
          })}
          {/* Invisible cells for alignment */}
          <div className="grow w-32 min-w-32"></div>
          <div className="grow w-32 min-w-32"></div>
        </div>
      </div>
    </div>
  );
}
