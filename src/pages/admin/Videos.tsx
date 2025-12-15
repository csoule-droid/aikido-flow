import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Video, Upload, Plus } from 'lucide-react';
import logo from '@/assets/aikido-logo.png';

export default function AdminVideos() {
  const { user, isContentCreator, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isContentCreator)) {
      navigate('/admin');
    }
  }, [user, isContentCreator, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Gestion des vidéos</h1>
              <p className="text-muted-foreground mt-1">
                Ajoutez et gérez les vidéos pédagogiques
              </p>
            </div>
          </div>
          <Button variant="hero" disabled>
            <Plus className="w-4 h-4 mr-2" />
            Ajouter une vidéo
          </Button>
        </div>

        {/* Empty state */}
        <div className="bg-card rounded-2xl p-12 border border-border/50 border-dashed text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <Video className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Aucune vidéo</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Les vidéos ajoutées apparaîtront ici. Vous pourrez les associer aux fiches 
            techniques et aux pages du site.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" disabled>
              <Upload className="w-4 h-4 mr-2" />
              Importer une vidéo
            </Button>
          </div>
        </div>

        {/* Info notice */}
        <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
          <div className="flex items-start gap-4">
            <Video className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Gestion des vidéos</h3>
              <p className="text-sm text-muted-foreground">
                Le système de gestion des vidéos permettra d'uploader des fichiers vidéo 
                ou de lier des vidéos YouTube/Vimeo aux différentes pages du site.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
