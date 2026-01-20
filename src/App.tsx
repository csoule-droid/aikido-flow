import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Decouvrir from "./pages/Decouvrir";
import DecouvrirFemmes from "./pages/decouvrir/Femmes";
import DecouvrirSelfDefense from "./pages/decouvrir/SelfDefense";
import DecouvrirBienfaits from "./pages/decouvrir/Bienfaits";
import DecouvrirSportSanteFemmes from "./pages/decouvrir/SportSanteFemmes";
import Commencer from "./pages/Commencer";
import CommencerEquipement from "./pages/commencer/Equipement";
import CommencerLexique from "./pages/commencer/Lexique";
import Techniques from "./pages/Techniques";
import Ressources from "./pages/Ressources";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/decouvrir" element={<Decouvrir />} />
            <Route path="/decouvrir/femmes" element={<DecouvrirFemmes />} />
            <Route path="/decouvrir/self-defense" element={<DecouvrirSelfDefense />} />
            <Route path="/decouvrir/bienfaits" element={<DecouvrirBienfaits />} />
            <Route path="/decouvrir/sport-sante-femmes" element={<DecouvrirSportSanteFemmes />} />
            <Route path="/commencer" element={<Commencer />} />
            <Route path="/commencer/equipement" element={<CommencerEquipement />} />
            <Route path="/commencer/lexique" element={<CommencerLexique />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;