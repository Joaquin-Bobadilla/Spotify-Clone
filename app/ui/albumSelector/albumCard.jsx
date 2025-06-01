import Link from "next/link";

export function AlbumCard(props) {
  const { id, image, name, artist } = props.album;

  return (
    <Link
      href={`/album/${id}`}
      className="group flex flex-col p-3 rounded-md cursor-pointer hover:bg-[#1c1c1c] grow w-32 min-w-32"
    >
      <div className="relative">
        <button className="z-2 cursor-pointer spotify-btn size-12 rounded-full bg-spotify-green opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-350 ease-in-out hover:ease-linear hover:duration-0 absolute bottom-0 right-2">
          <svg
            className="size-6 fill-black m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </button>
        <img className="rounded-md grow aspect-square" src={image} alt={name} />
      </div>

      <span className="text-white text-md break-all line-clamp-1 mt-1">
        {name}
      </span>
      <span className="text-spotify-gray text-sm break-all line-clamp-1">
        {"Álbum • " + artist}
      </span>
    </Link>
  );
}
