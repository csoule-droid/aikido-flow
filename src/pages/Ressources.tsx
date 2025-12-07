import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Download,
  ChevronRight,
  ArrowRight,
  Search
} from "lucide-react";
import { useState } from "react";

const glossary = [
  { term: "Ai", reading: "あい", meaning: "Harmonie, union" },
  { term: "Aikido", reading: "合気道", meaning: "La voie de l'harmonie des énergies" },
  { term: "Aikidoka", reading: "合気道家", meaning: "Pratiquant d'aïkido" },
  { term: "Atemi", reading: "当て身", meaning: "Frappe au corps" },
  { term: "Bokken", reading: "木剣", meaning: "Sabre en bois" },
  { term: "Do", reading: "道", meaning: "La voie, le chemin" },
  { term: "Dojo", reading: "道場", meaning: "Lieu de pratique" },
  { term: "Gi / Keikogi", reading: "稽古着", meaning: "Tenue d'entraînement" },
  { term: "Hakama", reading: "袴", meaning: "Pantalon large traditionnel (grades avancés)" },
  { term: "Irimi", reading: "入り身", meaning: "Entrer, pénétrer" },
  { term: "Jo", reading: "杖", meaning: "Bâton court" },
  { term: "Kamae", reading: "構え", meaning: "Posture, garde" },
  { term: "Ki", reading: "氣", meaning: "Énergie vitale" },
  { term: "Kokyu", reading: "呼吸", meaning: "Respiration, souffle" },
  { term: "Ma-ai", reading: "間合い", meaning: "Distance correcte" },
  { term: "Nage", reading: "投げ", meaning: "Projection / celui qui projette" },
  { term: "Omote", reading: "表", meaning: "Face avant (version directe)" },
  { term: "Randori", reading: "乱取り", meaning: "Pratique libre contre plusieurs attaquants" },
  { term: "Rei", reading: "礼", meaning: "Salut, respect" },
  { term: "Seiza", reading: "正座", meaning: "Position assise à genoux" },
  { term: "Sensei", reading: "先生", meaning: "Professeur, maître" },
  { term: "Shomen", reading: "正面", meaning: "Face avant / attaque verticale à la tête" },
  { term: "Suwari waza", reading: "座り技", meaning: "Techniques à genoux" },
  { term: "Tachi waza", reading: "立ち技", meaning: "Techniques debout" },
  { term: "Tai sabaki", reading: "体捌き", meaning: "Mouvement du corps, déplacement" },
  { term: "Tanto", reading: "短刀", meaning: "Couteau en bois" },
  { term: "Tatami", reading: "畳", meaning: "Tapis de sol" },
  { term: "Tenkan", reading: "転換", meaning: "Pivot, rotation" },
  { term: "Uke", reading: "受け", meaning: "Celui qui attaque et reçoit la technique" },
  { term: "Ukemi", reading: "受け身", meaning: "Chute, réception du corps" },
  { term: "Ura", reading: "裏", meaning: "Face arrière (version en pivot)" },
  { term: "Yokomen", reading: "横面", meaning: "Attaque latérale à la tête" },
  { term: "Zanshin", reading: "残心", meaning: "Vigilance maintenue après la technique" },
];

const guides = [
  {
    title: "Guide du Keikogi",
    description: "Comment choisir, porter et entretenir votre tenue.",
    href: "/commencer/equipement",
  },
  {
    title: "Lexique du débutant",
    description: "Les 20 mots essentiels pour votre premier cours.",
    href: "/commencer/lexique",
  },
  {
    title: "Mouvements fondamentaux",
    description: "Les déplacements de base : irimi, tenkan, tai sabaki.",
    href: "/techniques/tai-sabaki",
  },
];

export default function Ressources() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredGlossary = glossary.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Page pilier</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="gradient-text">Ressources</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Glossaire, guides pratiques et références pour approfondir votre compréhension 
              de l'aïkido. Tout ce dont vous avez besoin pour accompagner votre progression.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold">
              Glossaire <span className="gradient-text">japonais</span>
            </h2>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un terme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGlossary.map((item) => (
              <div key={item.term} className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-lg">{item.term}</span>
                  <span className="text-primary text-sm">{item.reading}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.meaning}</p>
              </div>
            ))}
          </div>
          
          {filteredGlossary.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Aucun terme trouvé pour "{searchTerm}"
            </div>
          )}
        </div>
      </section>

      {/* Guides */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Guides <span className="gradient-text">pratiques</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                to={guide.href}
                className="group card-elevated p-6 hover-lift"
              >
                <h3 className="font-bold text-lg mb-2">{guide.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                  Lire le guide <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold">Téléchargements</h2>
                </div>
                <p className="text-muted-foreground max-w-md">
                  Des fiches PDF récapitulatives seront bientôt disponibles : 
                  glossaire complet, fiches techniques, guide du débutant...
                </p>
              </div>
              <Button variant="heroOutline" disabled className="opacity-60">
                Bientôt disponible
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Une question ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Vous ne trouvez pas l'information recherchée ? Contactez-nous.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
