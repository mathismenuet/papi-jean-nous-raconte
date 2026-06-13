import { useCallback } from 'react';
import { Cloud, Play } from 'lucide-react';

const CHAPTER_GROUPS = [
  {
    title: "🎬 Introduction & Extraits",
    chapters: [
      { time: "00:00", seconds: 0, title: "Teaser / Bêtisier", text: "Extraits du tournage." },
      { time: "01:40", seconds: 100, title: "🎙️ Le début de l'histoire", text: "Pourquoi garder une trace pour vous." },
    ]
  },
  {
    title: "🏫 L'école de Papi",
    chapters: [
      { time: "02:48", seconds: 168, title: "L'école d'autrefois", text: "Les maîtresses (Mme Baudry), les bons points et les carnets." },
      { time: "04:45", seconds: 285, title: "👧 Les copains", text: "Didier, et la séparation garçons/filles." },
      { time: "06:03", seconds: 363, title: "⚽ La cour de récréation", text: "Le ballon et les billes." },
      { time: "06:45", seconds: 405, title: "❌ Les punitions sévères", text: "Au coin et la feuille de papier au mur." },
      { time: "07:56", seconds: 476, title: "🍬 La sortie de l'école", text: "La compétition pour les bonbons." },
      { time: "08:58", seconds: 538, title: "🍭 Les bonbons cultes", text: "Carambars, Roudoudous et Malabars." },
    ]
  },
  {
    title: "🏡 L'enfance de Jean",
    chapters: [
      { time: "10:37", seconds: 637, title: "📝 Le retour à la maison", text: "Les devoirs et les leçons." },
      { time: "11:38", seconds: 698, title: "👨‍👩‍👧 La famille", text: "Edmond, Raymond et Catherine la petite sœur." },
      { time: "13:22", seconds: 802, title: "🎲 Les jeux partagés", text: "Jeu de l'oie et Nain jaune." },
      { time: "14:05", seconds: 845, title: "👵 Chez grand-mère", text: "Les parents commerçants trop occupés." },
      { time: "16:15", seconds: 975, title: "🛏️ La maison d'autrefois", text: "Cuisine au chaud et toilettes au fond du jardin." },
      { time: "18:07", seconds: 1087, title: "🏕️ Les vacances d'été", text: "Le camping dans le Berry et copains à la rivière." },
      { time: "20:37", seconds: 1237, title: "❄️ La vie matérielle", text: "Pas de frigo et conservation dans la cave." },
      { time: "21:34", seconds: 1294, title: "📺 Les soirées", text: "Le cinéma et la télévision inexistants au début." },
      { time: "22:20", seconds: 1340, title: "☎️ La communication", text: "La vie sans téléphone portable, le pouvoir des lettres." },
      { time: "23:31", seconds: 1411, title: "✉️ Une passion instructive", text: "La grande collection de timbres." },
    ]
  },
  {
    title: "🌍 Les voyages",
    chapters: [
      { time: "24:12", seconds: 1452, title: "🧭 Voyages extraordinaires", text: "Du rêve d'igloo aux réalités de l'âge adulte." },
      { time: "25:06", seconds: 1506, title: "🏔️ Les grandes ascensions", text: "Et l'Antarctique (mais pas d'ours blancs !)." },
      { time: "26:20", seconds: 1580, title: "🕷️ Nourritures bizarres", text: "Du crocodile aux fourmis au citron." },
      { time: "27:19", seconds: 1639, title: "✈️ Le premier vol", text: "Un petit coucou pour soigner la coqueluche." },
      { time: "28:53", seconds: 1733, title: "🙏 Les rencontres", text: "Le moine nu dans la glace au Népal." },
      { time: "30:34", seconds: 1834, title: "🐂 L'anecdote drôle", text: "L'attaque du taureau sur la plage." },
    ]
  },
  {
    title: "❓ Les devinettes de Papi Jean VRAI ou FAUX",
    chapters: [
      { time: "32:13", seconds: 1933, title: "❓ Vrai ou Faux", text: "Les règles du jeu." },
      { time: "32:37", seconds: 1957, title: "🧠 Pour être intelligent", text: "Manger de la cervelle d'agneau." },
      { time: "33:20", seconds: 2000, title: "💻 Le premier ordinateur", text: "Qui prenait toute une pièce !" },
      { time: "35:08", seconds: 2108, title: "🚲 L'accident de vélo", text: "Le bras cassé par gourmandise avant le permis." },
    ]
  },
  {
    title: "💡 Mes conseils pour mes petits enfants",
    chapters: [
      { time: "36:49", seconds: 2209, title: "🧠 Toujours apprendre", text: "La philosophie de Jean face à l'IA." },
      { time: "37:37", seconds: 2257, title: "💛 Le secret du bonheur", text: "Se donner les moyens de ses rêves." },
      { time: "39:17", seconds: 2357, title: "✨ Les vœux de Papy", text: "Pour Eliott, Timothée, Juliette et Camille." },
      { time: "40:38", seconds: 2438, title: "🎬 Le mot de la fin", text: "Conclusion." }
    ]
  }
];

