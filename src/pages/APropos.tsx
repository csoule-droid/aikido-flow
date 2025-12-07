import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Scale,
  FileText,
  Heart,
  ArrowRight
} from "lucide-react";
import logo from "@/assets/aikido-logo.png";

const values = [
  {
    icon: Target,
    title: "Mission éducative",
    description: "Rendre l'aïkido accessible au plus grand nombre grâce à un contenu pédagogique de qualité.",
  },
  {
    icon: Scale,
    title: "Neutralité",
    description: "Nous ne promouvons aucun club, fédération ou école en particulier. Notre approche est nationale et inclusive.",
  },
  {
    icon: FileText,
    title: "Rigueur éditoriale",
    description: "Chaque contenu est vérifié, sourcé, et rédigé dans un souci de clarté et d'exactitude.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Un ton accueillant, jamais intimidant. L'aïkido est pour tous, et notre site l'est aussi.",
  },
];

export default function APropos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              À propos d'<span className="gradient-text">AikidoConnect</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AikidoConnect est un projet éducatif national dédié à la découverte et à l'apprentissage 
              de l'aïkido. Notre mission : rendre cet art martial accessible, compréhensible et 
              inspirant pour tous les curieux.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Notre <span className="gradient-text">vision</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'aïkido est souvent méconnu ou mal compris. On le confond avec d'autres arts martiaux, 
                  on le croit réservé à une élite ou inaccessible aux débutants.
                </p>
                <p>
                  <strong className="text-foreground">Nous voulons changer cela.</strong> AikidoConnect 
                  a été créé pour offrir une porte d'entrée moderne, claire et bienveillante vers cet 
                  art martial unique.
                </p>
                <p>
                  Ici, pas de jargon intimidant, pas de promotion commerciale. Juste du contenu 
                  pédagogique pensé pour vous accompagner, que vous soyez simplement curieux 
                  ou prêt à enfiler un keikogi.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={logo} alt="AikidoConnect" className="max-w-[280px] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nos <span className="gradient-text">valeurs</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial charter */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">
            Charte <span className="gradient-text">éditoriale</span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Chaque article, fiche technique et guide publié sur AikidoConnect respecte 
              les principes suivants :
            </p>
            
            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Accessibilité :</strong> Un langage clair, 
                des explications progressives, des termes japonais toujours traduits.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Exactitude :</strong> Des informations 
                vérifiées et sourcées, issues de références reconnues dans le monde de l'aïkido.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Neutralité :</strong> Aucune promotion 
                de club, fédération ou école. Nous présentons l'aïkido dans sa diversité.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Évolutivité :</strong> Le site 
                s'enrichit régulièrement de nouveaux contenus : articles, fiches, vidéos.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Une idée, une suggestion ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            AikidoConnect est un projet vivant. Vos retours nous aident à l'améliorer.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
