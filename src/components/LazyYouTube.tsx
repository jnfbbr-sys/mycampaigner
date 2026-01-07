import { useState } from "react";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
}

const LazyYouTube = ({ videoId, title }: LazyYouTubeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative aspect-video bg-black rounded-[28px] overflow-hidden">
      {!isLoaded ? (
        <button
          onClick={loadVideo}
          className="relative w-full h-full group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default LazyYouTube;
