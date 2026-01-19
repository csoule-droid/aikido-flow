import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO, schemas } from "@/components/SEO";
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  Users, 
  Sparkles, 
  CircleDot,
  ChevronRight,
  Play,
  BookOpen,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-aikido.jpg";

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    schemas.organization,
    {
      "@type": "WebPage",
      "@id": "https://aikidoconnect.fr/",
      "name": "AikidoConnect - Sport santé et self-défense pour femmes",
      "description": "Découvrez l'aïkido, le sport idéal pour les femmes de tous âges. Self-défense douce, confiance en soi et bien-être. Cours en France.",
      "url": "https://aikidoconnect.fr/",
      "isPartOf": { "@id": "https://aikidoconnect.fr/#website" }
    }
  ]
};

const benefits = [
  {
    icon: Shield,
    title: "Self-défense douce",
    description: "Apprenez à vous protéger sans violence, en utilisant l'énergie de l'adversaire.",
  },
  {
    icon: Heart,
    title: "Confiance en soi",
    description: "Développez votre assurance et votre présence au quotidien.",
  },
  {
    icon: Users,
    title: "Pratique inclusive",
    description: "Un art martial accessible à tous, peu importe l'âge ou la condition physique.",
  },
  {
    icon: Sparkles,
    title: "Bien-être global",
    description: "Harmonisez corps et esprit pour une meilleure qualité de vie.",
  },
];


const quickLinks = [
  {
    icon: BookOpen,
    title: "Découvrir l'aïkido",
    description: "Comprendre les fondamentaux",
    href: "/decouvrir",
  },
  {
    icon: Zap,
    title: "Commencer",
    description: "Votre premier cours",
    href: "/commencer",
  },
  {
    icon: CircleDot,
    title: "Techniques",
    description: "Explorer les mouvements",
    href: "/techniques",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Aïkido femme : sport santé, self-défense et confiance en soi"
        description="L'aïkido, sport idéal pour les femmes de 30 ans et plus. Self-défense douce, confiance en soi et bien-être. Découvrez nos cours en France."
        keywords="aikido femme, sport femme 30 ans, self-défense femme, sport santé femme, aikido débutant, art martial femme, confiance en soi"
        canonicalUrl="/"
        schema={seoSchema}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pratique de l'aïkido" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        {/* Content */}
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <CircleDot className="w-4 h-4" />
              <span>Art martial japonais non-violent</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 animate-fade-up delay-100">
              Aïkido : <span className="gradient-text">confiance en soi</span>, self‑défense, respect
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up delay-200">
              Un sport pour les femmes de tous âges. Découvrez l'art martial qui transforme 
              l'énergie en harmonie, dans un cadre bienveillant et respectueux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/decouvrir">
                  Découvrir l'aïkido
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/commencer">
                  <Play className="w-5 h-5" />
                  Voir une vidéo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir l'<span className="gradient-text">aïkido</span> ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              L'aïkido offre aux femmes un espace de développement personnel unique. Il développe la confiance en soi, offre des techniques de défense efficaces, et accroît l'énergie et le bien-être. On peut débuter l'aïkido à tout âge, quelle que soit sa forme physique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-elevated p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quick Links Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Par où <span className="gradient-text">commencer</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group flex items-center gap-4 p-6 rounded-2xl border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <link.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="container-custom mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à découvrir l'aïkido ?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Commencez votre voyage vers l'harmonie du corps et de l'esprit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/commencer">
                Débuter maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
