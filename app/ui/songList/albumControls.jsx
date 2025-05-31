"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";

export function AlbumControls(props) {
  const [isLiked, setLiked] = useState(props.isLiked);
  const [isShuffle, setShuffle] = useState(false);

  return (
    <div className="w-full flex gap-5 my-5 items-center">
      {/*play button*/}
      <button
        className="cursor-pointer hover:scale-103 hover:brightness-110 size-[56px] bg-spotify-green rounded-full flex items-center justify-center"
        onClick={() => props.setPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? (
          <svg
            className="size-[20px] fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        ) : (
          <svg
            className="size-[20px] fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
          </svg>
        )}
      </button>
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