export default function ChaptersTimeline() {
  const seekVideo = useCallback((seconds: number) => {
    const iframe = document.getElementById('main-video') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds, true] }),
        '*'
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
    }
  }, []);

  return (
    <div id="chapitres" className="w-full py-8 sm:py-16 px-4 sm:px-10 lg:px-12 bg-[#fdfbf7] relative overflow-hidden h-full">
      
      {/* Decorative Clouds */}
      <div className="absolute top-20 right-[-5%] opacity-20 animate-float pointer-events-none">
        <Cloud size={140} className="text-medium-dark-green fill-medium-dark-green" strokeWidth={1} />
      </div>
      <div className="absolute top-[30%] left-[-5%] opacity-10 animate-float-delayed pointer-events-none">
        <Cloud size={180} className="text-dark-green fill-dark-green" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[20%] right-[5%] opacity-15 animate-float pointer-events-none">
        <Cloud size={110} className="text-accent-yellow fill-accent-yellow" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[5%] left-[2%] opacity-20 animate-float-delayed pointer-events-none">
        <Cloud size={130} className="text-medium-dark-green fill-medium-dark-green" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-heading-primary mb-2" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
            Papi Jean nous raconte
          </h2>
          <p className="text-body-green text-base sm:text-lg font-inter leading-relaxed mb-4 max-w-3xl">
            (ses souvenirs, ses histoires, sa vie) à ses petits-enfants (Eliott, Timothée et Juliette). Un échange intergénérationnel spontané et joyeux, façon "Père Castor", pour transmettre la curiosité, la simplicité et le goût de l'aventure aux générations futures.
          </p>
          <p className="text-body-green text-sm font-inter leading-relaxed opacity-80">
            Parcourez les anecdotes racontées aux enfants. Cliquez sur un souvenir pour lancer la vidéo au bon moment.
          </p>
        </div>

        <div className="relative border-l-2 border-medium-dark-green/20 ml-4 sm:ml-6 pb-12">
          {CHAPTER_GROUPS.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">
              
              {/* Group Header (Grand Chapitre) */}
              <div className="relative pl-8 sm:pl-12 pt-4 pb-4 sm:pt-6 sm:pb-6">
                {/* Large Timeline dot for group */}
                <div className="absolute -left-[14px] top-[22px] sm:top-[30px] w-7 h-7 rounded-full bg-heading-primary border-4 border-[#fdfbf7] flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h3 className="text-xl sm:text-3xl font-normal text-heading-primary" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>
                  {group.title}
                </h3>
              </div>

              {/* Chapters list */}
              <div className="space-y-6">
                {group.chapters.map((chapter, index) => (
                  <div key={index} className="relative pl-8 sm:pl-12 group">
                    {/* Small Timeline dot */}
                    <div className="absolute -left-[7px] top-6 w-3 h-3 rounded-full border-2 border-white bg-medium-dark-green/40 group-hover:bg-heading-accent group-hover:scale-125 transition-all duration-300 z-10" />
                    
                    {/* Chapter Card */}
                    <button 
                      onClick={() => seekVideo(chapter.seconds)}
                      className="block w-full text-left bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group-hover:border-heading-accent/20"
                    >
                      {/* Play icon overlay on hover */}
                      <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500 text-heading-accent pointer-events-none">
                        <Play className="w-8 h-8 fill-current opacity-15" />
                      </div>

                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-heading-accent/10 text-heading-primary mb-2 sm:mb-3 font-inter transition-colors duration-300 group-hover:bg-heading-accent group-hover:text-white">
                        {chapter.time}
                      </span>
                      
                      <h4 className="text-base sm:text-xl font-normal mb-1 sm:mb-2 text-dark-green group-hover:text-heading-accent transition-colors duration-300 pr-8" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>
                        {chapter.title}
                      </h4>
                      
                      <p className="text-xs sm:text-sm text-body-green/80 font-inter leading-relaxed max-w-[90%]">
                        {chapter.text}
                      </p>
                    </button>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
