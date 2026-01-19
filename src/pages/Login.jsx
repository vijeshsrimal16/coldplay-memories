import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "coldplay" && password === "iwilltrytofixyou") {
      localStorage.setItem("coldplay_auth", "true");
      navigate("/home");
    } else {
      alert("Wrong vibe 🌈 Try again.");
    }
  };

  return (
    <div className="login-wrapper">

      {/* 🎥 Background video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/Coldplay.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="overlay">

        {/* 🧊 Glass container */}
        <div className="glass-box">
          <h1>Coldplay Memories</h1>
          <p>A year ago. A lifetime of feelings.</p>

          <input
            placeholder="🌙 Your Universe Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="✨ Your Magic Code"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>
            UnlockMemz
          </button>
        </div>

      </div>
    </div>
  );
}
