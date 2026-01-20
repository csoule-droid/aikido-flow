import { Link } from "react-router-dom";
import { Heart, Mail, ExternalLink, BookOpen, Users, Phone } from "lucide-react";
import logo from "@/assets/aikido-logo.png";

const footerLinks = {
  decouvrir: [
    { name: "Qu'est-ce que l'aïkido ?", href: "/decouvrir" },
    { name: "Aïkido pour femmes", href: "/decouvrir/femmes" },
    { name: "Aïkido pour jeunes", href: "/decouvrir/jeunes" },
    { name: "Bienfaits", href: "/decouvrir/bienfaits" },
  ],
  commencer: [
    { name: "Premier cours", href: "/commencer" },
    { name: "Tenue & matériel", href: "/commencer/equipement" },
    { name: "Lexique débutant", href: "/commencer/lexique" },
    { name: "Trouver un dojo", href: "#", external: true },
  ],
  ressources: [
    { name: "Glossaire", href: "/ressources" },
    { name: "Techniques", href: "/techniques" },
  ],
  informations: [
    { name: "À propos", href: "/a-propos", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom mx-auto section-padding">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="AikidoConnect" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Découvrez l'aïkido, un art martial non-violent qui harmonise corps et esprit. 
              Guide pédagogique national pour tous les curieux.
            </p>
            <p className="text-background/50 text-xs italic">
              Aiki, agis sur ton énergie !
            </p>
          </div>

          {/* Découvrir */}
          <div>
            <h4 className="font-bold text-lg mb-4">Découvrir</h4>
            <ul className="space-y-3">
              {footerLinks.decouvrir.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commencer */}
          <div>
            <h4 className="font-bold text-lg mb-4">Commencer</h4>
            <ul className="space-y-3">
              {footerLinks.commencer.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/70 hover:text-secondary transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Informations</h4>
            <ul className="space-y-3">
              {footerLinks.informations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm inline-flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} AikidoConnect. Site éducatif national.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-background/50 hover:text-secondary transition-colors text-sm inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Link>
              <span className="text-background/50 text-sm inline-flex items-center gap-1">
                Fait avec <Heart className="w-4 h-4 text-primary fill-primary" /> en France
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}