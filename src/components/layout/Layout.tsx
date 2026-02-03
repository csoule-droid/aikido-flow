import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Navigation />
      <main id="main-content" className="flex-1 pt-20" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
