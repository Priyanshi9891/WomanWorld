
import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  // Create random stars
  const stars = Array.from({ length: 45 });

  return (
    <div className="loading-screen">

      {/* Falling Stars */}
      <div className="stars-container">
        {stars.map((_, index) => (
          <span
            key={index}
            className="falling-star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              "--size": `${2 + Math.random() * 4}px`,
              "--drift": `${-80 + Math.random() * 160}px`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Center Content */}
      <div className="loading-content">

        <div className="logo-stars">
          ✦
        </div>

        <h1>Radiant Glow</h1>

        <p>BEAUTY • ELEGANCE • CONFIDENCE</p>

        <div className="loading-line">
          <span></span>
        </div>

        <div className="loading-text">
          Preparing your beauty experience...
        </div>

      </div>

    </div>
  );
}

