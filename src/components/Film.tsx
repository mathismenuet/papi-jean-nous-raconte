import { useEffect, useRef, useState } from 'react';

export default function Film() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed) {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
              '*'
            );
            setHasPlayed(true);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <div id="film" className="w-full h-full aspect-video lg:aspect-auto flex-grow flex items-center justify-center bg-black relative overflow-hidden group">
      {/* Subtle loading skeleton/background */}
      <div className="absolute inset-0 bg-dark-green animate-pulse -z-10" />
      
      <iframe
        ref={iframeRef}
        id="main-video"
        src="https://www.youtube.com/embed/4kDQh68BVFU?rel=0&modestbranding=1&enablejsapi=1&vq=hd1080"
        title="Jean Paquet raconte son histoire à ses petits-enfants"
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
