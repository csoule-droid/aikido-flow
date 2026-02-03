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
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pratique de l'aïkido" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        {/* Content */}
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 py-8 md:py-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 animate-fade-up">
              <CircleDot className="w-3 h-3 md:w-4 md:h-4" />
              <span>Art martial japonais non-violent</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 leading-tight animate-fade-up delay-100">
              Aïkido : <span className="gradient-text">confiance en soi</span>, self‑défense, respect
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-up delay-200">
              Un sport pour les femmes de tous âges. Découvrez l'art martial qui transforme 
              l'énergie en harmonie, dans un cadre bienveillant et respectueux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
              <Button variant="hero" size="lg" className="text-base font-bold shadow-lg" asChild>
                <Link to="/decouvrir">
                  Découvrir l'aïkido
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base font-semibold" asChild>
                <Link to="/commencer">
                  <Play className="w-5 h-5" />
                  Voir une vidéo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Pourquoi choisir l'<span className="gradient-text">aïkido</span> ?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              L'aïkido offre aux femmes un espace de développement personnel unique. Confiance en soi, techniques de défense efficaces, et bien-être accessible à tout âge.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-elevated p-4 md:p-5 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1.5">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quick Links Section */}
      <section className="py-10 md:py-14 px-4 md:px-8 bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Par où <span className="gradient-text">commencer</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="group flex items-center gap-3 p-4 md:p-5 rounded-xl border-2 border-border/60 bg-card hover:border-primary/60 hover:bg-primary/5 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all shrink-0">
                  <link.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm md:text-base">{link.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="container-custom mx-auto relative z-10 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
            Prête à découvrir l'aïkido ?
          </h2>
          <p className="text-primary-foreground/90 text-sm md:text-base max-w-xl mx-auto mb-5">
            Commencez votre voyage vers l'harmonie du corps et de l'esprit.
          </p>
          <Button 
            variant="heroOutline" 
            size="lg" 
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold shadow-lg"
            asChild
          >
            <Link to="/commencer">
              Débuter maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
