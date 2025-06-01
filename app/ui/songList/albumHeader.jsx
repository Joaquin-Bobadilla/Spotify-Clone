import { secondsToText } from "../../lib/utils";

export function AlbumHeader(props) {
  return (
    <header
      className={`p-6`}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${props.album.colorFrom}, ${props.album.colorTo})`,
      }}
    >
      <div className="flex flex-row gap-6">
        <img
          className="min-w-39 w-1/4 max-w-58 aspect-square rounded-md drop-shadow-neutral-950/30 drop-shadow-2xl"
          src={props.album.image}
        />
        <div className="flex flex-col justify-end text-white">
          <span>Álbum</span>
          <h1 className="font-extrabold text-3xl xl:text-3xl mb-3">
            {props.album.name}
          </h1>
          <span className="text-white/80">
            <a
              className="font-bold text-white hover:cursor-pointer hover:underline"
              href=""
            >
              {props.album.artist}
            </a>
            {` • ${props.album.year} • ${
              props.album.songList.length
            } canciones, ${secondsToText(props.album.duration)}`}
          </span>
        </div>
      </div>
    </header>
  );
}
