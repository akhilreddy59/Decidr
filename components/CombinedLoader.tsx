'use client';

import React from 'react';

export function CombinedLoader() {
  return (
    <div className="loader-wrapper">
      <style>{`
        .loader-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background-color: #020205; /* Matches bg-vanta */
        }

        .loader-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* --- Heart Section --- */
        .heart {
          display: inline-grid;
          grid-template-columns: repeat(13, 12px);
          grid-template-rows: repeat(11, 12px);
          gap: 1px;
          animation: heartbeat 2s infinite ease-in-out;
          opacity: 0.8;
        }

        .pixel {
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }

        .pixel.pink {
          background: #e63946;
          animation: pinkPulse 2.5s infinite ease-in-out;
        }

        .pixel.soft-pink {
          background: #f1a1b4;
          animation: softPinkPulse 2.2s infinite ease-in-out;
        }

        .pixel.white {
          background: #ffeaea;
          animation: whitePulse 2.8s infinite ease-in-out;
        }

        /* --- Butterfly Section --- */
        .butterfly-wrapper {
          position: absolute;
          z-index: 10;
          pointer-events: none;
          animation: floatAround 4s ease-in-out infinite;
        }

        .butterfly-loader {
          display: flex;
          align-items: center;
          width: 50px;
          height: 50px;
          filter: drop-shadow(0 2px 5px rgba(0,0,0,0.2));
        }

        .butterfly-loader .wing {
          height: 100%;
          width: auto;
        }

        .left-wing {
          transform-origin: center right;
          animation: wingFlap 0.2s ease-in-out infinite;
        }

        .right-wing {
          transform-origin: center left;
          animation: wingFlap 0.25s ease-in-out infinite;
        }

        .body {
          height: 40%;
          margin: 0 1px;
        }

        /* --- Animations --- */
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes floatAround {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5px, -10px); }
          75% { transform: translate(-5px, -5px); }
        }

        @keyframes wingFlap {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(70deg); }
        }

        @keyframes pinkPulse {
          0%, 100% { background: #ff6b81; }
          50% { background: #e63946; box-shadow: 0 0 10px rgba(230, 57, 70, 0.4); }
        }

        @keyframes softPinkPulse {
          0%, 100% { background: #e63946; }
          50% { background: #f1a1b4; }
        }

        @keyframes whitePulse {
          0%, 100% { background: #ffe3e3; }
          50% { background: #ffeaea; box-shadow: 0 0 15px rgba(255, 255, 255, 0.5); }
        }
      `}</style>
      <div className="loader-container">
        {/* The Pixel Heart Background */}
        <div className="heart">
          {/* Row 1 */}
          <div className="pixel" /><div className="pixel" />
          <div className="pixel pink" /><div className="pixel pink" /><div className="pixel pink" />
          <div className="pixel" /><div className="pixel" /><div className="pixel" />
          <div className="pixel pink" /><div className="pixel pink" /><div className="pixel pink" />
          <div className="pixel" /><div className="pixel" />
          
          {/* Row 2 */}
          <div className="pixel" /><div className="pixel pink" />
          <div className="pixel soft-pink" /><div className="pixel soft-pink" /><div className="pixel soft-pink" />
          <div className="pixel pink" /><div className="pixel" /><div className="pixel pink" />
          <div className="pixel soft-pink" /><div className="pixel soft-pink" /><div className="pixel soft-pink" />
          <div className="pixel pink" /><div className="pixel" />

          {/* Row 3 */}
          <div className="pixel pink" /><div className="pixel soft-pink" /><div className="pixel soft-pink" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel soft-pink" />
          <div className="pixel pink" /><div className="pixel soft-pink" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel soft-pink" /><div className="pixel soft-pink" />
          <div className="pixel pink" />

          {/* Row 4 */}
          <div className="pixel pink" /><div className="pixel soft-pink" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel soft-pink" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel soft-pink" /><div className="pixel pink" />

          {/* Row 5 */}
          <div className="pixel pink" /><div className="pixel soft-pink" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel soft-pink" /><div className="pixel pink" />

          {/* Row 6 */}
          <div className="pixel" /><div className="pixel pink" />
          <div className="pixel soft-pink" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel soft-pink" />
          <div className="pixel pink" /><div className="pixel" />

          {/* Row 7 */}
          <div className="pixel" /><div className="pixel" /><div className="pixel pink" />
          <div className="pixel soft-pink" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel soft-pink" /><div className="pixel pink" /><div className="pixel" /><div className="pixel" />

          {/* Row 8 */}
          <div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel pink" />
          <div className="pixel soft-pink" /><div className="pixel white" /><div className="pixel white" />
          <div className="pixel white" /><div className="pixel soft-pink" /><div className="pixel pink" />
          <div className="pixel" /><div className="pixel" /><div className="pixel" />

          {/* Row 9 */}
          <div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" />
          <div className="pixel pink" /><div className="pixel soft-pink" /><div className="pixel white" />
          <div className="pixel soft-pink" /><div className="pixel pink" /><div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" />

          {/* Row 10 */}
          <div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" />
          <div className="pixel" /><div className="pixel pink" /><div className="pixel soft-pink" />
          <div className="pixel pink" /><div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" />

          {/* Row 11 */}
          <div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" />
          <div className="pixel" /><div className="pixel" /><div className="pixel pink" />
          <div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" /><div className="pixel" />
        </div>

        {/* The Butterfly Flying "Inside" */}
        <div className="butterfly-wrapper">
          <div className="butterfly-loader">
            <svg viewBox="0 0 18.528 35.424" className="wing left-wing">
              <path fill="#e63946" d="M3.358 35.05c.435-.175.646-.408.861-.95.374-.94.698-1.52 1.145-2.05.78-.92 1.757-1.638 2.666-1.957.603-.212.9-.204 1.505.041.843.343 1.597.25 2.062-.254.95-1.029 3.95-6.873 5.841-11.376.869-2.07.831-1.882.797-3.962-.034-2.106-.024-2.064-.927-3.887-1.639-3.31-4.426-6.582-7.147-8.392C8.71 1.298 6.715.504 5.296.328c-.718-.09-2.465-.001-3.183.16C.943.752.279 1.268.279 1.917c0 .119.437 1.136.97 2.26.533 1.126 1.044 2.291 1.135 2.591.334 1.106.776 3.567.945 5.27.065.652.357 1.286.751 1.633.419.367 1.351.786 1.964.883.286.044.534.096.553.115.018.018-.129.128-.327.244-.761.446-1.432 1.439-1.74 2.574-.216.802-.194 2.914.045 4.121.24 1.212.575 2.318 1.031 3.403.46 1.092.535 1.458.439 2.135-.223 1.575-1.958 4.03-3.489 4.937-.693.41-.885.587-1.066.98-.173.375-.185.535-.069.953.223.802 1.206 1.326 1.937 1.033z" />
            </svg>
            <svg viewBox="0 0 2.4 14.4" className="body">
              <path fill="#333" d="M2.2 13c0 .641-.447 1.16-1 1.16-.553 0-1-.519-1-1.16V1.4C.2.759.647.24 1.2.24c.553 0 1 .519 1 1.16z" />
            </svg>
            <svg viewBox="0 0 18.528 35.424" className="wing right-wing">
              <path fill="#e63946" d="M15.105 35.155c-.42-.196-.627-.482-.902-1.253-.544-1.517-2.145-3.126-3.636-3.652-.69-.243-.887-.242-1.486.01-.617.26-1.342.278-1.798.045-.555-.283-1.76-2.262-3.476-5.708C2.628 22.232.984 18.575.455 17.144c-.236-.637-.237-.655-.237-2.485 0-2.164.01-2.209.9-4.013 1.011-2.049 2.53-4.189 4.185-5.9C7.679 2.293 9.783.995 12.49.313c.782-.197 1.554-.236 2.695-.137 1.619.14 2.38.38 2.882.909.21.22.246.321.243.684-.002.373-.122.67-.959 2.395-1.277 2.63-1.59 3.806-2.035 7.63-.111.951-.316 1.426-.809 1.87-.52.47-1.306.807-2.165.928l-.391.054.35.224c.897.574 1.58 1.674 1.834 2.956.193.969.12 2.791-.164 4.15-.222 1.061-.696 2.518-1.12 3.443-.336.735-.411 1.584-.203 2.3.505 1.738 2.056 3.692 3.736 4.705.693.417.938.83.874 1.476-.104 1.071-1.193 1.706-2.153 1.256z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
