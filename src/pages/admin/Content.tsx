import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, BookOpen, Info, Mail } from 'lucide-react';
import logo from '@/assets/aikido-logo.png';

export default function AdminContent() {
  const { user, isEditor, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isEditor)) {
      navigate('/admin');
    }
  }, [user, isEditor, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  const contentSections = [
    { icon: BookOpen, title: 'Pages de découverte', description: 'Modifier les contenus des pages Découvrir, Femmes, Jeunes, etc.', count: 5 },
    { icon: FileText, title: 'Pages techniques', description: 'Modifier les fiches techniques et le lexique', count: 8 },
    { icon: Info, title: 'Pages informatives', description: 'À propos, Ressources, Contact', count: 3 },
    { icon: Mail, title: 'Textes système', description: 'Messages, emails, notifications', count: 4 },
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
            <h1 className="text-3xl font-bold">Gestion des contenus</h1>
            <p className="text-muted-foreground mt-1">
              Modifiez les textes et contenus du site
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contentSections.map((section) => {
            const isClickable = section.title === 'Pages techniques';
            
            if (isClickable) {
              return (
                <Link 
                  key={section.title}
                  to="/admin/content/technical-sheets"
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <section.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{section.title}</h3>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {section.count} pages
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                    </div>
                  </div>
                </Link>
              );
            }
            
            return (
              <div 
                key={section.title}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <section.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{section.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {section.count} pages
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
