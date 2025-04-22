"use client";

import { useState, useEffect } from "react";
import { Code } from "lucide-react";

export default function ComingSoonPage() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const TimeDigit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4 group">
      <div className="flex justify-center items-center bg-gradient-to-br from-indigo-800 to-purple-900 text-white rounded-xl w-16 h-16 md:w-20 md:h-20 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/50 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-black/10 filter blur-md scale-110"></div>
        <span className="text-2xl md:text-3xl font-bold relative z-10">
          {value}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm font-medium text-indigo-200 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-black flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(129, 140, 248, 0.1) 0%, rgba(0, 0, 0, 0) 60%)`,
      }}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTAzLCAxMTYsIDI0MiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMTAzLCAxMTYsIDI0MiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDBoMzB2MzBIMHoiIHN0cm9rZT0icmdiYSgxMDMsIDExNiwgMjQyLCAwLjEpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTAzLCAxMTYsIDI0MiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]"></div>

        {/* Animated glow elements */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                animation: `float ${
                  Math.random() * 10 + 15
                }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 mb-2 relative">
          Byte Studio
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-8">
            <div className="w-10 h-10 md:w-14 md:h-14 relative animate-spin-slow">
              <Code className="absolute text-indigo-400 w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </h1>

        <h2
          className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 my-4"
          style={{ animationDuration: "3s" }}
        >
          Coming Soon
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"></div>

        <p className="text-indigo-200 text-lg md:text-xl mb-8 max-w-lg">
          We&apos;re crafting something extraordinary. Stay tuned!
        </p>

        {/* Countdown Timer */}
        <div className="relative mb-6 mt-6">
          <div className="absolute -inset-6 bg-indigo-500/5 rounded-2xl blur-xl"></div>
          <div className="flex flex-row justify-center items-center relative bg-black/30 px-6 py-4 rounded-xl backdrop-blur-sm border border-indigo-500/10">
            <TimeDigit value={days} label="Days" />
            <TimeDigit value={hours} label="Hours" />
            <TimeDigit value={minutes} label="Minutes" />
            <TimeDigit value={seconds} label="Seconds" />
          </div>
        </div>

        <div className="flex mt-4 space-x-8">
          {/* Social Icons with hover effects */}
          {["twitter", "instagram", "facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-indigo-400 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-black/50 border border-indigo-500/30 rounded-full flex items-center justify-center relative overflow-hidden group-hover:border-indigo-400 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {social === "twitter" && (
                  <svg
                    className="w-5 h-5 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                )}
                {social === "instagram" && (
                  <svg
                    className="w-5 h-5 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                )}
                {social === "facebook" && (
                  <svg
                    className="w-5 h-5 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-indigo-400/70 text-sm border-t border-indigo-500/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-indigo-300">Byte Studio</span> - All Rights
          Reserved.
        </div>
      </div>

      {/* Add custom keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(0) translateX(30px);
          }
          75% {
            transform: translateY(15px) translateX(15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
