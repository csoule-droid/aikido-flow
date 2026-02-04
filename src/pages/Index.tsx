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
      
      {/* Hero Section - Compact to show benefits above fold */}
      <section className="relative min-h-[60vh] md:min-h-[55vh] lg:min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pratique de l'aïkido" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        {/* Content */}
        <div className="container-custom mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-6 md:py-8">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-primary/15 text-primary px-2.5 py-1 rounded-full text-xs font-semibold mb-3 animate-fade-up">
              <CircleDot className="w-3 h-3" />
              <span>Art martial japonais non-violent</span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight animate-fade-up delay-100">
              Aïkido : <span className="gradient-text">confiance en soi</span>, self‑défense, respect
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed animate-fade-up delay-200 max-w-lg">
              Un sport pour les femmes de tous âges. Découvrez l'art martial qui transforme 
              l'énergie en harmonie.
            </p>
            
            <div className="flex flex-row gap-2 sm:gap-3 animate-fade-up delay-300">
              <Button variant="hero" size="default" className="text-sm font-bold shadow-lg" asChild>
                <Link to="/decouvrir">
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="default" className="text-sm font-semibold" asChild>
                <a href="https://www.youtube.com/watch?v=mpYYdO4ZCBs" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4" />
                  Vidéo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits Section - Visible above fold on desktop */}
      <section className="py-6 md:py-10 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-5 md:mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Pourquoi choisir l'<span className="gradient-text">aïkido</span> ?
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Confiance en soi, techniques de défense efficaces, et bien-être accessible à tout âge.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-elevated p-3 md:p-4 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg gradient-bg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xs md:text-sm mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quick Links Section */}
      <section className="py-6 md:py-10 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="text-center mb-4 md:mb-5">
            <h2 className="text-xl md:text-2xl font-bold">
              Par où <span className="gradient-text">commencer</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-2xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group flex flex-col sm:flex-row items-center gap-2 p-3 md:p-4 rounded-lg border-2 border-border/60 bg-card hover:border-primary/60 hover:bg-primary/5 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all shrink-0">
                  <link.icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="min-w-0 text-center sm:text-left">
                  <h3 className="font-bold text-xs md:text-sm">{link.title}</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block truncate">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="container-custom mx-auto relative z-10 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-foreground mb-2">
            Prête à découvrir l'aïkido ?
          </h2>
          <p className="text-primary-foreground/90 text-xs md:text-sm max-w-md mx-auto mb-4">
            Commencez votre voyage vers l'harmonie du corps et de l'esprit.
          </p>
          <Button 
            variant="heroOutline" 
            size="default" 
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold shadow-lg"
            asChild
          >
            <Link to="/commencer">
              Débuter maintenant
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
