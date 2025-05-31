import { AlbumModule } from "../ui/songList/albumModule";
import "../globals.css";
import { demonDays } from "../lib/placeholder-data";

export default function Page() {
  return <AlbumModule album={demonDays} />;
}
