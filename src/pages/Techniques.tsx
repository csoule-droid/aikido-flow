import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  CircleDot, 
  Play,
  ArrowRight,
  Star,
  Layers
} from "lucide-react";

const levels = [
  { name: "Débutant", color: "bg-green-500", description: "6e au 4e kyu" },
  { name: "Intermédiaire", color: "bg-secondary", description: "3e au 1er kyu" },
  { name: "Avancé", color: "bg-primary", description: "Dan (ceinture noire)" },
];

const techniques = [
  {
    name: "Shihonage",
    japanese: "四方投げ",
    meaning: "Projection dans les quatre directions",
    level: "Débutant",
    href: "/techniques/shihonage",
    description: "Une des techniques fondamentales où le partenaire est projeté par une rotation du bras.",
  },
  {
    name: "Ikkyo",
    japanese: "一教",
    meaning: "Première technique",
    level: "Débutant",
    href: "/techniques/ikkyo",
    description: "Contrôle du bras menant à une immobilisation au sol. Base de nombreuses variations.",
  },
  {
    name: "Iriminage",
    japanese: "入り身投げ",
    meaning: "Projection en entrant",
    level: "Débutant",
    href: "/techniques/iriminage",
    description: "Entrer dans l'attaque pour déséquilibrer et projeter le partenaire.",
  },
  {
    name: "Kotegaeshi",
    japanese: "小手返し",
    meaning: "Retournement du poignet",
    level: "Intermédiaire",
    href: "/techniques/kotegaeshi",
    description: "Projection par rotation du poignet. Technique élégante et efficace.",
  },
  {
    name: "Ukemi",
    japanese: "受け身",
    meaning: "Réception du corps (chutes)",
    level: "Débutant",
    href: "/techniques/ukemi",
    description: "L'art de chuter en sécurité. Essentiel pour progresser en aïkido.",
  },
  {
    name: "Tai Sabaki",
    japanese: "体捌き",
    meaning: "Déplacements du corps",
    level: "Débutant",
    href: "/techniques/tai-sabaki",
    description: "Les mouvements de base : tenkan (pivot), irimi (entrée), et leurs combinaisons.",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Débutant": return "bg-green-500/10 text-green-600 border-green-500/20";
    case "Intermédiaire": return "bg-secondary/10 text-secondary border-secondary/20";
    case "Avancé": return "bg-primary/10 text-primary border-primary/20";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Techniques() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <CircleDot className="w-4 h-4" />
              <span>Page pilier</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Techniques & <span className="gradient-text">Pratique</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'aïkido comprend un vaste répertoire de techniques. Ici, nous présentons les mouvements 
              fondamentaux que tout débutant apprendra. Chaque fiche détaille le mouvement, 
              ses points clés et les erreurs à éviter.
            </p>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Les <span className="gradient-text">niveaux</span> de pratique
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {levels.map((level) => (
              <div key={level.name} className="flex items-center gap-3 bg-card rounded-full px-5 py-3 shadow-sm">
                <div className={`w-3 h-3 rounded-full ${level.color}`} />
                <div>
                  <span className="font-semibold">{level.name}</span>
                  <span className="text-muted-foreground text-sm ml-2">{level.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-6 max-w-2xl">
            <div className="flex items-start gap-3">
              <Layers className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Progression en aïkido</h3>
                <p className="text-sm text-muted-foreground">
                  En aïkido, on progresse par grades (kyu puis dan). Les kyu vont de 6e (débutant) à 1er kyu, 
                  puis on passe au 1er dan (ceinture noire). Le passage de grade évalue la maîtrise technique, 
                  mais aussi l'attitude et la compréhension des principes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques grid */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Fiches <span className="gradient-text">techniques</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech) => (
              <Link
                key={tech.name}
                to={tech.href}
                className="group card-elevated p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">{tech.japanese}</div>
                    <h3 className="font-bold text-lg">{tech.name}</h3>
                    <p className="text-sm text-secondary font-medium">{tech.meaning}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                  Voir la fiche <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Vidéos à venir</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des vidéos pédagogiques seront bientôt disponibles pour illustrer chaque technique. 
              En attendant, les fiches détaillées vous guident pas à pas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto text-center">
          <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un glossaire ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Retrouvez tous les termes japonais de l'aïkido dans notre section ressources.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/ressources">
              Voir les ressources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
