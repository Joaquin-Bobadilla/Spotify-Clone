import { PlayerControls } from "@/ui/playerControls/playerControls";
import { AlbumSelector } from "@/ui/albumSelector/albumSelector";
import "@/app/globals.css";
import { Metadata } from "next";

const axios = require("axios").default;

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const likedAlbums = (await axios.get("http://localhost:3000/api/albumList"))
    .data;

  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-black">
        <header className="h-16"></header>

        {/* Body */}
        <div className="flex flex-row gap-2 size-full overflow-auto px-2">
          <AlbumSelector likedAlbums={likedAlbums} />
          <div className="rounded-lg grow">{children}</div>
          {/* <div className="bg-spotify-background min-w-70 max-w-105 resize-x overflow-auto"></div> */}
        </div>

        <footer className="h-22 p-4">
          <PlayerControls />
        </footer>
      </body>
    </html>
  );
}
