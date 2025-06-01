import { AlbumModule } from "../../ui/songList/albumModule";
import "../../globals.css";
import { likedAlbums } from "../../lib/placeholder-data";

export default async function Page(props: { params: Promise<{ id: String }> }) {
  const params = await props.params;
  const id = params.id;
  const album = likedAlbums.find((album) => album.id === params.id);

  return <AlbumModule album={album} />;
}
