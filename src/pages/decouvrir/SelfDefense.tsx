import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, Eye, Move, Hand, Users, ArrowRight, CheckCircle } from "lucide-react";

const techniques = [
  {
    icon: Hand,
    title: "Libération de saisies",
    description: "Techniques pour se dégager d'une prise au poignet, au bras ou aux vêtements.",
    tips: ["Rotation du poignet vers le pouce de l'agresseur", "Utiliser le poids du corps, pas la force", "Agir rapidement et avec détermination"],
  },
  {
    icon: Move,
    title: "Déplacements et esquives",
    description: "Apprendre à se déplacer pour éviter une attaque et se mettre en sécurité.",
    tips: ["Irimi : entrer dans l'attaque", "Tenkan : pivoter pour rediriger", "Maintenir son équilibre en mouvement"],
  },
  {
    icon: Shield,
    title: "Protection et distance",
    description: "Maintenir une distance de sécurité et protéger les zones vitales.",
    tips: ["Garder les mains devant soi", "Protéger la gorge et le visage", "Créer de l'espace pour fuir"],
  },
  {
    icon: Users,
    title: "Déséquilibrer l'agresseur",
    description: "Techniques pour faire perdre l'équilibre sans avoir besoin de force.",
    tips: ["Utiliser le mouvement de l'autre", "Guider plutôt que pousser", "Viser le centre de gravité"],
  },
];

const practicalTips = [
  {
    icon: Eye,
    title: "Conscience situationnelle",
    description: "Restez attentive à votre environnement. Évitez les distractions (téléphone) dans les zones isolées. Identifiez les sorties et les zones de sécurité.",
  },
  {
    icon: AlertTriangle,
    title: "Écouter son intuition",
    description: "Si quelque chose vous semble anormal, faites confiance à votre instinct. Il vaut mieux paraître impolie que de se mettre en danger.",
  },
  {
    icon: Shield,
    title: "Posture de confiance",
    description: "Marchez avec assurance, tête haute. Une posture confiante dissuade souvent les agresseurs potentiels qui cherchent des cibles vulnérables.",
  },
];

const aikidoPrinciples = [
  "Ne pas affronter la force par la force",
  "Utiliser l'énergie de l'attaquant contre lui",
  "Rester calme pour mieux réagir",
  "Se déplacer plutôt que bloquer",
  "Chercher à neutraliser, pas à blesser",
  "Prioriser la fuite quand c'est possible",
];

const DecouvrirSelfDefense = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Self-défense
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Self-défense <span className="gradient-text">au féminin</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            L'aïkido offre des techniques de self-défense particulièrement adaptées aux femmes : 
            efficaces sans nécessiter de force physique, elles permettent de se protéger 
            tout en restant maîtresse de la situation.
          </p>
        </div>
      </section>

      {/* Principes Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Les principes de l'aïkido appliqués à la <span className="gradient-text">self-défense</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Contrairement à d'autres arts martiaux, l'aïkido ne cherche pas à vaincre 
                par la force. Cette approche est idéale pour les femmes qui souhaitent 
                apprendre à se défendre efficacement.
              </p>
              <ul className="space-y-3">
                {aikidoPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12">
              <blockquote className="text-lg md:text-xl italic text-foreground/90">
                "En aïkido, on n'affronte pas la force de l'adversaire. 
                On l'accompagne pour la rediriger. C'est pourquoi cette discipline 
                convient parfaitement aux femmes."
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                — Principe fondamental de l'aïkido
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Techniques <span className="gradient-text">essentielles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Voici les principales catégories de techniques que vous apprendrez en aïkido, 
              toutes applicables dans des situations de self-défense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <technique.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{technique.title}</h3>
                      <p className="text-muted-foreground mb-4">{technique.description}</p>
                      <ul className="space-y-2">
                        {technique.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center gap-2 text-sm">
                            <ArrowRight className="w-4 h-4 text-primary" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Conseils <span className="gradient-text">pratiques</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Au-delà des techniques, voici des conseils essentiels pour votre sécurité au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {practicalTips.map((tip, index) => (
              <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="container-custom mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Important à retenir</h3>
                  <p className="text-muted-foreground mb-4">
                    La self-défense n'est pas seulement une question de techniques. 
                    La meilleure défense reste toujours la prévention et la fuite quand c'est possible. 
                    L'objectif n'est pas de "gagner" un combat, mais de se mettre en sécurité.
                  </p>
                  <p className="text-muted-foreground">
                    La pratique régulière de l'aïkido développe des réflexes qui peuvent 
                    faire la différence dans une situation de danger, tout en renforçant 
                    votre confiance en vous au quotidien.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prête à apprendre à vous défendre ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Rejoignez un cours d'aïkido et découvrez comment ces techniques 
            peuvent vous donner confiance et sécurité au quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/commencer">
                Commencer l'aïkido
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/decouvrir/femmes">
                L'aïkido pour les femmes
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DecouvrirSelfDefense;
