import React, { useState, useEffect } from "react";
import "./KiteFalling.css";

const KiteFalling = () => {
  const [mainKite, setMainKite] = useState({ x: 0, y: 0 });
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [randomKites, setRandomKites] = useState([]);

  // Initialize random kites with increased speed
  useEffect(() => {
    const kites = Array.from({ length: 10 }, () => ({
      x: Math.random() * window.innerWidth,
      y: -50 - Math.random() * window.innerHeight,
      speed: 2 + Math.random() * 2.5, // Increased speed range
      direction: Math.random() > 0.5 ? 1 : -1, // Zig-zag direction
      color: "#" + Math.floor(Math.random() * 16777215).toString(16), // Random colors
    }));
    setRandomKites(kites);
  }, []);

  // Animate main kite (direct fall from top-left to bottom-right with increased speed)
  useEffect(() => {
    const interval = setInterval(() => {
      setMainKite((prev) => ({
        x: Math.min(prev.x + 12, window.innerWidth - 50), // Increased speed for x direction
        y: Math.min(prev.y + 5.3, window.innerHeight - 50), // Increased speed for y direction
      }));

      if (
        mainKite.x >= window.innerWidth - 50 &&
        mainKite.y >= window.innerHeight - 50
      ) {
        setBackgroundStyle({
          filter: "blur(5px)",
          opacity: 0.25,
        });
        setShowMessage(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [mainKite]);

  // Animate random kites (increased speed and random direction)
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomKites((prev) =>
        prev.map((kite) => ({
          ...kite,
          y: kite.y + kite.speed, // Increased speed here as well
          x: kite.x + kite.direction * Math.random() * 5, // Random zig-zag direction with more speed
        }))
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        className="background"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('../bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 1s ease-in-out",
          ...backgroundStyle,
        }}
      ></div>

      {/* Main kite with swinging animation */}
      {!showMessage && (
        <div
          style={{
            position: "absolute",
            left: `${mainKite.x}px`,
            top: `${mainKite.y}px`,
            transform: `translate(-50%, -50%)`,
            fontSize: "4rem",
            color: "red",
            animation: "swing 1.5s ease-in-out infinite", // Apply swinging animation
          }}
        >
          <img src="../2.png" alt="" height={100} width={100} />
        </div>
      )}

      {/* Random kites */}
      {randomKites.map((kite, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${kite.x}px`,
            top: `${kite.y}px`,
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
            color: kite.color, // Unique random color for each kite
          }}
        >
          🪁
        </div>
      ))}

      {/* Display "Happy Uttarayan!" in the center once */}
      {showMessage && (
        <h1
          className="message"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0)",
            fontSize: "4rem",
            fontFamily: "cursive",
            lineHeight: "90px",
            color: "#ff5722", // Set text color to a solid color (e.g., orange)
            textShadow: "0px 0px 15px rgba(0, 0, 0, 0.5), 3px 3px 15px #000",
            display: "flex", // Use flex to align text and image side by side
            alignItems: "center", // Vertically align text and image
            animation: "fadeInScale 3s ease-in-out forwards",
          }}
        >
          Happy <br /> Makar Sankranti!{" "}
          <img
            src="../boy.webp"
            alt="Boy with Kite"
            style={{
              width: "200px", // Set the width of the image
              height: "200px", // Set the height of the image
              borderRadius: "50%", // Make the image circular
              marginLeft: "10px", // Add some space between text and image
            }}
          />
        </h1>
      )}
    </div>
  );
};

export default KiteFalling;
