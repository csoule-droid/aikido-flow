import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Lock, Mail, User, Eye, EyeOff } from 'lucide-react';
import logo from '@/assets/aikido-logo.png';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email("Email invalide").max(255),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").max(100),
});

const signupSchema = loginSchema.extend({
  firstName: z.string().min(1, "Prénom requis").max(50),
  lastName: z.string().min(1, "Nom requis").max(50),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export default function AdminAuth() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [isSignUp, setIsSignUp] = useState(!!token);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invitationValid, setInvitationValid] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { signIn, signUp, user, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) {
      navigate('/admin');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (token) {
      checkInvitation();
    }
  }, [token]);

  const checkInvitation = async () => {
    if (!token) return;
    
    // Validate token format (64 hex characters)
    if (!/^[0-9a-f]{64}$/i.test(token)) {
      setInvitationValid(false);
      toast({
        title: "Invitation invalide",
        description: "Format du lien d'invitation incorrect.",
        variant: "destructive",
      });
      return;
    }
    
    // Use secure RPC function instead of direct table access
    const { data, error } = await supabase.rpc('get_invitation_by_token', { _token: token });

    if (error || !data || data.length === 0) {
      setInvitationValid(false);
      toast({
        title: "Invitation invalide",
        description: "Ce lien d'invitation n'est pas valide ou a expiré.",
        variant: "destructive",
      });
      return;
    }

    const invitation = data[0];
    setInvitationValid(true);
    setEmail(invitation.email);
    setIsSignUp(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      if (isSignUp) {
        const result = signupSchema.safeParse({ email, password, confirmPassword, firstName, lastName });
        if (!result.success) {
          const fieldErrors: Record<string, string> = {};
          result.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as string] = err.message;
            }
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        const { error } = await signUp(email, password, firstName, lastName);
        if (error) {
          if (error.message.includes('already registered')) {
            toast({
              title: "Compte existant",
              description: "Un compte existe déjà avec cet email. Veuillez vous connecter.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Erreur",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Compte créé",
            description: "Votre compte a été créé avec succès.",
          });
          navigate('/admin');
        }
      } else {
        const result = loginSchema.safeParse({ email, password });
        if (!result.success) {
          const fieldErrors: Record<string, string> = {};
          result.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as string] = err.message;
            }
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Erreur de connexion",
            description: "Email ou mot de passe incorrect.",
            variant: "destructive",
          });
        } else {
          navigate('/admin');
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  if (token && invitationValid === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Invitation invalide</h1>
          <p className="text-muted-foreground mb-6">
            Ce lien d'invitation n'est pas valide, a expiré, ou a déjà été utilisé.
          </p>
          <Button variant="hero" onClick={() => navigate('/admin/auth')}>
            Retour à la connexion
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-md w-full">
        <div className="bg-card rounded-3xl shadow-card p-8 border border-border/50">
          <div className="text-center mb-8">
            <img src={logo} alt="AikidoConnect" className="h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">
              {isSignUp ? 'Créer votre compte' : 'Administration'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {isSignUp 
                ? 'Créez votre mot de passe pour accéder au backoffice' 
                : 'Connectez-vous pour accéder au backoffice'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10"
                      placeholder="Jean"
                      required={isSignUp}
                      maxLength={50}
                    />
                  </div>
                  {errors.firstName && <p className="text-destructive text-sm">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Dupont"
                    required={isSignUp}
                    maxLength={50}
                  />
                  {errors.lastName && <p className="text-destructive text-sm">{errors.lastName}</p>}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="vous@exemple.com"
                  required
                  disabled={!!token && invitationValid === true}
                  maxLength={255}
                />
              </div>
              {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="••••••••"
                  required
                  maxLength={100}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-destructive text-sm">{errors.password}</p>}
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10"
                    placeholder="••••••••"
                    required
                    maxLength={100}
                  />
                </div>
                {errors.confirmPassword && <p className="text-destructive text-sm">{errors.confirmPassword}</p>}
              </div>
            )}

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              disabled={isSubmitting || (token && invitationValid === null)}
            >
              {isSubmitting 
                ? 'Chargement...' 
                : isSignUp 
                  ? 'Créer mon compte' 
                  : 'Se connecter'}
            </Button>
          </form>

          {!token && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              L'accès au backoffice est réservé aux utilisateurs invités.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
