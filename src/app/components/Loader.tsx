"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LoaderProps {
  onLoadingComplete?: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Notify parent that loading is complete
      if (onLoadingComplete) {
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Wait for loader fade out animation
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`preloader ${
        isLoading ? "h-screen" : "h-0"
      } transition-all duration-500 ease-in-out`}
      style={{ display: isLoading ? "flex" : "none" }}
    >
      <div
        className={`logo-container flex items-center justify-center ${
          isLoading ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <Image
          alt="logo"
          loading="lazy"
          width={250}
          height={250}
          decoding="async"
          className="text-transparent"
          src="/brand-transparent.png"
        />
      </div>
    </div>
  );
}
