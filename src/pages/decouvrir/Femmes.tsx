import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Self-défense adaptée",
    description: "L'aïkido enseigne à se protéger sans avoir besoin de force physique. Les techniques utilisent le mouvement et le déséquilibre, pas la puissance.",
  },
  {
    icon: Heart,
    title: "Confiance en soi",
    description: "Apprendre à gérer une situation de confrontation, même simulée, développe l'assurance et la sérénité au quotidien.",
  },
  {
    icon: Users,
    title: "Communauté bienveillante",
    description: "L'aïkido attire des pratiquants respectueux. L'ambiance sur le tatami est coopérative, jamais compétitive.",
  },
  {
    icon: Sparkles,
    title: "Bien-être global",
    description: "Travail sur la posture, la respiration, la concentration. Une pratique complète qui harmonise corps et esprit.",
  },
];

const testimonials = [
  {
    quote: "J'ai commencé l'aïkido à 35 ans, sans aucune expérience martiale. Après deux ans, je me sens plus forte, plus centrée.",
    author: "Sophie, 37 ans",
  },
  {
    quote: "Ce qui m'a attirée, c'est l'absence de compétition. On progresse ensemble, dans le respect.",
    author: "Claire, 28 ans",
  },
  {
    quote: "L'aïkido m'a appris à ne plus fuir les conflits, mais à les gérer avec calme.",
    author: "Léa, 42 ans",
  },
];

export default function DecouvrirFemmes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <Link to="/decouvrir" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
              ← Retour à Découvrir
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              L'aïkido pour les <span className="gradient-text">femmes</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un art martial qui valorise la fluidité plutôt que la force, le respect plutôt 
              que la domination. L'aïkido offre aux femmes un espace de pratique unique, 
              où chacune peut progresser à son rythme.
            </p>
          </div>
        </div>
      </section>

      {/* Why aikido for women */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Pourquoi l'aïkido <span className="gradient-text">vous correspond</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-elevated p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No strength required */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pas besoin d'être <span className="gradient-text">forte</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contrairement aux arts martiaux de frappe ou de lutte, l'aïkido ne demande pas 
              de force physique. Les techniques fonctionnent grâce au déplacement, au timing 
              et à la redirection de l'énergie. Une femme de 50 kg peut parfaitement 
              projeter un partenaire de 90 kg.
            </p>
            <div className="bg-card rounded-2xl p-6 text-left max-w-xl mx-auto">
              <h3 className="font-bold mb-4">Ce que vous apprendrez :</h3>
              <ul className="space-y-3">
                {[
                  "Utiliser le mouvement de l'attaquant contre lui",
                  "Garder votre calme sous pression",
                  "Chuter en toute sécurité",
                  "Développer votre présence et votre ancrage",
                  "Poser vos limites avec assurance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Témoignages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prête à essayer ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Découvrez comment se déroule un premier cours et ce qu'il faut prévoir.
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
