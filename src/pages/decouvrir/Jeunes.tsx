import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Users,
  Trophy,
  Brain,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Dynamique et stylé",
    description: "Des mouvements fluides, des chutes spectaculaires, une pratique qui en met plein la vue.",
  },
  {
    icon: Users,
    title: "Zéro compétition",
    description: "Pas de classement, pas de combat. On progresse ensemble, pas les uns contre les autres.",
  },
  {
    icon: Trophy,
    title: "Maîtrise de soi",
    description: "Apprendre à gérer ses émotions, sa peur, son énergie. Des compétences utiles partout.",
  },
  {
    icon: Brain,
    title: "Développement mental",
    description: "Concentration, calme intérieur, gestion du stress. L'aïkido forge le mental autant que le corps.",
  },
];

const myths = [
  {
    myth: "L'aïkido, c'est pour les vieux",
    truth: "De nombreux jeunes pratiquent l'aïkido. La moyenne d'âge baisse chaque année.",
  },
  {
    myth: "Ça ne sert à rien en vrai combat",
    truth: "L'aïkido développe des réflexes et une conscience du corps très utiles en situation réelle.",
  },
  {
    myth: "C'est lent et ennuyeux",
    truth: "Au niveau avancé, l'aïkido devient très rapide et demande une grande réactivité.",
  },
  {
    myth: "Il faut des années pour savoir faire quelque chose",
    truth: "Dès les premiers cours, vous apprenez des techniques applicables.",
  },
];

export default function DecouvrirJeunes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <Link to="/decouvrir" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
              ← Retour à Découvrir
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              L'aïkido pour les <span className="gradient-text">jeunes</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              16-30 ans : vous cherchez un art martial différent ? Pas de combat, pas de violence, 
              mais des techniques efficaces et un vrai développement personnel. L'aïkido, c'est 
              le martial art qui sort des codes.
            </p>
          </div>
        </div>
      </section>

      {/* Why for young people */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Pourquoi l'aïkido <span className="gradient-text">cartonne</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="card-elevated p-6 text-center hover-lift">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Ce qui fait la <span className="gradient-text">différence</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Pas d'ego.</strong> En aïkido, on ne gagne pas 
                contre quelqu'un. On apprend avec quelqu'un. Le partenaire n'est pas un adversaire, 
                c'est celui qui nous permet de progresser.
              </p>
              <p>
                <strong className="text-foreground">Du flow.</strong> Les techniques d'aïkido 
                ressemblent à une danse martiale. Fluidité, cercles, spirales. C'est beau à voir, 
                et encore meilleur à vivre.
              </p>
              <p>
                <strong className="text-foreground">Utilisable IRL.</strong> Gérer un conflit sans 
                escalade, garder son calme, lire les intentions de l'autre. L'aïkido développe des 
                soft skills recherchées partout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Mythes & <span className="gradient-text">réalités</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {myths.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-destructive font-bold">✗</span>
                  <p className="font-medium line-through text-muted-foreground">{item.myth}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p className="text-foreground">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to try ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Trouvez un dojo près de chez vous et testez un cours d'essai.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/commencer">
              Commencer l'aïkido
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
