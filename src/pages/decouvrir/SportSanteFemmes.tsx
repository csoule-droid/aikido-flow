import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO, schemas } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity,
  Brain,
  Leaf,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles
} from "lucide-react";

const healthBenefits = [
  {
    icon: Heart,
    title: "Santé cardiovasculaire",
    description: "L'aïkido améliore l'endurance cardiaque grâce à un effort modéré et régulier, idéal après 30 ans.",
  },
  {
    icon: Activity,
    title: "Souplesse et mobilité",
    description: "Les mouvements fluides préservent et améliorent la mobilité articulaire, prévenant les raideurs liées à l'âge.",
  },
  {
    icon: Brain,
    title: "Bien-être mental",
    description: "Réduction du stress, amélioration de la concentration et développement de la confiance en soi.",
  },
  {
    icon: Leaf,
    title: "Posture et équilibre",
    description: "Travail sur le centre de gravité et l'alignement corporel pour une meilleure posture au quotidien.",
  },
];

const whyAfter30 = [
  "Pas de chocs ni d'impacts violents sur les articulations",
  "Progression adaptée à votre rythme personnel",
  "Renforcement musculaire doux et progressif",
  "Travail respiratoire bénéfique pour la gestion du stress",
  "Communauté bienveillante et sans compétition",
  "Bienfaits durables qui s'améliorent avec l'expérience",
];

const comparisonData = [
  {
    sport: "Course à pied",
    impact: "Élevé",
    stress: "Variable",
    social: "Faible",
    selfDefense: "Non",
  },
  {
    sport: "Yoga",
    impact: "Faible",
    stress: "Bon",
    social: "Moyen",
    selfDefense: "Non",
  },
  {
    sport: "Fitness",
    impact: "Variable",
    stress: "Variable",
    social: "Faible",
    selfDefense: "Non",
  },
  {
    sport: "Aïkido",
    impact: "Faible",
    stress: "Excellent",
    social: "Élevé",
    selfDefense: "Oui",
    highlight: true,
  },
];

const faq = [
  {
    question: "L'aïkido est-il adapté aux femmes de plus de 30 ans ?",
    answer: "Absolument. L'aïkido est particulièrement adapté car il n'y a pas de compétition ni de chocs. Les mouvements sont fluides et respectueux du corps. De nombreuses pratiquantes commencent après 30, 40 ou même 50 ans.",
  },
  {
    question: "Faut-il être sportive pour commencer ?",
    answer: "Non, aucune condition physique particulière n'est requise. L'aïkido développe progressivement la souplesse, l'endurance et la coordination. Chacune progresse à son rythme.",
  },
  {
    question: "L'aïkido peut-il aider à perdre du poids ?",
    answer: "L'aïkido est une activité physique complète qui sollicite tout le corps. Combiné à une alimentation équilibrée, il contribue au maintien d'un poids santé et au tonus musculaire.",
  },
  {
    question: "Combien de fois par semaine faut-il pratiquer ?",
    answer: "Pour des bénéfices santé durables, 2 séances par semaine sont idéales. Mais même une séance hebdomadaire apporte des bienfaits notables sur le stress et la posture.",
  },
];

const testimonials = [
  {
    quote: "À 38 ans, j'ai trouvé dans l'aïkido le sport complet que je cherchais : pas de douleurs articulaires, une vraie communauté, et je me sens plus sereine au quotidien.",
    author: "Marie, 38 ans",
    city: "Lyon",
  },
  {
    quote: "Après 35 ans, je voulais un sport qui respecte mon corps tout en me permettant d'apprendre la self-défense. L'aïkido répond parfaitement à ces deux besoins.",
    author: "Émilie, 42 ans",
    city: "Paris",
  },
  {
    quote: "J'ai commencé à 45 ans sans aucune expérience sportive. Deux ans plus tard, je me sens plus forte, plus souple et plus confiante.",
    author: "Isabelle, 47 ans",
    city: "Bordeaux",
  },
];

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    schemas.createArticle({
      headline: "Sport santé pour femmes de plus de 30 ans : découvrez l'aïkido",
      description: "L'aïkido est le sport idéal pour les femmes après 30 ans : sans chocs, bénéfique pour la santé physique et mentale, avec des techniques de self-défense efficaces.",
      url: "/decouvrir/sport-sante-femmes",
    }),
    schemas.createFAQPage(faq),
    {
      "@type": "SportsActivityLocation",
      "name": "Aïkido - Sport santé pour femmes",
      "description": "Cours d'aïkido adaptés aux femmes de plus de 30 ans en France",
      "sport": "Aïkido",
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "audience": {
        "@type": "PeopleAudience",
        "suggestedGender": "female",
        "suggestedMinAge": 30
      }
    }
  ]
};

