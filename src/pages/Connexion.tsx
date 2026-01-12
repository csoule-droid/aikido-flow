import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, Mail, ArrowLeft } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import logo from "@/assets/aikido-logo.png";

const loginSchema = z.object({
  email: z.string().trim().email("Adresse email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

const resetSchema = z.object({
  email: z.string().trim().email("Adresse email invalide"),
});

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const { toast } = useToast();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "password") fieldErrors.password = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Connexion réussie",
      description: "Bienvenue sur AikidoConnect !",
    });

    navigate("/");
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = resetSchema.safeParse({ email });
    if (!result.success) {
      setErrors({ email: result.error.errors[0]?.message });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/connexion`,
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer l'email de réinitialisation.",
        variant: "destructive",
      });
      return;
    }

    setResetEmailSent(true);
    toast({
      title: "Email envoyé",
      description: "Vérifiez votre boîte de réception pour réinitialiser votre mot de passe.",
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-3xl shadow-card border border-border/50 p-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link to="/">
                <img src={logo} alt="AikidoConnect" className="h-auto w-32" />
              </Link>
            </div>

            {showResetForm ? (
              // Reset Password Form
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Mot de passe oublié
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    {resetEmailSent
                      ? "Un email de réinitialisation vous a été envoyé."
                      : "Entrez votre email pour recevoir un lien de réinitialisation."}
                  </p>
                </div>

                {!resetEmailSent ? (
                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Adresse email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="reset-email"
                          type="email"
                          placeholder="votre@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le lien"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Vérifiez votre boîte de réception et suivez les instructions.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => {
                    setShowResetForm(false);
                    setResetEmailSent(false);
                    setErrors({});
                  }}
                  className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Retour à la connexion
                </button>
              </>
            ) : (
              // Login Form
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Connexion
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Connectez-vous à votre compte AikidoConnect
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? "border-destructive" : ""}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">{errors.password}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Connexion..." : "Se connecter"}
                  </Button>
                </form>

                <button
                  onClick={() => {
                    setShowResetForm(true);
                    setErrors({});
                  }}
                  className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors w-full text-center"
                >
                  Mot de passe oublié ?
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
