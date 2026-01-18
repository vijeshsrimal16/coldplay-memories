import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("coldplay_auth");
    navigate("/");
  };

  return (
    <div className="home-page">
      <button className="logout-btn" onClick={logout}>
        Log out
      </button>

      <div className="home-content">
        <h1>🌈 Coldplay Memories</h1>

        <p className="subtitle">
          A moment in time.  
          Forever in heart.
        </p>

        <div className="memory-card">
          ✨ Your memories will live here soon.
        </div>
      </div>
    </div>
  );
}
