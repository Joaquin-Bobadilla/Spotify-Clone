import { PlayerControls } from "./ui/playerControls/playerControls";
import { AlbumSelector } from "./ui/albumSelector/albumSelector";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Spotify Clone</title>
      </head>

      <body className="h-screen flex flex-col bg-black">
        <header className="h-16"></header>

        {/* Body */}
        <div className="flex flex-row gap-2 size-full overflow-auto px-2">
          <AlbumSelector />
          <div className="rounded-lg grow">{children}</div>
          <div className="bg-[#121212] min-w-70 max-w-105 resize-x overflow-auto"></div>
        </div>

        <footer className="h-22 p-4">
          <PlayerControls />
        </footer>
      </body>
    </html>
  );
}
