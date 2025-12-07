import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain,
  Activity,
  Smile,
  ArrowRight
} from "lucide-react";

const physicalBenefits = [
  "Amélioration de la souplesse et de la mobilité articulaire",
  "Renforcement musculaire en douceur (gainage, jambes, dos)",
  "Meilleur équilibre et coordination",
  "Travail cardiovasculaire modéré",
  "Conscience corporelle accrue",
  "Posture corrigée et maintenue",
];

const mentalBenefits = [
  "Réduction du stress et de l'anxiété",
  "Amélioration de la concentration",
  "Développement de la confiance en soi",
  "Gestion des émotions et de la pression",
  "Calme intérieur et sérénité",
  "Meilleure gestion des conflits",
];

export default function DecouvrirBienfaits() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <Link to="/decouvrir" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
              ← Retour à Découvrir
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Bienfaits <span className="gradient-text">physiques & mentaux</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'aïkido est une pratique complète qui développe le corps et l'esprit en harmonie. 
              Découvrez tous les bénéfices d'une pratique régulière.
            </p>
          </div>
        </div>
      </section>

      {/* Physical benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Bienfaits physiques</h2>
              </div>
              <ul className="space-y-4">
                {physicalBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/10 rounded-3xl p-8">
              <h3 className="font-bold text-lg mb-4">Un sport complet mais doux</h3>
              <p className="text-muted-foreground">
                L'aïkido sollicite l'ensemble du corps sans traumatisme articulaire. Les mouvements 
                circulaires et les chutes apprennent à utiliser son corps de manière fluide et 
                économique. C'est un excellent complément à une vie sédentaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mental benefits */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-primary/10 rounded-3xl p-8">
              <h3 className="font-bold text-lg mb-4">Le mental, clé de la pratique</h3>
              <p className="text-muted-foreground">
                En aïkido, on apprend à rester calme face à une attaque. Cette capacité à garder 
                son sang-froid se transfère naturellement dans la vie quotidienne : gestion du 
                stress au travail, conflits relationnels, prises de décision sous pression.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Bienfaits mentaux</h2>
              </div>
              <ul className="space-y-4">
                {mentalBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto text-center max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="w-10 h-10 text-primary" />
            <Smile className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Une approche <span className="gradient-text">holistique</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            L'aïkido ne sépare pas le corps de l'esprit. Chaque technique est l'occasion de 
            travailler son centrage, sa respiration, sa présence. C'est une méditation en mouvement 
            qui apporte équilibre et sérénité dans tous les aspects de la vie.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/commencer">
              Découvrir par la pratique
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
