import React, { useState } from 'react';
import { ChevronRight, BrainCircuit, X } from 'lucide-react';

interface MindMapNodeData {
  id: string;
  label: string;
  children?: MindMapNodeData[];
}

const mindMapData: MindMapNodeData = {
  id: 'root',
  label: 'Histoire de Jean Paquet',
  children: [
    {
      id: 'famille',
      label: 'Famille et Vie Quotidienne',
      children: [
        { id: 'parents', label: 'Parents', children: [{ id: 'edmond', label: 'Edmond (papa)' }, { id: 'raymond', label: 'Raymond (maman)' }, { id: 'catherine', label: 'Catherine (petite sœur)' }] },
        { id: 'grandsparents', label: 'Grands-parents', children: [{ id: 'gp1', label: 'Cuisinaient pour la famille' }, { id: 'gp2', label: 'Jean vivait chez eux depuis tout petit' }] },
        { id: 'conditions', label: 'Conditions de vie', children: [{ id: 'cond1', label: 'Cuisine comme pièce chaude' }, { id: 'cond2', label: 'Pas de salle de bain ni frigo' }, { id: 'cond3', label: 'Toilettes au fond du jardin' }, { id: 'cond4', label: 'Collection de timbres' }] }
      ]
    },
    {
      id: 'ecole',
      label: "L'école d'autrefois",
      children: [
        { id: 'org', label: 'Organisation', children: [{ id: 'org1', label: 'Garçons et filles séparés' }, { id: 'org2', label: 'Maîtresses (Mme Baudry)' }] },
        { id: 'punitions', label: 'Punitions et Récompenses', children: [{ id: 'pun1', label: 'Bons points et images' }, { id: 'pun2', label: 'Billets d\'honneur et satisfaction' }, { id: 'pun3', label: 'Punition de la feuille contre le mur' }, { id: 'pun4', label: 'Le coin sous les arbres' }] },
        { id: 'recreation', label: 'Récréation', children: [{ id: 'rec1', label: 'Jeux de billes' }, { id: 'rec2', label: 'Jeux de ballon' }, { id: 'rec3', label: 'Copains de l\'école (Didier)' }] },
        { id: 'bonbons', label: 'Les bonbons', children: [{ id: 'bon1', label: 'Carambars et Malabars' }, { id: 'bon2', label: 'Roudoudous coquillages en sucre' }, { id: 'bon3', label: 'Bonbons à la fraise' }] }
      ]
    },
    {
      id: 'jeux',
      label: 'Jeux et loisirs',
      children: [
        { id: 'interieur', label: 'Jeux d\'intérieur', children: [{ id: 'int1', label: 'Jeu du nain jaune' }, { id: 'int2', label: 'Jeu de l\'oie' }, { id: 'int3', label: 'Pas de cinéma ni télé' }] },
        { id: 'exterieur', label: 'Activités d\'extérieur', children: [{ id: 'ext1', label: 'Balançoire' }, { id: 'ext2', label: 'Vélo dans le quartier' }, { id: 'ext3', label: 'Ballon' }] }
      ]
    },
    {
      id: 'camping',
      label: 'Vacances au Camping',
      children: [
        { id: 'camp1', label: 'Un mois de camping dans le Berry' },
        { id: 'camp2', label: 'Baignades dans la rivière' },
        { id: 'camp3', label: 'Courses de vélo' },
        { id: 'camp4', label: 'Cuisiner sans frigo avec camions' }
      ]
    },
    {
      id: 'voyages',
      label: 'Voyages et Aventures',
      children: [
        { id: 'voy1', label: 'Premières expériences', children: [{ id: 'v1a', label: 'Avion pour coqueluche' }] },
        { id: 'voy2', label: 'Expéditions lointaines', children: [{ id: 'v2a', label: 'Antarctique, Mont Blanc' }] },
        { id: 'voy3', label: 'Rencontres marquantes', children: [{ id: 'v3a', label: 'Moine nu dans la glace au Népal' }] },
        { id: 'voy4', label: 'Découvertes culinaires', children: [{ id: 'v4a', label: 'Fourmis, crocodile, cervelle' }] }
      ]
    },
    {
      id: 'techno',
      label: 'Évolution Technologique',
      children: [
        { id: 'tech1', label: 'Pas de télévision ni téléphone portable' },
        { id: 'tech2', label: 'Premier ordinateur énorme à l\'université' },
        { id: 'tech3', label: 'Premier téléphone portable à 50 ans' },
        { id: 'tech4', label: 'Intelligence artificielle (récemment)' }
      ]
    },
    {
      id: 'sagesse',
      label: 'Sagesse et Conseils',
      children: [
        { id: 'sag1', label: 'Secret du bonheur : faire ce dont on a envie' },
        { id: 'sag2', label: 'Se donner les moyens de le faire' },
        { id: 'sag3', label: 'Toujours continuer d\'apprendre' },
        { id: 'sag4', label: 'Garder un esprit positif' },
        { id: 'sag5', label: 'Créer des souvenirs pour le futur' }
      ]
    }
  ]
};

