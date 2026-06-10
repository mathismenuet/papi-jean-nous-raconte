import { Film, Headphones, Image as ImageIcon, FileText, FolderOpen, ExternalLink } from 'lucide-react';

export default function Downloads() {
  const assets = [
    {
      id: 'film',
      icon: <Film className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Vidéo HD',
      description: 'Le film complet en haute qualité pour votre télévision ou ordinateur.',
      format: 'MP4',
      link: 'https://drive.google.com/drive/folders/1ToabHkYm0lR6G8YzoWg-ly6GY6EJxK-3?usp=sharing'
    },
    {
      id: 'audio',
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Audio Podcast',
      description: 'L’entretien au format audio pour l\'écouter partout, comme un podcast.',
      format: 'MP3',
      link: 'https://drive.google.com/drive/folders/1ToabHkYm0lR6G8YzoWg-ly6GY6EJxK-3?usp=sharing'
    },
    {
      id: 'photos',
      icon: <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Photographies',
      description: 'Les portraits réalisés le jour du tournage en haute définition.',
      format: 'JPEG',
      link: 'https://drive.google.com/drive/folders/1ToabHkYm0lR6G8YzoWg-ly6GY6EJxK-3?usp=sharing'
    },
    {
      id: 'transcription',
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Transcription',
      description: 'Livre numérique (PDF) reprenant l\'intégralité des échanges de la vidéo.',
      format: 'PDF',
      link: 'https://drive.google.com/drive/folders/1ToabHkYm0lR6G8YzoWg-ly6GY6EJxK-3?usp=sharing'
    },
    {
      id: 'genealogie',
      icon: <FolderOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Arbre Généalogique',
      description: 'Les documents et archives ayant servi à la préparation de l\'entretien.',
      format: 'Dossier',
      link: 'https://drive.google.com/drive/folders/1ToabHkYm0lR6G8YzoWg-ly6GY6EJxK-3?usp=sharing'
    }
  ];

  return (
    <section id="downloads" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-neue text-dark-green tracking-tight mb-6">
            Ressources et Fichiers
          </h2>
          <p className="text-lg text-medium-dark-green/70 max-w-2xl mx-auto font-inter">
            Retrouvez tous les éléments livrables de votre projet, accessibles depuis ce dossier sécurisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, index) => (
            <a 
              key={index}
              href={asset.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 sm:p-8 rounded-2xl bg-bg-light/50 border border-dark-green/5 hover:border-accent-yellow/30 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-accent-yellow/10 text-accent-yellow flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent-yellow group-hover:text-white">
                    {asset.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-medium-dark-green/20 group-hover:text-accent-yellow transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-neue text-dark-green mb-3 group-hover:text-accent-yellow transition-colors">
                  {asset.title}
                </h3>
                
                <p className="text-medium-dark-green/70 text-sm mb-6 flex-grow font-inter leading-relaxed">
                  {asset.description}
                </p>
                
                <div className="pt-4 border-t border-dark-green/5 flex items-center justify-between text-xs font-medium text-medium-dark-green/40 uppercase tracking-wider">
                  <span>{asset.format}</span>
                  <span className="flex items-center gap-1 group-hover:text-accent-yellow transition-colors">
                    Télécharger
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://drive.google.com/drive/folders/1ToabHkYm0lR6G8YzoWg-ly6GY6EJxK-3?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-dark-green text-white rounded-full font-neue text-lg hover:bg-dark-green/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            Accéder au dossier complet
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
