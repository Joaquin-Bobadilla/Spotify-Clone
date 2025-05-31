import { PlayerControls } from "./ui/playerControls/playerControls";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Spotify Clone</title>
      </head>

      <body className="h-screen flex flex-col bg-black">
        <header className="h-16">header</header>

        {/* Body */}
        <div className="flex flex-row gap-3 size-full overflow-auto px-3">
          <div className="bg-[#121212] min-w-18 max-w-105 resize-x  overflow-auto rounded-lg">
            album select
          </div>
          <div className="rounded-lg grow">{children}</div>
          <div className="bg-[#121212] min-w-70 max-w-105 resize-x overflow-auto">
            album info
          </div>
        </div>

        <footer className="h-22 p-4">
          <PlayerControls />
        </footer>
      </body>
    </html>
  );
}
