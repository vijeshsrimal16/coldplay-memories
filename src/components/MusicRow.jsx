import MusicPlayer from "./MusicPlayer";
import "./MusicRow.css";

export default function MusicRow({ songs }) {
  return (
    <div className={`music-row columns-${songs.length}`}>
      {songs.map((song, i) => (
        <MusicPlayer
          key={i}
          title={song.title}
          src={song.file}
        />
      ))}
    </div>
  );
}
