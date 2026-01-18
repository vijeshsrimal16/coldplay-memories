import { useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer({ title, src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="music-wrapper">
      <audio ref={audioRef} src={src} />

      <div className="music-card">
        <div className="music-info">
          🎵 {title}
        </div>

        <button onClick={toggle}>
          {playing ? "⏸ Pause" : "▶ Play"}
        </button>
      </div>
    </div>
  );
}
