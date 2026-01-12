import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { logError } from '@/lib/logger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  UserPlus, 
  Mail, 
  Trash2, 
  Shield, 
  PenSquare, 
  Video,
  Copy,
  Check
} from 'lucide-react';
import logo from '@/assets/aikido-logo.png';
import { z } from 'zod';

type AppRole = 'administrator' | 'editor' | 'content_creator';

interface UserWithRole {
  user_id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: AppRole;
  created_at: string;
}

interface Invitation {
  id: string;
  email: string;
  role: AppRole;
  token: string;
  expires_at: string;
  accepted_at: string | null;
  created_at: string;
}

const roleLabels: Record<AppRole, string> = {
  administrator: 'Administrateur',
  editor: 'Rédacteur',
  content_creator: 'Créateur de contenu',
};

const roleIcons: Record<AppRole, typeof Shield> = {
  administrator: Shield,
  editor: PenSquare,
  content_creator: Video,
};

const inviteSchema = z.object({
  email: z.string().email("Email invalide").max(255),
  role: z.enum(['administrator', 'editor', 'content_creator']),
});

export default function AdminUsers() {
  const { user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<AppRole>('content_creator');
  const [isInviting, setIsInviting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/admin');
    }
  }, [user, isAdmin, isLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    setLoadingData(true);
    
    // Fetch users with roles
    const { data: rolesData, error: rolesError } = await supabase
      .from('user_roles')
      .select(`
        user_id,
        role,
        created_at,
        profiles!inner(email, first_name, last_name)
      `);

    if (rolesError) {
      logError('Users fetch', rolesError);
    } else if (rolesData) {
      const formattedUsers: UserWithRole[] = rolesData.map((item: any) => ({
        user_id: item.user_id,
        email: item.profiles.email,
        first_name: item.profiles.first_name,
        last_name: item.profiles.last_name,
        role: item.role as AppRole,
        created_at: item.created_at,
      }));
      setUsers(formattedUsers);
    }

    // Fetch pending invitations
    const { data: invitationsData, error: invitationsError } = await supabase
      .from('invitations')
      .select('*')
      .is('accepted_at', null)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false });

    if (invitationsError) {
      logError('Invitations fetch', invitationsError);
    } else {
      setInvitations(invitationsData as Invitation[] || []);
    }

    setLoadingData(false);
  };

  const handleInvite = async () => {
    const validation = inviteSchema.safeParse({ email: inviteEmail, role: inviteRole });
    if (!validation.success) {
      toast({
        title: "Erreur de validation",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsInviting(true);

    // Check if user already exists
    const existingUser = users.find(u => u.email.toLowerCase() === inviteEmail.toLowerCase());
    if (existingUser) {
      toast({
        title: "Utilisateur existant",
        description: "Cet email est déjà associé à un compte.",
        variant: "destructive",
      });
      setIsInviting(false);
      return;
    }

    // Check if invitation already exists
    const existingInvitation = invitations.find(i => i.email.toLowerCase() === inviteEmail.toLowerCase());
    if (existingInvitation) {
      toast({
        title: "Invitation existante",
        description: "Une invitation a déjà été envoyée à cet email.",
        variant: "destructive",
      });
      setIsInviting(false);
      return;
    }

    const { data, error } = await supabase
      .from('invitations')
      .insert({
        email: inviteEmail.toLowerCase(),
        role: inviteRole,
        invited_by: user?.id,
      })
      .select()
      .single();

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de créer l'invitation.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Invitation créée",
        description: "L'invitation a été créée avec succès. Copiez le lien pour l'envoyer.",
      });
      setInvitations([data as Invitation, ...invitations]);
      setInviteEmail('');
      setDialogOpen(false);
    }

    setIsInviting(false);
  };

  const handleUpdateRole = async (userId: string, newRole: AppRole) => {
    const targetUser = users.find(u => u.user_id === userId);
    if (targetUser?.email.toLowerCase() === 'clenadant@gmail.com') {
      toast({
        title: "Action non autorisée",
        description: "Vous ne pouvez pas modifier le rôle de l'administrateur général.",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('user_roles')
      .update({ role: newRole })
      .eq('user_id', userId);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de modifier le rôle.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Rôle modifié",
        description: "Le rôle a été mis à jour avec succès.",
      });
      setUsers(users.map(u => u.user_id === userId ? { ...u, role: newRole } : u));
    }
  };

  const handleDeleteInvitation = async (invitationId: string) => {
    const { error } = await supabase
      .from('invitations')
      .delete()
      .eq('id', invitationId);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'invitation.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Invitation supprimée",
        description: "L'invitation a été supprimée.",
      });
      setInvitations(invitations.filter(i => i.id !== invitationId));
    }
  };

  const copyInviteLink = (token: string) => {
    const link = `${window.location.origin}/admin/auth?token=${token}`;
    navigator.clipboard.writeText(link);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
    toast({
      title: "Lien copié",
      description: "Le lien d'invitation a été copié dans le presse-papier.",
    });
  };

  if (isLoading || loadingData) {
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
              <h1 className="text-3xl font-bold">Gestion des utilisateurs</h1>
              <p className="text-muted-foreground mt-1">
                Gérez les accès au backoffice
              </p>
            </div>
          </div>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <UserPlus className="w-4 h-4 mr-2" />
                Inviter un utilisateur
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Inviter un utilisateur</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="invite-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="invite-email"
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="pl-10"
                      placeholder="email@exemple.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invite-role">Rôle</Label>
                  <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as AppRole)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrator">Administrateur</SelectItem>
                      <SelectItem value="editor">Rédacteur</SelectItem>
                      <SelectItem value="content_creator">Créateur de contenu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  variant="hero" 
                  className="w-full" 
                  onClick={handleInvite}
                  disabled={isInviting || !inviteEmail}
                >
                  {isInviting ? 'Envoi...' : 'Créer l\'invitation'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Pending invitations */}
        {invitations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Invitations en attente</h2>
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Expire le</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invitations.map((invitation) => {
                    const RoleIcon = roleIcons[invitation.role];
                    return (
                      <TableRow key={invitation.id}>
                        <TableCell className="font-medium">{invitation.email}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <RoleIcon className="w-4 h-4 text-muted-foreground" />
                            {roleLabels[invitation.role]}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(invitation.expires_at).toLocaleDateString('fr-FR')}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyInviteLink(invitation.token)}
                            >
                              {copiedToken === invitation.token ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteInvitation(invitation.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Users list */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Utilisateurs ({users.length})</h2>
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utilisateur</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead>Inscrit le</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((u) => {
                  const RoleIcon = roleIcons[u.role];
                  const isSuperAdmin = u.email.toLowerCase() === 'clenadant@gmail.com';
                  return (
                    <TableRow key={u.user_id}>
                      <TableCell className="font-medium">
                        {u.first_name && u.last_name 
                          ? `${u.first_name} ${u.last_name}` 
                          : 'Non renseigné'}
                      </TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>
                        {isSuperAdmin ? (
                          <span className="inline-flex items-center gap-2 text-primary font-medium">
                            <Shield className="w-4 h-4" />
                            Administrateur général
                          </span>
                        ) : (
                          <Select 
                            value={u.role} 
                            onValueChange={(v) => handleUpdateRole(u.user_id, v as AppRole)}
                          >
                            <SelectTrigger className="w-48">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="administrator">Administrateur</SelectItem>
                              <SelectItem value="editor">Rédacteur</SelectItem>
                              <SelectItem value="content_creator">Créateur de contenu</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      </TableCell>
                      <TableCell>
                        {new Date(u.created_at).toLocaleDateString('fr-FR')}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Info notice */}
        <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Sécurité des comptes</h3>
              <p className="text-sm text-muted-foreground">
                Les utilisateurs ne peuvent pas supprimer leur compte. L'administrateur général 
                (clenadant@gmail.com) ne peut pas être modifié ou supprimé.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
