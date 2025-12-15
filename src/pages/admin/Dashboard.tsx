import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  FileText, 
  Video, 
  BarChart3, 
  LogOut,
  Settings,
  Shield,
  PenSquare
} from 'lucide-react';
import logo from '@/assets/aikido-logo.png';

const roleLabels = {
  administrator: 'Administrateur',
  editor: 'Rédacteur',
  content_creator: 'Créateur de contenu',
};

export default function AdminDashboard() {
  const { user, role, isLoading, signOut, isAdmin, isEditor, isContentCreator } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/admin/auth');
    }
  }, [user, isLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/auth');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const menuItems = [
    {
      icon: BarChart3,
      title: 'Statistiques',
      description: 'Voir les statistiques du site',
      href: '/admin/stats',
      visible: isAdmin,
    },
    {
      icon: Users,
      title: 'Utilisateurs',
      description: 'Gérer les utilisateurs et les droits',
      href: '/admin/users',
      visible: isAdmin,
    },
    {
      icon: FileText,
      title: 'Contenus',
      description: 'Modifier les contenus du site',
      href: '/admin/content',
      visible: isEditor,
    },
    {
      icon: Video,
      title: 'Vidéos',
      description: 'Ajouter et gérer les vidéos',
      href: '/admin/videos',
      visible: isContentCreator,
    },
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
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user.email}</p>
                <p className="text-xs text-muted-foreground">
                  {role ? roleLabels[role] : 'Aucun rôle'}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container-custom mx-auto px-4 md:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue dans l'espace d'administration d'AikidoConnect
          </p>
        </div>

        {/* Menu cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.filter(item => item.visible).map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>

        {/* Role-specific notices */}
        <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Vos permissions</h3>
              <p className="text-sm text-muted-foreground">
                {role === 'administrator' && (
                  "En tant qu'administrateur, vous avez accès à toutes les fonctionnalités : statistiques, gestion des utilisateurs, modification des contenus et ajout de vidéos."
                )}
                {role === 'editor' && (
                  "En tant que rédacteur, vous pouvez modifier les contenus du site et ajouter des vidéos."
                )}
                {role === 'content_creator' && (
                  "En tant que créateur de contenu, vous pouvez ajouter des vidéos au site."
                )}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
