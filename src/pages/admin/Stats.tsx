import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart3, Users, FileText, Video } from 'lucide-react';
import logo from '@/assets/aikido-logo.png';

export default function AdminStats() {
  const { user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/admin');
    }
  }, [user, isAdmin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  const stats = [
    { icon: Users, label: 'Visiteurs ce mois', value: '-', color: 'text-blue-500' },
    { icon: FileText, label: 'Pages vues', value: '-', color: 'text-green-500' },
    { icon: Video, label: 'Vidéos vues', value: '-', color: 'text-purple-500' },
    { icon: BarChart3, label: 'Taux de rebond', value: '-', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src={logo} alt="AikidoConnect" className="h-10 w-auto" />
              </Link>
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                Backoffice
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container-custom mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Statistiques</h1>
            <p className="text-muted-foreground mt-1">
              Vue d'ensemble des performances du site
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for charts */}
        <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
          <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Statistiques à venir</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Les statistiques détaillées seront disponibles après l'intégration 
            d'un service d'analytics (Google Analytics, Plausible, etc.)
          </p>
        </div>
      </main>
    </div>
  );
}
