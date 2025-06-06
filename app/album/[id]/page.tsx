import { TAlbum, likedAlbums } from "@/lib/placeholder-data";
import { AlbumHeader, AlbumControls, AlbumTable } from "@/ui/songList/album";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const album = likedAlbums.find((album) => album.id === params.id) as TAlbum;

  return (
    <section className="h-full overflow-auto rounded-lg">
      <AlbumHeader album={album} />

      <div
        className="p-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${album.colorTo}BF, #121212 25%)`,
        }}
      >
        <AlbumControls album={album} />
        <AlbumTable songList={album.songList} />
      </div>
    </section>
  );
}
