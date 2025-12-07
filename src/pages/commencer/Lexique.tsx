import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const essentialTerms = [
  { term: "Onegaishimasu", pronunciation: "o-né-ga-i-shi-mass", meaning: "S'il vous plaît (dit avant de pratiquer)", usage: "On le dit en saluant son partenaire avant de travailler ensemble." },
  { term: "Arigatou gozaimashita", pronunciation: "a-ri-ga-to go-za-i-ma-shi-ta", meaning: "Merci beaucoup", usage: "On le dit à la fin du travail avec un partenaire." },
  { term: "Sensei", pronunciation: "sén-séï", meaning: "Professeur, maître", usage: "Terme de respect pour s'adresser au professeur." },
  { term: "Rei", pronunciation: "réï", meaning: "Salut", usage: "Le salut qui ouvre et ferme chaque pratique." },
  { term: "Hajime", pronunciation: "ha-ji-mé", meaning: "Commencez", usage: "Signal du professeur pour démarrer la technique." },
  { term: "Yame", pronunciation: "ya-mé", meaning: "Arrêtez", usage: "Signal pour stopper et écouter les instructions." },
  { term: "Nage", pronunciation: "na-gué", meaning: "Celui qui fait la technique", usage: "Le pratiquant qui applique la technique de projection ou contrôle." },
  { term: "Uke", pronunciation: "ou-ké", meaning: "Celui qui reçoit la technique", usage: "Le pratiquant qui attaque et chute." },
  { term: "Seiza", pronunciation: "séï-za", meaning: "Position assise à genoux", usage: "Posture traditionnelle pour écouter les explications." },
  { term: "Tatami", pronunciation: "ta-ta-mi", meaning: "Le tapis de pratique", usage: "La surface sur laquelle on s'entraîne." },
  { term: "Dojo", pronunciation: "do-jo", meaning: "Lieu de pratique de la voie", usage: "La salle d'entraînement." },
  { term: "Ukemi", pronunciation: "ou-ké-mi", meaning: "Chute, réception", usage: "L'art de chuter sans se blesser." },
  { term: "Kamae", pronunciation: "ka-ma-é", meaning: "Garde, posture", usage: "La position de départ, prêt à agir." },
  { term: "Irimi", pronunciation: "i-ri-mi", meaning: "Entrer", usage: "Mouvement vers l'avant, dans l'attaque." },
  { term: "Tenkan", pronunciation: "tén-kan", meaning: "Pivoter", usage: "Rotation du corps pour rediriger l'attaque." },
  { term: "Ai hanmi", pronunciation: "aï han-mi", meaning: "Garde identique", usage: "Les deux partenaires ont le même pied en avant." },
  { term: "Gyaku hanmi", pronunciation: "gia-kou han-mi", meaning: "Garde opposée", usage: "Les partenaires ont un pied différent en avant." },
  { term: "Shomen", pronunciation: "cho-mén", meaning: "Face, frappe verticale", usage: "Attaque directe vers le front." },
  { term: "Yokomen", pronunciation: "yo-ko-mén", meaning: "Frappe latérale", usage: "Attaque sur le côté de la tête." },
  { term: "Zanshin", pronunciation: "zan-chin", meaning: "Vigilance maintenue", usage: "Rester attentif après la technique." },
];

export default function CommencerLexique() {
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
              Lexique du <span className="gradient-text">débutant</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Les 20 mots japonais essentiels pour ne pas être perdu lors de votre premier cours. 
              Pas besoin de tout retenir : vous les apprendrez naturellement en pratiquant.
            </p>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialTerms.map((item, index) => (
              <div key={item.term} className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs text-muted-foreground font-medium">{index + 1}.</span>
                  <span className="font-bold text-lg text-primary">{item.term}</span>
                </div>
                <p className="text-xs text-secondary font-medium mb-2 italic">[{item.pronunciation}]</p>
                <p className="font-medium mb-2">{item.meaning}</p>
                <p className="text-sm text-muted-foreground">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Conseils pour <span className="gradient-text">retenir</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Ne stressez pas.</strong> Personne ne s'attend à ce que 
              vous connaissiez ces termes dès le premier jour. Les anciens vous guideront.
            </p>
            <p>
              <strong className="text-foreground">Écoutez et imitez.</strong> Le meilleur apprentissage 
              se fait sur le tatami. Les mots viendront naturellement.
            </p>
            <p>
              <strong className="text-foreground">Commencez par les essentiels.</strong> "Onegaishimasu" 
              (avant) et "Arigatou gozaimashita" (après) : ces deux phrases montrent votre respect.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vocabulaire acquis ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explorez maintenant les techniques fondamentales de l'aïkido.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/techniques">
              Découvrir les techniques
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
