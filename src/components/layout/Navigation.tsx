import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/aikido-logo.png";

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Découvrir",
    href: "/decouvrir",
    children: [
      { name: "Qu'est-ce que l'Aïkido ?", href: "/decouvrir" },
      { name: "Pour les femmes", href: "/decouvrir/femmes" },
      { name: "Pour les jeunes", href: "/decouvrir/jeunes" },
      { name: "Bienfaits", href: "/decouvrir/bienfaits" },
    ],
  },
  {
    name: "Commencer",
    href: "/commencer",
    children: [
      { name: "Premier cours", href: "/commencer" },
      { name: "Tenue & matériel", href: "/commencer/equipement" },
      { name: "Lexique débutant", href: "/commencer/lexique" },
    ],
  },
  {
    name: "Techniques",
    href: "/techniques",
    children: [
      { name: "Vue d'ensemble", href: "/techniques" },
      { name: "Shihonage", href: "/techniques/shihonage" },
      { name: "Ikkyo", href: "/techniques/ikkyo" },
      { name: "Iriminage", href: "/techniques/iriminage" },
    ],
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src={logo} alt="AikidoConnect" className="h-auto w-[140px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-up">
                    <div className="bg-card rounded-2xl shadow-card border border-border/50 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            isActive(child.href)
                              ? "text-primary bg-primary/10"
                              : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <Link to="/commencer">Débuter l'aïkido</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile CTA */}
              <div className="mt-4 px-4">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/commencer">Débuter l'aïkido</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}