export default function Process() {
  return (
    <section id="demarche" className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-heading-primary mb-12 sm:mb-16 text-center" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
          La démarche derrière ce projet
        </h2>
        
        <div className="relative">
          {/* Decorative element */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-heading-accent/50 to-transparent" />
          
          <div className="space-y-8 sm:space-y-12 sm:pl-10">
            <p className="text-lg sm:text-xl md:text-2xl text-dark-green leading-relaxed font-inter font-light">
              Ce projet a été imaginé et co-construit pour recueillir et transmettre l'histoire de Jean. 
              Les questions ont été préparées avec soin, en pensant à ce qu'il souhaitait laisser à ses petits-enfants.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-dark-green leading-relaxed font-inter font-light">
              Mon rôle a été d'accompagner la famille dans cette démarche, de faciliter l'entretien
              pour que l’échange se déroule de manière fluide, spontanée et mémorable.
            </p>
            
            <div className="p-8 sm:p-10 bg-bg-light rounded-3xl mt-12 border border-medium-dark-green/5">
              <p className="text-lg sm:text-xl text-heading-primary leading-relaxed font-inter font-medium italic">
                "Ce type d’entretien est bien plus qu’une simple captation vidéo. C’est un moment de
                transmission, un dialogue entre générations, une manière de prendre le temps de se
                dire des choses qu’on ne dit pas toujours dans le quotidien."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
