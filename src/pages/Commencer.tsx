import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Zap, 
  CheckCircle2,
  Clock,
  Shirt,
  MapPin,
  ArrowRight,
  Users,
  Heart
} from "lucide-react";

const courseSteps = [
  {
    time: "0-10 min",
    title: "Salut & échauffement",
    description: "Le cours commence par un salut traditionnel (rei) puis un échauffement doux qui prépare le corps.",
  },
  {
    time: "10-40 min",
    title: "Techniques",
    description: "Le sensei (professeur) démontre les techniques. Vous pratiquez avec un partenaire, chacun à tour de rôle.",
  },
  {
    time: "40-55 min",
    title: "Pratique libre",
    description: "Application des techniques avec différents partenaires. On apprend en observant et en ressentant.",
  },
  {
    time: "55-60 min",
    title: "Retour au calme",
    description: "Exercices de respiration et salut final. Moment d'échange avec le groupe.",
  },
];

const firstTimeChecklist = [
  "Arrivez 15 minutes avant le cours",
  "Apportez une tenue confortable (jogging + t-shirt)",
  "Retirez bijoux et montres",
  "Ongles courts (mains et pieds)",
  "Esprit ouvert et curieux !",
];

const childPages = [
  {
    title: "Tenue & matériel",
    description: "Tout sur le keikogi et l'équipement nécessaire.",
    href: "/commencer/equipement",
    icon: Shirt,
  },
  {
    title: "Lexique du débutant",
    description: "Les mots japonais essentiels pour votre premier cours.",
    href: "/commencer/lexique",
    icon: Users,
  },
];

export default function Commencer() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Page pilier</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Commencer l'<span className="gradient-text">aïkido</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous êtes curieux de découvrir l'aïkido ? Voici tout ce qu'il faut savoir 
              pour aborder votre premier cours en toute sérénité. Pas de panique : 
              l'aïkido est un art martial accueillant et progressif.
            </p>
          </div>
        </div>
      </section>

      {/* Course structure */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Comment se déroule un <span className="gradient-text">cours</span> ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseSteps.map((step, index) => (
              <div key={step.title} className="card-elevated p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex items-center gap-2 text-secondary font-medium text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  {step.time}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First time checklist */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Votre <span className="gradient-text">premier cours</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Pas besoin de tenue spéciale ni de matériel pour commencer. 
                La plupart des dojos proposent un ou plusieurs cours d'essai gratuits.
              </p>
              <ul className="space-y-3">
                {firstTimeChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">Trouver un dojo</h3>
                  <p className="text-sm text-muted-foreground">Près de chez vous</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Recherchez un dojo affilié à une fédération reconnue. 
                Le site de la FFAB ou de la FFAAA propose des annuaires par région.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.ffabaikido.com/fr/ou-pratiquer-22.html" target="_blank" rel="noopener noreferrer">
                  Annuaire des dojos
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* First sensations */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Premières <span className="gradient-text">sensations</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="font-bold mb-2">C'est normal de...</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Se sentir un peu perdu au début</li>
                <li>• Ne pas retenir tous les noms japonais</li>
                <li>• Avoir du mal à chuter correctement</li>
                <li>• Être fatigué après le cours</li>
              </ul>
            </div>
            <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
              <h3 className="font-bold mb-2">Vous allez découvrir...</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Une ambiance bienveillante</li>
                <li>• Le plaisir de travailler en duo</li>
                <li>• Des mouvements fluides et précis</li>
                <li>• Un vrai moment de déconnexion</li>
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-6 border border-border">
              <h3 className="font-bold mb-2">Nos conseils</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Observez avant d'imiter</li>
                <li>• Posez des questions</li>
                <li>• Allez à votre rythme</li>
                <li>• Revenez au moins 3 fois</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Child pages */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Aller plus <span className="gradient-text">loin</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {childPages.map((page) => (
              <Link
                key={page.title}
                to={page.href}
                className="group card-elevated p-6 hover-lift flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <page.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{page.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{page.description}</p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                    Lire <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            L'aïkido vous appelle ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explorez les techniques fondamentales et découvrez ce qui vous attend sur le tatami.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/techniques">
              Découvrir les techniques
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