const MindMapNode: React.FC<{ node: MindMapNodeData, isRoot?: boolean, onCloseAll?: () => void }> = ({ node, isRoot = false, onCloseAll }) => {
  const [isOpen, setIsOpen] = useState(isRoot);

  const hasChildren = node.children && node.children.length > 0;

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isRoot && isOpen && onCloseAll) {
      onCloseAll();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`flex items-start ${isRoot ? '' : 'mindmap-node-wrapper'}`}>
      <div className="relative z-10 flex items-center h-full">
        <button
          onClick={toggleOpen}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-sm
            ${isRoot 
              ? 'bg-heading-primary text-white hover:bg-button-hover shadow-md text-base sm:text-lg' 
              : hasChildren
                ? 'bg-bg-light border border-medium-dark-green/20 text-dark-green hover:border-heading-accent hover:bg-white'
                : 'bg-white border border-black/5 text-body-green hover:shadow-md'
            }
          `}
        >
          {isRoot && <BrainCircuit className="w-5 h-5 text-accent-yellow" />}
          <span className="whitespace-nowrap">{node.label}</span>
          {hasChildren && (
            <span className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-heading-accent' : 'text-body-green/60'}`}>
              <ChevronRight className="w-4 h-4" />
            </span>
          )}
          {isRoot && isOpen && (
            <span className="ml-2 pl-2 border-l border-white/20">
              <X className="w-4 h-4 hover:scale-110 transition-transform" />
            </span>
          )}
        </button>
      </div>

      {hasChildren && (
        <div 
          className={`ml-6 transition-all duration-500 origin-left overflow-hidden
            ${isOpen ? 'opacity-100 max-w-[2000px] max-h-[2000px] scale-100' : 'opacity-0 max-w-0 max-h-0 scale-95'}
          `}
        >
          <ul className="flex flex-col gap-3 py-2 mindmap-children-container">
            {node.children!.map((child) => (
              <li key={child.id} className="relative">
                <MindMapNode node={child} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function InteractiveMindMap() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 bg-white border-t border-medium-dark-green/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {!isActive ? (
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-normal text-heading-primary mb-6" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
              La carte mentale des souvenirs
            </h2>
            <button
              onClick={() => setIsActive(true)}
              className="group inline-flex items-center gap-3 bg-white border border-medium-dark-green/20 hover:border-heading-accent text-dark-green px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <BrainCircuit className="w-6 h-6 text-heading-accent group-hover:scale-110 transition-transform" />
              <span className="font-medium text-lg font-inter">Explorer la Mind Map</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center overflow-x-auto pb-12 pt-4 animate-fade-in scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <div className="min-w-max p-4">
               <MindMapNode node={mindMapData} isRoot={true} onCloseAll={() => setIsActive(false)} />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
