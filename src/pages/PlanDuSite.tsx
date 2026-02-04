import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
  Home, 
  Search, 
  BookOpen, 
  Dumbbell, 
  FileText, 
  Users, 
  Mail,
  ChevronRight,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  pages: {
    name: string;
    href: string;
    description?: string;
    children?: { name: string; href: string; description?: string }[];
  }[];
}

const siteStructure: SiteSection[] = [
  {
    title: "Accueil",
    icon: Home,
    pages: [
      { 
        name: "Page d'accueil", 
        href: "/",
        description: "Présentation de l'aïkido et points d'entrée principaux"
      },
    ],
  },
  {
    title: "Découvrir l'aïkido",
    icon: Search,
    pages: [
      { 
        name: "Qu'est-ce que l'aïkido ?", 
        href: "/decouvrir",
        description: "Introduction complète à l'art martial"
      },
      { 
        name: "Pour les femmes", 
        href: "/decouvrir/femmes",
        description: "L'aïkido adapté aux femmes de tous âges"
      },
      { 
        name: "Self-défense", 
        href: "/decouvrir/self-defense",
        description: "Techniques de défense personnelle"
      },
      { 
        name: "Sport santé femmes", 
        href: "/decouvrir/sport-sante-femmes",
        description: "Bienfaits pour la santé féminine"
      },
      { 
        name: "Bienfaits", 
        href: "/decouvrir/bienfaits",
        description: "Avantages physiques et mentaux de la pratique"
      },
    ],
  },
  {
    title: "Commencer la pratique",
    icon: BookOpen,
    pages: [
      { 
        name: "Premier cours", 
        href: "/commencer",
        description: "Guide complet pour débuter"
      },
      { 
        name: "Tenue & matériel", 
        href: "/commencer/equipement",
        description: "Équipement nécessaire pour pratiquer"
      },
      { 
        name: "Lexique débutant", 
        href: "/commencer/lexique",
        description: "Vocabulaire japonais essentiel"
      },
    ],
  },
  {
    title: "Techniques",
    icon: Dumbbell,
    pages: [
      { 
        name: "Vue d'ensemble", 
        href: "/techniques",
        description: "Catalogue des techniques fondamentales"
      },
    ],
  },
  {
    title: "Ressources",
    icon: FileText,
    pages: [
      { 
        name: "Glossaire & ressources", 
        href: "/ressources",
        description: "Termes et références complémentaires"
      },
    ],
  },
  {
    title: "Informations",
    icon: Users,
    pages: [
      { 
        name: "À propos", 
        href: "/a-propos",
        description: "Présentation du projet AikidoConnect"
      },
      { 
        name: "Contact", 
        href: "/contact",
        description: "Nous contacter"
      },
      { 
        name: "Plan du site", 
        href: "/plan-du-site",
        description: "Structure complète du site"
      },
    ],
  },
];

const externalLinks = [
  {
    name: "Annuaire des dojos FFAB",
    href: "https://www.ffabaikido.com/fr/ou-pratiquer-22.html",
    description: "Trouver un dojo près de chez vous"
  },
  {
    name: "Vidéo de présentation",
    href: "https://www.youtube.com/watch?v=mpYYdO4ZCBs",
    description: "Découvrir l'aïkido en vidéo"
  },
];

export default function PlanDuSite() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <SEO
        title="Plan du site - AikidoConnect"
        description="Structure complète du site AikidoConnect avec tous les liens internes vers les pages sur l'aïkido."
        canonicalUrl="/plan-du-site"
      />

      {/* Print styles */}
      <style>{`
        @media print {
          header, footer, .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .print-container {
            padding: 20px !important;
            max-width: 100% !important;
          }
          .print-section {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          a {
            color: black !important;
            text-decoration: none !important;
          }
          .print-url {
            display: inline !important;
            font-size: 10px;
            color: #666 !important;
          }
        }
        @media screen {
          .print-url {
            display: none;
          }
        }
      `}</style>

      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto print-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
                Plan du <span className="gradient-text">site</span>
              </h1>
              <p className="text-muted-foreground">
                Structure complète du site AikidoConnect
              </p>
            </div>
            <Button 
              onClick={handlePrint} 
              variant="outline" 
              className="no-print flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Imprimer / PDF
            </Button>
          </div>

          {/* Site info for print */}
          <div className="hidden print:block mb-8 pb-4 border-b-2 border-gray-300">
            <h2 className="text-2xl font-bold">AikidoConnect</h2>
            <p className="text-sm">Site éducatif national sur l'aïkido</p>
            <p className="text-sm">URL : https://aikido-flow.lovable.app</p>
            <p className="text-sm">Date d'impression : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>

          {/* Site structure */}
          <div className="space-y-8">
            {siteStructure.map((section) => (
              <div key={section.title} className="print-section">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center print:bg-gray-800">
                    <section.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                
                <div className="ml-6 border-l-2 border-primary/20 pl-6 space-y-3">
                  {section.pages.map((page) => (
                    <div key={page.href} className="group">
                      <Link 
                        to={page.href}
                        className="flex items-start gap-2 hover:text-primary transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-medium">{page.name}</span>
                          {page.description && (
                            <p className="text-sm text-muted-foreground print:text-gray-600">
                              {page.description}
                            </p>
                          )}
                          <span className="print-url"> — {page.href}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* External links */}
            <div className="print-section pt-6 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center print:bg-gray-200">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-xl font-bold">Liens externes</h2>
              </div>
              
              <div className="ml-6 border-l-2 border-secondary/20 pl-6 space-y-3">
                {externalLinks.map((link) => (
                  <div key={link.href} className="group">
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 hover:text-secondary transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                      <div>
                        <span className="font-medium">{link.name}</span>
                        {link.description && (
                          <p className="text-sm text-muted-foreground print:text-gray-600">
                            {link.description}
                          </p>
                        )}
                        <span className="print-url"> — {link.href}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary stats */}
          <div className="mt-12 p-6 bg-muted/50 rounded-2xl print:bg-gray-100 print:border print:border-gray-300">
            <h3 className="font-bold mb-4">Résumé</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">
                  {siteStructure.reduce((acc, s) => acc + s.pages.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Pages internes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">
                  {siteStructure.length}
                </div>
                <div className="text-sm text-muted-foreground">Sections</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {externalLinks.length}
                </div>
                <div className="text-sm text-muted-foreground">Liens externes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">
                  {new Date().getFullYear()}
                </div>
                <div className="text-sm text-muted-foreground">Mise à jour</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
