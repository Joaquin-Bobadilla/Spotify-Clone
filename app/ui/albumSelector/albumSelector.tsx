import { AlbumCard } from "./albumCard";
import { likedAlbums } from "@/app/lib/placeholder-data";

export function AlbumSelector() {
  return (
    <div className="bg-spotify-background min-w-18 max-w-105 resize-x overflow-auto rounded-lg">
      <header className="p-3">
        <h1 className="font-bold text-white">Tu biblioteca</h1>
      </header>

      <div className="flex flex-row flex-wrap p-2">
        {likedAlbums.map((album) => {
          return <AlbumCard key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
}
