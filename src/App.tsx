import React, { useEffect, useState } from "react";
import { Shell, Music, Music as MusicOff } from "lucide-react";
import Header from "./components/Header";
import Bubbles from "./components/Bubbles";
import PartyDetails from "./components/PartyDetails";
import Seaweed from "./components/Seaweed";
import Fish from "./components/Fish";
import RSVP from "./components/RSVP";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Confetti from "./components/Confetti";
import mermaidImg2 from "./image/mermaid2.png";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [muted, setMuted] = useState(true);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audio] = useState(new Audio("/underwater-ambience.mp3"));

  useEffect(() => {
    // Show confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set up audio
    audio.loop = true;

    // Load audio
    audio.addEventListener("canplaythrough", () => {
      setAudioLoaded(true);
    });

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", () => {
        setAudioLoaded(true);
      });
    };
  }, [audio]);

  useEffect(() => {
    if (audioLoaded) {
      if (!muted) {
        audio.play().catch(() => {
          // Handle autoplay restrictions
          setMuted(true);
        });
      } else {
        audio.pause();
      }
    }
  }, [muted, audioLoaded, audio]);

  const toggleAudio = () => {
    setMuted(!muted);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0a2463] via-[#1e50a6] to-[#135486] text-white">
      {/* Audio control */}
      {audioLoaded && (
        <button
          onClick={toggleAudio}
          className="fixed z-50 flex items-center justify-center p-3 text-white rounded-full shadow-lg top-4 right-4 bg-[#ff6e9c]/60 hover:bg-[#ff6e9c]/80 transition-all duration-300"
          aria-label={
            muted ? "Activar música de fondo" : "Desactivar música de fondo"
          }
        >
          {muted ? (
            <Music className="w-5 h-5" />
          ) : (
            <MusicOff className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubbles />
      </div>

      <div className="absolute bottom-0 w-full pointer-events-none">
        <Seaweed />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Fish />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {showConfetti && <Confetti />}

        <div className="w-full max-w-4xl px-6 py-10 mx-auto rounded-lg shadow-2xl bg-gradient-to-b from-[#135486]/80 to-[#072142]/80 backdrop-blur-sm">
          {/* Decorative mermaid in corner */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-80 pointer-events-none animate-float">
            <img
              src={mermaidImg2}
              alt=""
              aria-hidden="true"
              className="object-contain w-full h-full"
            />
          </div>

          <Header name="Antonella" age={4} />

          <main className="mt-8">
            <PartyDetails />
            <Countdown targetDate="2025-05-10T15:00:00" />
            <RSVP />
          </main>
        </div>

        <Footer />
      </div>

      {/* Decorative shells */}
      <div className="absolute left-4 bottom-4 text-[#ffccd5] opacity-60 transform rotate-12">
        <Shell className="w-12 h-12" />
      </div>
      <div className="absolute right-8 top-8 text-[#ffccd5] opacity-60 transform -rotate-12">
        <Shell className="w-10 h-10" />
      </div>
    </div>
  );
}

export default App;
