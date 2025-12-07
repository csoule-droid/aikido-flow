import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  BookOpen, 
  Users, 
  Heart, 
  Compass,
  CircleDot,
  ArrowRight
} from "lucide-react";

const principles = [
  {
    japanese: "合気",
    romaji: "Aiki",
    meaning: "Harmonie des énergies",
    description: "L'aïkido utilise l'énergie de l'attaquant plutôt que de s'y opposer.",
  },
  {
    japanese: "円",
    romaji: "En",
    meaning: "Le cercle",
    description: "Les mouvements circulaires permettent de rediriger la force sans confrontation.",
  },
  {
    japanese: "氣",
    romaji: "Ki",
    meaning: "L'énergie vitale",
    description: "Le développement et la maîtrise de l'énergie intérieure.",
  },
  {
    japanese: "道",
    romaji: "Do",
    meaning: "La voie",
    description: "Un chemin de développement personnel qui va au-delà de la technique.",
  },
];

const childPages = [
  {
    title: "Aïkido pour femmes",
    description: "Confiance, self-défense et épanouissement personnel.",
    href: "/decouvrir/femmes",
    icon: Heart,
  },
  {
    title: "Aïkido pour jeunes",
    description: "Un art martial dynamique pour les 16-30 ans.",
    href: "/decouvrir/jeunes",
    icon: Users,
  },
  {
    title: "Bienfaits physiques & mentaux",
    description: "Découvrez tous les avantages de la pratique.",
    href: "/decouvrir/bienfaits",
    icon: Compass,
  },
];

const faq = [
  {
    question: "L'aïkido est-il un art martial violent ?",
    answer: "Non, l'aïkido est fondamentalement non-violent. Il n'y a pas de compétition et l'objectif est de neutraliser une attaque sans blesser l'agresseur.",
  },
  {
    question: "Faut-il être en bonne condition physique ?",
    answer: "L'aïkido s'adapte à tous les niveaux. La pratique développe progressivement la condition physique sans exiger de prérequis.",
  },
  {
    question: "À partir de quel âge peut-on commencer ?",
    answer: "On peut débuter l'aïkido à tout âge, généralement dès 6-7 ans pour les enfants. Il n'y a pas de limite d'âge supérieure.",
  },
  {
    question: "L'aïkido est-il efficace en self-défense ?",
    answer: "Oui, l'aïkido enseigne des techniques de protection efficaces, mais son approche est différente : on apprend à gérer un conflit sans escalade de violence.",
  },
];

export default function Decouvrir() {
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
              Qu'est-ce que l'<span className="gradient-text">aïkido</span> ?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'aïkido (合気道) est un art martial japonais fondé par Morihei Ueshiba au XXe siècle. 
              Son nom signifie littéralement « la voie de l'harmonie des énergies ». 
              Contrairement aux arts martiaux de combat, l'aïkido ne vise pas à vaincre un adversaire, 
              mais à neutraliser une agression tout en préservant l'intégrité de chacun.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Les <span className="gradient-text">principes</span> fondamentaux
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div key={principle.romaji} className="card-elevated p-6 hover-lift">
                <div className="text-4xl font-bold text-primary mb-2">{principle.japanese}</div>
                <div className="text-lg font-bold mb-1">{principle.romaji}</div>
                <div className="text-sm text-secondary font-medium mb-3">{principle.meaning}</div>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Aikido unique */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ce qui rend l'aïkido <span className="gradient-text">unique</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Pas de compétition.</strong> L'aïkido se pratique uniquement en coopération. 
                  Chaque partenaire apprend et progresse ensemble, sans classement ni victoire.
                </p>
                <p>
                  <strong className="text-foreground">Mouvements circulaires.</strong> Au lieu de bloquer ou frapper, 
                  l'aïkidoka guide l'énergie de l'attaque dans un mouvement fluide et contrôlé.
                </p>
                <p>
                  <strong className="text-foreground">Respect mutuel.</strong> Chaque technique se termine par une immobilisation 
                  ou une projection qui préserve l'intégrité physique du partenaire.
                </p>
                <p>
                  <strong className="text-foreground">Développement personnel.</strong> Au-delà des techniques, 
                  l'aïkido est un chemin de croissance qui développe la confiance, la sérénité et la maîtrise de soi.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <CircleDot className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground italic">Vidéo à venir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child pages */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Explorer <span className="gradient-text">davantage</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {childPages.map((page) => (
              <Link
                key={page.title}
                to={page.href}
                className="group card-elevated p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <page.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{page.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{page.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                  Lire <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {faq.map((item) => (
              <div key={item.question} className="bg-card rounded-2xl p-6">
                <h3 className="font-bold mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à essayer ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Découvrez comment se déroule un premier cours et ce qu'il faut savoir avant de débuter.
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
