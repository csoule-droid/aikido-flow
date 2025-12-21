import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff, FileText, Save } from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/aikido-logo.png';

interface TechnicalSheet {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const CATEGORIES = [
  { value: 'techniques-base', label: 'Techniques de base' },
  { value: 'techniques-avancees', label: 'Techniques avancées' },
  { value: 'armes', label: 'Armes' },
  { value: 'etiquette', label: 'Étiquette' },
  { value: 'histoire', label: 'Histoire' },
  { value: 'autre', label: 'Autre' },
];

export default function AdminTechnicalSheets() {
  const { user, isEditor, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [sheets, setSheets] = useState<TechnicalSheet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSheet, setEditingSheet] = useState<TechnicalSheet | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    category: '',
    published: false,
  });

  useEffect(() => {
    if (!authLoading && (!user || !isEditor)) {
      navigate('/admin');
    }
  }, [user, isEditor, authLoading, navigate]);

  useEffect(() => {
    fetchSheets();
  }, []);

  const fetchSheets = async () => {
    try {
      const { data, error } = await supabase
        .from('technical_sheets')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setSheets(data || []);
    } catch (error: any) {
      toast.error('Erreur lors du chargement des fiches');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: editingSheet ? formData.slug : generateSlug(title),
    });
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      toast.error('Le titre est requis');
      return;
    }
    if (!formData.slug.trim()) {
      toast.error('Le slug est requis');
      return;
    }

    try {
      if (editingSheet) {
        const { error } = await supabase
          .from('technical_sheets')
          .update({
            title: formData.title,
            slug: formData.slug,
            content: formData.content,
            category: formData.category || null,
            published: formData.published,
          })
          .eq('id', editingSheet.id);

        if (error) throw error;
        toast.success('Fiche mise à jour');
      } else {
        const { error } = await supabase
          .from('technical_sheets')
          .insert({
            title: formData.title,
            slug: formData.slug,
            content: formData.content,
            category: formData.category || null,
            published: formData.published,
            created_by: user?.id,
          });

        if (error) throw error;
        toast.success('Fiche créée');
      }

      setIsDialogOpen(false);
      resetForm();
      fetchSheets();
    } catch (error: any) {
      if (error.code === '23505') {
        toast.error('Ce slug existe déjà');
      } else {
        toast.error('Erreur lors de la sauvegarde');
      }
      console.error(error);
    }
  };

  const handleEdit = (sheet: TechnicalSheet) => {
    setEditingSheet(sheet);
    setFormData({
      title: sheet.title,
      slug: sheet.slug,
      content: sheet.content,
      category: sheet.category || '',
      published: sheet.published,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette fiche ?')) return;

    try {
      const { error } = await supabase
        .from('technical_sheets')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Fiche supprimée');
      fetchSheets();
    } catch (error: any) {
      toast.error('Erreur lors de la suppression');
      console.error(error);
    }
  };

  const togglePublished = async (sheet: TechnicalSheet) => {
    try {
      const { error } = await supabase
        .from('technical_sheets')
        .update({ published: !sheet.published })
        .eq('id', sheet.id);

      if (error) throw error;
      toast.success(sheet.published ? 'Fiche dépubliée' : 'Fiche publiée');
      fetchSheets();
    } catch (error: any) {
      toast.error('Erreur lors de la mise à jour');
      console.error(error);
    }
  };

  const resetForm = () => {
    setEditingSheet(null);
    setFormData({
      title: '',
      slug: '',
      content: '',
      category: '',
      published: false,
    });
  };

  const getCategoryLabel = (value: string | null) => {
    if (!value) return '-';
    return CATEGORIES.find((c) => c.value === value)?.label || value;
  };

  if (authLoading || isLoading) {
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
              <Link to="/admin/content">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Fiches techniques</h1>
              <p className="text-muted-foreground mt-1">
                Créez et modifiez les fiches techniques du site
              </p>
            </div>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle fiche
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingSheet ? 'Modifier la fiche' : 'Nouvelle fiche technique'}
                </DialogTitle>
                <DialogDescription>
                  Remplissez les informations de la fiche technique
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titre *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Ex: Ikkyo - Première technique"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug (URL) *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="ex: ikkyo-premiere-technique"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Publication</Label>
                    <div className="flex items-center gap-2 pt-2">
                      <Switch
                        checked={formData.published}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, published: checked })
                        }
                      />
                      <span className="text-sm text-muted-foreground">
                        {formData.published ? 'Publiée' : 'Brouillon'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Contenu</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Rédigez le contenu de la fiche technique..."
                    className="min-h-[300px] font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Vous pouvez utiliser du Markdown pour formater le contenu (titres, listes, gras, italique...)
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    {editingSheet ? 'Mettre à jour' : 'Créer la fiche'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{sheets.length}</p>
                <p className="text-sm text-muted-foreground">Total des fiches</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{sheets.filter((s) => s.published).length}</p>
                <p className="text-sm text-muted-foreground">Publiées</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <EyeOff className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{sheets.filter((s) => !s.published).length}</p>
                <p className="text-sm text-muted-foreground">Brouillons</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        {sheets.length === 0 ? (
          <div className="bg-muted/50 rounded-2xl p-12 text-center">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucune fiche technique</h3>
            <p className="text-muted-foreground mb-4">
              Commencez par créer votre première fiche technique
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Créer une fiche
            </Button>
          </div>
        ) : (
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titre</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Mise à jour</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sheets.map((sheet) => (
                  <TableRow key={sheet.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{sheet.title}</p>
                        <p className="text-xs text-muted-foreground">/{sheet.slug}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getCategoryLabel(sheet.category)}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          sheet.published
                            ? 'bg-green-500/10 text-green-600'
                            : 'bg-orange-500/10 text-orange-600'
                        }`}
                      >
                        {sheet.published ? (
                          <>
                            <Eye className="w-3 h-3" /> Publiée
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" /> Brouillon
                          </>
                        )}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(sheet.updated_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePublished(sheet)}
                          title={sheet.published ? 'Dépublier' : 'Publier'}
                        >
                          {sheet.published ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(sheet)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(sheet.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}
