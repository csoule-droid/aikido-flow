import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Decouvrir from "./pages/Decouvrir";
import DecouvrirFemmes from "./pages/decouvrir/Femmes";
import DecouvrirJeunes from "./pages/decouvrir/Jeunes";
import DecouvrirBienfaits from "./pages/decouvrir/Bienfaits";
import Commencer from "./pages/Commencer";
import CommencerEquipement from "./pages/commencer/Equipement";
import CommencerLexique from "./pages/commencer/Lexique";
import Techniques from "./pages/Techniques";
import Ressources from "./pages/Ressources";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import AdminAuth from "./pages/admin/Auth";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminStats from "./pages/admin/Stats";
import AdminContent from "./pages/admin/Content";
import AdminTechnicalSheets from "./pages/admin/TechnicalSheets";
import AdminVideos from "./pages/admin/Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/decouvrir" element={<Decouvrir />} />
            <Route path="/decouvrir/femmes" element={<DecouvrirFemmes />} />
            <Route path="/decouvrir/jeunes" element={<DecouvrirJeunes />} />
            <Route path="/decouvrir/bienfaits" element={<DecouvrirBienfaits />} />
            <Route path="/commencer" element={<Commencer />} />
            <Route path="/commencer/equipement" element={<CommencerEquipement />} />
            <Route path="/commencer/lexique" element={<CommencerLexique />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/stats" element={<AdminStats />} />
            <Route path="/admin/content" element={<AdminContent />} />
            <Route path="/admin/content/technical-sheets" element={<AdminTechnicalSheets />} />
            <Route path="/admin/videos" element={<AdminVideos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
