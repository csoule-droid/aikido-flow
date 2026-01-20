import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  CircleDot, 
  Play,
  ArrowRight,
  Star,
  Layers,
  Sword,
  Hand,
  BookOpen
} from "lucide-react";

const levels = [
  { name: "Débutant", color: "bg-green-500", description: "6e au 4e kyu" },
  { name: "Intermédiaire", color: "bg-secondary", description: "3e au 1er kyu" },
  { name: "Avancé", color: "bg-primary", description: "Dan (ceinture noire)" },
];

// Coups (Atemi)
const coups = [
  { name: "Shomen uchi", japanese: "正面打ち", description: "Frappe verticale du sommet de la tête avec le tranchant de la main" },
  { name: "Yokomen uchi", japanese: "横面打ち", description: "Frappe de biais sur la tempe avec le tranchant de la main" },
  { name: "Sokumen uchi", japanese: "側面打ち", description: "Comme la précédente mais croisée ; cette attaque est impressionnante mais en fait moins difficile à contrôler" },
  { name: "Chūdan tsuki", japanese: "中段突き", description: "Coup de poing direct à l'abdomen" },
  { name: "Jodan tsuki", japanese: "上段突き", description: "Coup de poing direct à la trachée" },
  { name: "Mae geri", japanese: "前蹴り", description: "Coup de pied frontal à l'abdomen" },
  { name: "Mawashi geri", japanese: "回し蹴り", description: "Coup de pied circulaire" },
];

// Saisies (Dori)
const saisies = [
  { name: "Katate dori", japanese: "片手取り", description: "Saisie d'un poignet avec une main. Très fréquemment utilisé pour les premiers cours car elle fixe une bonne distance de base (ma-ai) et donne le contact initial." },
  { name: "Ryote dori", japanese: "両手取り", description: "Saisie des deux poignets. Cette symétrie n'existe pas au niveau des pieds, d'où des conséquences variables selon la technique." },
  { name: "Morote dori", japanese: "諸手取り", description: "Saisie d'un poignet avec les deux mains. Uke se trouve à l'extérieur de tori avec une saisie très forte." },
  { name: "Kata dori", japanese: "肩取り", description: "Saisie de l'épaule du keikogi à l'aide d'une seule main. La saisie doit être ferme, pour pousser ou tirer tori." },
  { name: "Ryo kata dori", japanese: "両肩取り", description: "Saisie de face du keikogi au niveau des deux épaules. C'est une des attaques pour le randori." },
  { name: "Sode dori", japanese: "袖取り", description: "Saisie de la manche de tori au niveau du coude. Distance et mobilité intermédiaires entre Katate dori et Kata dori." },
  { name: "Muna dori", japanese: "胸取り", description: "Saisie de la doublure du keikogi à une main ou à deux mains." },
  { name: "Kata dori men uchi", japanese: "肩取り面打ち", description: "Uke saisit d'une main l'épaule et de l'autre tente de frapper au sommet de la tête." },
  { name: "Ushiro ryote dori", japanese: "後ろ両手取り", description: "Uke saisit les deux poignets de tori en passant derrière lui. Réaction à un contre de tori." },
  { name: "Ushiro ryo kata dori", japanese: "両肩取り", description: "Saisie du keikogi au niveau des deux épaules en passant par l'arrière." },
  { name: "Eri dori", japanese: "襟取り", description: "Saisie du col par l'arrière. Le col est saisi indifféremment avec l'une ou l'autre des deux mains." },
];

// Les 5 principes fondamentaux
const principes = [
  { 
    name: "Ikkyo", 
    japanese: "一教", 
    meaning: "Premier principe",
    description: "Clef de bras permettant d'amener uke au sol en contrôlant le poignet et en faisant faire un arc de cercle au coude en direction de la tête. Tout le mouvement est identique à celui d'une coupe au sabre.",
    forms: ["Omote : tori avance en direction de uke (irimi) et effectue un mouvement de coupe de sabre", "Ura : tori effectue un mouvement de coupe sur place puis pivote (tenkan)"]
  },
  { 
    name: "Nikyo", 
    japanese: "二教", 
    meaning: "Deuxième principe",
    description: "Technique d'immobilisation reposant sur une triple torsion du poignet de uke. Variation subtile sur Ikkyo destinée à briser la résistance d'un uke insuffisamment déséquilibré.",
    forms: []
  },
  { 
    name: "Sankyo", 
    japanese: "三教", 
    meaning: "Troisième principe",
    description: "Technique d'immobilisation reposant sur la torsion du poignet en hyper-pronation, également appelée kote hineri (torsion du poignet). Réalisable sur saisies ou frappes, elle peut être une continuité de ikkyo.",
    forms: []
  },
  { 
    name: "Yonkyo", 
    japanese: "四教", 
    meaning: "Quatrième principe",
    description: "Repose sur le contrôle du poignet de uke, couplé à une pression forte avec le pouce sur son nerf radial. Technique redoutable pour uke qui nécessite une attention particulière de la part de tori.",
    forms: []
  },
  { 
    name: "Gokyo", 
    japanese: "五教", 
    meaning: "Cinquième principe",
    description: "Technique d'immobilisation utilisant une compression de l'avant-bras bloqué par la main retournée, paume vers le haut. D'une grande efficacité contre les attaques au couteau. Début équivalent à ikkyō.",
    forms: []
  },
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

      {/* Les 5 principes fondamentaux */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Les cinq <span className="gradient-text">principes fondamentaux</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les cinq principes fondamentaux sous-tendent nombre de techniques en aïkido. 
              Ils sont déclinés selon la posture et l'attaque, et reflètent les principes philosophiques de la discipline.
            </p>
            <div className="mt-4 bg-muted/50 rounded-xl p-4 max-w-xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Aïkido (合気道)</strong> : la voie (道 dō) de l'harmonie (合 ai) avec l'énergie (気 ki). 
                Art martial japonais fondé par Morihei Ueshiba.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principes.map((principe, index) => (
              <div
                key={principe.name}
                className="card-elevated p-6 hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">{principe.japanese}</div>
                    <h3 className="font-bold">{principe.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-secondary font-medium mb-2">{principe.meaning}</p>
                <p className="text-sm text-muted-foreground mb-3">{principe.description}</p>
                {principe.forms.length > 0 && (
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {principe.forms.map((form, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                        <span>{form}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coups (Atemi) */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sword className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Coups : <span className="gradient-text">Atemi</span>
              </h2>
              <p className="text-muted-foreground">Les frappes utilisées en aïkido</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coups.map((coup) => (
              <div
                key={coup.name}
                className="bg-card rounded-xl p-5 shadow-sm border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">{coup.japanese}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{coup.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{coup.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saisies (Dori) */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Hand className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Saisies : <span className="gradient-text">Dori</span>
              </h2>
              <p className="text-muted-foreground">Les différentes prises utilisées en aïkido</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {saisies.map((saisie) => (
              <div
                key={saisie.name}
                className="bg-card rounded-xl p-5 shadow-sm border border-border/50"
              >
                <div className="text-xl font-bold text-secondary mb-1">{saisie.japanese}</div>
                <h3 className="font-bold">{saisie.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{saisie.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-muted/50">
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

          <div className="bg-card rounded-2xl p-6 max-w-2xl shadow-sm">
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

      {/* Fiches techniques */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Fiches <span className="gradient-text">techniques</span>
              </h2>
              <p className="text-muted-foreground">Techniques détaillées avec points clés</p>
            </div>
          </div>
          
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
      <section className="section-padding bg-muted/50">
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
      <section className="section-padding bg-background">
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
