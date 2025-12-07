import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shirt, 
  ArrowRight,
  CheckCircle2,
  Info
} from "lucide-react";

const equipment = [
  {
    name: "Keikogi (tenue)",
    description: "Veste et pantalon blancs en coton épais. C'est la tenue de base pour tous les pratiquants.",
    essential: true,
    price: "30-80€",
    tips: "Prenez une taille au-dessus car le coton rétrécit au lavage. Évitez les tenues trop fines.",
  },
  {
    name: "Obi (ceinture)",
    description: "Ceinture blanche pour les débutants. Elle maintient la veste et symbolise le niveau.",
    essential: true,
    price: "5-10€",
    tips: "Souvent fournie avec le keikogi. La couleur indique le grade.",
  },
  {
    name: "Zoori (sandales)",
    description: "Sandales pour se déplacer hors du tatami. On ne marche jamais pieds nus hors du tapis.",
    essential: false,
    price: "10-20€",
    tips: "Des tongs simples font l'affaire au début.",
  },
  {
    name: "Bokken (sabre en bois)",
    description: "Réplique du sabre japonais. Utilisé pour certains exercices et katas.",
    essential: false,
    price: "15-40€",
    tips: "Attendez que le sensei vous indique quand en acheter un.",
  },
  {
    name: "Jo (bâton)",
    description: "Bâton d'environ 1m28. Travail sur la distance et les déplacements.",
    essential: false,
    price: "15-30€",
    tips: "Comme le bokken, attendez les instructions du professeur.",
  },
  {
    name: "Hakama",
    description: "Pantalon large traditionnel porté par les gradés. Symbole de progression.",
    essential: false,
    price: "80-150€",
    tips: "Généralement porté à partir du 1er ou 2e kyu selon les dojos.",
  },
];

export default function CommencerEquipement() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <Link to="/commencer" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
              ← Retour à Commencer
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Tenue & <span className="gradient-text">matériel</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pas besoin de grand-chose pour débuter l'aïkido. Une tenue confortable suffit 
              pour les premiers cours. Voici tout ce qu'il faut savoir sur l'équipement.
            </p>
          </div>
        </div>
      </section>

      {/* First class */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-secondary/10 rounded-3xl p-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-secondary" />
              <h2 className="text-xl font-bold">Pour votre premier cours</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Vous n'avez pas besoin d'acheter de tenue pour essayer l'aïkido. Apportez simplement :
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Un pantalon de jogging ou legging",
                "Un t-shirt ample (manches courtes ou longues)",
                "Pas de chaussures sur le tatami",
                "Pas de bijoux ni de montre",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Equipment list */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            L'équipement <span className="gradient-text">complet</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <div key={item.name} className="bg-card rounded-2xl p-6 relative">
                {item.essential && (
                  <span className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    Essentiel
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <Shirt className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">{item.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="text-sm mb-3">
                  <span className="font-medium">Prix indicatif : </span>
                  <span className="text-secondary font-semibold">{item.price}</span>
                </div>
                <div className="bg-muted/50 rounded-xl p-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Conseil : </span>
                    {item.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care tips */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Entretien du <span className="gradient-text">keikogi</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Lavage :</strong> Lavez votre keikogi après chaque 
              entraînement à 30-40°C. Le premier lavage peut faire rétrécir le tissu de 5-10%.
            </p>
            <p>
              <strong className="text-foreground">Séchage :</strong> Évitez le sèche-linge. Faites 
              sécher à l'air libre, de préférence à l'ombre pour éviter le jaunissement.
            </p>
            <p>
              <strong className="text-foreground">Repassage :</strong> Repassez à température moyenne. 
              Un keikogi bien entretenu montre le respect de la pratique.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt pour le tatami ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Découvrez maintenant le vocabulaire essentiel pour votre premier cours.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/commencer/lexique">
              Voir le lexique débutant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