export default function DecouvrirSportSanteFemmes() {
  return (
    <Layout>
      <SEO
        title="Sport santé femme 30 ans et plus : l'aïkido, choix idéal"
        description="Découvrez pourquoi l'aïkido est le sport santé parfait pour les femmes de plus de 30 ans. Sans chocs, bénéfique pour le corps et l'esprit, avec self-défense incluse."
        keywords="sport femme 30 ans, sport santé femme, aikido femme, self-défense femme, sport doux femme, activité physique femme 40 ans, sport sans impact"
        canonicalUrl="/decouvrir/sport-sante-femmes"
        ogType="article"
        schema={seoSchema}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <Link to="/decouvrir" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
              ← Retour à Découvrir
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Sport santé pour <span className="gradient-text">femmes de 30 ans et plus</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Après 30 ans, le corps évolue et les besoins sportifs changent. L'aïkido offre 
              une activité physique complète, respectueuse des articulations, qui développe 
              la confiance en soi tout en enseignant des techniques de self-défense efficaces.
            </p>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Les bienfaits <span className="gradient-text">santé</span> de l'aïkido
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Un sport complet qui prend soin de votre corps et de votre esprit, 
            particulièrement adapté aux femmes après 30 ans.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthBenefits.map((benefit) => (
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

      {/* Why after 30 */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pourquoi l'aïkido après <span className="gradient-text">30 ans</span> ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Après 30 ans, on recherche un sport qui respecte le corps tout en offrant 
                des bénéfices durables. L'aïkido répond parfaitement à ces attentes avec 
                une approche unique qui privilégie la technique à la force.
              </p>
              <ul className="space-y-3">
                {whyAfter30.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">Il n'est jamais trop tard</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Contrairement aux idées reçues, l'aïkido se bonifie avec l'âge. 
                Les pratiquantes les plus expérimentées ont souvent commencé après 30, 40 ou 50 ans.
              </p>
              <p className="text-muted-foreground">
                La technique prime sur la force : une femme de 50 ans avec de l'expérience 
                sera plus efficace qu'une débutante de 25 ans qui mise sur ses muscles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Comparatif des <span className="gradient-text">sports santé</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold">Sport</th>
                  <th className="text-center py-4 px-4 font-bold">Impact articulaire</th>
                  <th className="text-center py-4 px-4 font-bold">Gestion stress</th>
                  <th className="text-center py-4 px-4 font-bold">Lien social</th>
                  <th className="text-center py-4 px-4 font-bold">Self-défense</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr 
                    key={row.sport} 
                    className={`border-b border-border ${row.highlight ? 'bg-primary/5' : ''}`}
                  >
                    <td className={`py-4 px-4 ${row.highlight ? 'font-bold text-primary' : ''}`}>
                      {row.sport}
                    </td>
                    <td className="text-center py-4 px-4">{row.impact}</td>
                    <td className="text-center py-4 px-4">{row.stress}</td>
                    <td className="text-center py-4 px-4">{row.social}</td>
                    <td className="text-center py-4 px-4">
                      {row.selfDefense === "Oui" ? (
                        <CheckCircle2 className="w-5 h-5 text-secondary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Témoignages de <span className="gradient-text">pratiquantes</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-primary/10">
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.question} className="bg-card rounded-2xl p-6">
                <h3 className="font-bold mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Continuez votre <span className="gradient-text">découverte</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/decouvrir/femmes"
              className="group card-elevated p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Users className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Aïkido pour femmes</h3>
              <p className="text-sm text-muted-foreground">Confiance et épanouissement</p>
            </Link>
            
            <Link
              to="/decouvrir/self-defense"
              className="group card-elevated p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Sparkles className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Self-défense</h3>
              <p className="text-sm text-muted-foreground">Techniques pratiques</p>
            </Link>
            
            <Link
              to="/decouvrir/bienfaits"
              className="group card-elevated p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Heart className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Bienfaits complets</h3>
              <p className="text-sm text-muted-foreground">Corps et esprit</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prête à prendre soin de vous ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Découvrez comment se déroule un premier cours et rejoignez une communauté 
            de femmes qui ont choisi l'aïkido pour leur santé.
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
