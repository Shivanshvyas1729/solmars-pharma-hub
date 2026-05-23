import { ResolvedMedia } from "@/api/media-resolver";

interface AdvancedMediaProps {
  media: ResolvedMedia;
  alt?: string;
  className?: string;
}

export function AdvancedMedia({ media, alt, className = "" }: AdvancedMediaProps) {
  if (!media || !media.src) return null;

  if (media.type === 'youtube' || media.type === 'vimeo') {
    return (
      <iframe
        src={media.src}
        className={`${className} border-0 pointer-events-none`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={alt || "Video background"}
      />
    );
  }

  if (media.type === 'video') {
    return (
      <video
        src={media.src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      src={media.src}
      alt={alt || "Media image"}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}
