import { Users } from 'lucide-react';

export default function FamilyTree() {
  return (
    <section id="genealogie" className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white relative border-t border-dark-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-heading-primary mb-6" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
            L'Arbre Généalogique
          </h2>
          <p className="text-body-green text-base sm:text-lg font-inter leading-relaxed max-w-2xl mx-auto">
            Voici les membres de la famille tels qu'ils étaient le jour du tournage, le 12 avril 2026. Un repère précieux pour se situer dans le temps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[800px] flex flex-col items-center">
            
            {/* Grand-parents */}
            <div className="flex items-center gap-12 mb-12 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-dark-green rounded-full flex items-center justify-center text-white shadow-xl shadow-dark-green/20 mb-4 border-4 border-white z-10">
                  <span className="text-2xl sm:text-3xl font-normal" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>JP</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-green">Jean Paquet</h3>
                <p className="text-body-green text-sm">Le Grand-père (81 ans)</p>
              </div>

              {/* Ligne d'union grand-parents */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-medium-dark-green/20 -z-0"></div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-bg-light border border-medium-dark-green/10 rounded-full flex items-center justify-center text-medium-dark-green mb-4 z-10">
                  <Users className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="text-xl font-semibold text-dark-green">Marie-Claude</h3>
                <p className="text-body-green text-sm">La Grand-mère</p>
              </div>
            </div>

            {/* Ligne verticale descendante principale */}
            <div className="w-[2px] h-12 bg-medium-dark-green/20 -mt-12 relative z-0"></div>
            {/* Ligne horizontale vers les enfants */}
            <div className="w-[400px] h-[2px] bg-medium-dark-green/20 relative z-0"></div>

            {/* Les enfants (Anne-Laure et Arnaud) */}
            <div className="flex justify-between w-[600px] mt-8 relative z-10">
              {/* Branche Anne-Laure */}
              <div className="flex flex-col items-center w-[200px]">
                {/* Ligne verticale montante */}
                <div className="w-[2px] h-8 bg-medium-dark-green/20 -mt-16 mb-8 absolute left-[100px] top-0 -z-10"></div>
                
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent-yellow/10 rounded-full flex items-center justify-center text-accent-yellow mb-4 border-2 border-white shadow-md">
                  <span className="text-xl sm:text-2xl font-semibold">AL</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-green">Anne-Laure</h3>
                <p className="text-body-green text-sm text-center">Fille</p>

                {/* Descendance Anne-Laure */}
                <div className="w-[2px] h-8 bg-medium-dark-green/20 my-4"></div>
                <div className="w-[160px] h-[2px] bg-medium-dark-green/20"></div>
                
                <div className="flex justify-between w-[200px] mt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-6 bg-medium-dark-green/20 -mt-12 mb-6"></div>
                    <div className="w-16 h-16 bg-bg-light rounded-full flex items-center justify-center text-dark-green text-sm font-semibold mb-2 shadow-sm border border-black/5">El</div>
                    <p className="text-sm font-medium text-dark-green">Eliott (9 ans)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-6 bg-medium-dark-green/20 -mt-12 mb-6"></div>
                    <div className="w-16 h-16 bg-bg-light rounded-full flex items-center justify-center text-dark-green text-sm font-semibold mb-2 shadow-sm border border-black/5">Ti</div>
                    <p className="text-sm font-medium text-dark-green">Timothée (6 ans)</p>
                  </div>
                </div>
              </div>

              {/* Branche Arnaud */}
              <div className="flex flex-col items-center w-[200px]">
                {/* Ligne verticale montante */}
                <div className="w-[2px] h-8 bg-medium-dark-green/20 -mt-16 mb-8 absolute right-[100px] top-0 -z-10"></div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent-yellow/10 rounded-full flex items-center justify-center text-accent-yellow mb-4 border-2 border-white shadow-md">
                  <span className="text-xl sm:text-2xl font-semibold">Ar</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-green">Arnaud</h3>
                <p className="text-body-green text-sm text-center">Fils</p>

                {/* Descendance Arnaud */}
                <div className="w-[2px] h-8 bg-medium-dark-green/20 my-4"></div>
                <div className="w-[160px] h-[2px] bg-medium-dark-green/20"></div>

                <div className="flex justify-between w-[200px] mt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-6 bg-medium-dark-green/20 -mt-12 mb-6"></div>
                    <div className="w-16 h-16 bg-bg-light rounded-full flex items-center justify-center text-dark-green text-sm font-semibold mb-2 shadow-sm border border-black/5">Ju</div>
                    <p className="text-sm font-medium text-dark-green">Juliette (4 ans)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-6 bg-medium-dark-green/20 -mt-12 mb-6"></div>
                    <div className="w-16 h-16 bg-bg-light rounded-full flex items-center justify-center text-dark-green text-sm font-semibold mb-2 shadow-sm border border-black/5">Ca</div>
                    <p className="text-sm font-medium text-dark-green">Camille (6 mois)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
