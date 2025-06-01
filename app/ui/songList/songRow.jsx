"use client";

import { useState } from "react";
import { secondsToMinutes } from "../../lib/utils";
import { cn } from "../../lib/utils";

export function SongRow(props) {
  const [isLiked, setLiked] = useState(props.isLiked);

  return (
    <tr
      tabIndex={0}
      className="h-14 hover:bg-white/15 focus:bg-white/30 group focus:brightness-120"
    >
      {/*id, play button cell*/}
      <td className="w-12 text-center text-spotify-gray rounded-s-sm">
        {props.songId === props.playingId && props.isPlaying ? (
          /*pause button*/
          <button
            className="m-auto hidden group-hover:block group-focus:block"
            onClick={() => {
              //props.playSong(0);
              props.setPlaying(false);
            }}
          >
            <svg
              className="size-[18px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </button>
        ) : (
          /*play button*/
          <button
            className="m-auto hidden group-hover:block group-focus:block"
            onClick={() => {
              props.playSong(props.songId);
              props.setPlaying(true);
            }}
          >
            <svg
              className="size-[26px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M356-252.16v-455.68L707.07-480 356-252.16Z" />
            </svg>
          </button>
        )}
        {/*sound wave icon*/}
        <img
          className={cn(
            "group-hover:hidden group-focus:hidden m-auto size-[14px]",
            props.songId === props.playingId && props.isPlaying
              ? "block"
              : "hidden"
          )}
          src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
        />
        {/*song id*/}
        <span
          className={cn(
            "group-hover:hidden group-focus:hidden text-[1.07em]",
            props.songId === props.playingId && props.isPlaying
              ? "hidden"
              : "block",
            props.songId === props.playingId && !props.isPlaying
              ? "text-spotify-green"
              : "text-spotify-gray"
          )}
        >
          {props.songId}
        </span>
      </td>
      {/*title, artists cell*/}
      <td>
        <div className="flex flex-col gap-0">
          <span
            className={cn(
              "leading-5 cursor-default font-medium break-all line-clamp-1",
              props.songId === props.playingId
                ? "text-spotify-green"
                : "text-white"
            )}
          >
            {props.title}
          </span>
          <span className="leading-5 text-sm text-spotify-gray group-hover:text-white group-focus:text-white break-all line-clamp-1">
            {props.artists.map((artist, index) => {
              const isLast = index !== props.artists.length - 1;
              return (
                <span key={index}>
                  <a className="hover:underline" href="">
                    {artist}
                  </a>
                  {isLast && ",\u00A0"}
                </span>
              );
            })}
          </span>
        </div>
      </td>
      {/*streams cell*/}
      <td className="px-3 align-middle hidden sm:table-cell cursor-default text-spotify-gray group-hover:text-white group-focus:text-white">
        <span className="block text-right w-[13ch]">
          {props.streams.toLocaleString("es-AR")}
        </span>
      </td>
      {/*like, duration, options cell*/}
      <td className="rounded-e-sm">
        <div className="mr-3 flex flex-row justify-end items-center gap-x-1 sm:gap-x-3">
          {isLiked ? (
            /*liked button*/
            <button
              className="mr-3 sm:mr-6 cursor-pointer hover:scale-[1.06]"
              onClick={() => setLiked(!isLiked)}
            >
              <svg
                className="size-[19px] fill-spotify-green"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
              </svg>
            </button>
          ) : (
            /*add button*/
            <button
              className="mr-3 sm:mr-6 cursor-pointer hidden group-hover:block group-focus:block hover:scale-[1.06] hover:brightness-[2]"
              onClick={() => setLiked(!isLiked)}
            >
              <svg
                className="size-[19px] fill-spotify-gray"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
              </svg>
            </button>
          )}
          <span className="text-spotify-gray cursor-default">
            {secondsToMinutes(props.duration)}
          </span>
          {/*options button*/}
          <button className="text-white cursor-pointer invisible group-hover:visible group-focus:visible">
            <svg
              className="size-[2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#FFFFFF"
            >
              <path d="M273.02-428q-21.54 0-36.66-15.34-15.13-15.34-15.13-36.87 0-21.54 15.34-36.66Q251.91-532 273.44-532q21.54 0 36.67 15.34 15.12 15.34 15.12 36.87 0 21.54-15.34 36.66Q294.56-428 273.02-428Zm206.77 0q-21.54 0-36.66-15.34Q428-458.68 428-480.21q0-21.54 15.34-36.66Q458.68-532 480.21-532q21.54 0 36.66 15.34Q532-501.32 532-479.79q0 21.54-15.34 36.66Q501.32-428 479.79-428Zm206.77 0q-21.54 0-36.67-15.34-15.12-15.34-15.12-36.87 0-21.54 15.34-36.66Q665.44-532 686.98-532t36.66 15.34q15.13 15.34 15.13 36.87 0 21.54-15.34 36.66Q708.09-428 686.56-428Z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
