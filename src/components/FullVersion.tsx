import { ExternalLink } from 'lucide-react';

export default function FullVersion() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-bg-light">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-normal text-heading-primary mb-4" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
              Version complète
            </h2>
            <p className="text-body-green text-base sm:text-lg font-inter">
              Pour celles et ceux qui souhaitent revivre l’interview dans son intégralité.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=LIIzHxx70iQ" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-semibold text-medium-dark-green hover:text-dark-green transition-colors font-inter py-2"
          >
            <span className="border-b border-medium-dark-green/30 group-hover:border-dark-green transition-colors pb-0.5">Ouvrir la vidéo complète</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        <div className="relative w-full aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden bg-dark-green/5 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/LIIzHxx70iQ?rel=0&modestbranding=1"
            title="Interview complète de Christian"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
