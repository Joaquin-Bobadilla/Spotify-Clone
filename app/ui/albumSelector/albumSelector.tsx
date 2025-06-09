"use client";

import { useState } from "react";
import { AlbumCard } from "./albumCard";
import { likedAlbums } from "@/app/lib/placeholder-data";
import { cn } from "@/app/lib/utils";

export function AlbumSelector() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="bg-spotify-background min-w-18 max-w-105 resize-x overflow-auto rounded-lg">
      <header className="p-3">
        <h1 className="font-bold text-white">Tu biblioteca</h1>
      </header>

      <div className="flex flex-row flex-wrap p-2">
        {/* Search/Filter */}
        <div className="group w-full relative flex flex-row justify-between items-center px-3">
          <button
            className={cn(
              "size-8 rounded-full hover:brightness-130 cursor-pointer absolute left-3 z-2",
              isSearch ? "bg-none" : "hover:bg-[#2a2a2a]"
            )}
            onClick={() => setIsSearch(!isSearch)}
          >
            <svg
              className="m-auto size-4 fill-spotify-gray"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
            </svg>
          </button>
          <input
            className={cn(
              "w-0 bg-[#2a2a2a] text-spotify-gray text-sm pl-8 h-8 rounded-sm focus:outline-0 duration-300 ease-in-out origin-left break-all overflow-hidden line-clamp-1",
              isSearch ? "visible w-49 opacity-100" : "collapse opacity-0"
            )}
            placeholder="Buscar en Tu biblioteca"
            onChange={(e) => setSearchVal(e.target.value)}
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
  );
}
