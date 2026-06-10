export default function Film() {
  return (
    <div id="film" className="w-full h-full aspect-video lg:aspect-auto flex-grow flex items-center justify-center bg-black relative overflow-hidden group">
      {/* Subtle loading skeleton/background */}
      <div className="absolute inset-0 bg-dark-green animate-pulse -z-10" />
      
      <iframe
        id="main-video"
        src="https://www.youtube.com/embed/mJa228TXLiM?rel=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&vq=hd1080"
        title="Jean Paquet raconte son histoire à ses petits-enfants"
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
