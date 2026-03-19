"use client";
import { useMemo, useState } from "react";

const articles = [
  "Comment vendre sa maison rapidement à Montréal",
  "Les 7 erreurs à éviter avant de mettre en vente",
  "Comment connaître la vraie valeur de votre propriété",
  "Acheter une première maison au Québec: étapes clés",
  "Faut-il rénover avant de vendre?",
  "Condo ou maison: quoi choisir selon votre budget?",
  "Évaluation immobilière à Laval: ce qu’il faut savoir",
  "Comment préparer sa maison avant les visites",
  "Les coûts à prévoir avant d’acheter une propriété",
  "Pourquoi travailler avec un courtier RE/MAX à Montréal",
  "Vendre une propriété héritée: les points à vérifier",
  "Maison, plex ou condo: quoi acheter en premier?",
];

const testimonials = [
  {
    name: "Client vendeur à Montréal",
    text: "Approche très professionnelle, excellent suivi et mise en marché sérieuse. Nous avons senti une vraie stratégie du début à la fin.",
  },
  {
    name: "Client acheteur à Laval",
    text: "Malek nous a aidés à avancer avec confiance. Analyse des propriétés, conseils clairs et accompagnement constant jusqu’à la transaction.",
  },
  {
    name: "Client investisseur",
    text: "Très bonne lecture du marché, négociation solide et excellente capacité à identifier les bonnes opportunités immobilières.",
  },
];

const faqs = [
  {
    q: "Combien vaut ma propriété aujourd’hui?",
    a: "Une estimation sérieuse repose sur les ventes comparables récentes, l’emplacement, l’état réel de la propriété et la dynamique actuelle du marché dans votre secteur.",
  },
  {
    q: "Combien de temps faut-il pour vendre?",
    a: "Le délai varie selon le prix demandé, la préparation, la qualité des photos, la mise en marché et la demande réelle dans le secteur. Une bonne stratégie permet souvent de vendre plus rapidement et dans de meilleures conditions.",
  },
  {
    q: "Travaillez-vous avec des acheteurs et des vendeurs?",
    a: "Oui. Le site est structuré pour attirer les deux profils, avec une forte priorité sur les vendeurs, les demandes d’évaluation et les propriétaires qui veulent un accompagnement clair.",
  },
  {
    q: "Pouvez-vous aider dans un dossier plus complexe ou urgent?",
    a: "Oui. Vente rapide, dossier successoral, besoin de repositionner une propriété, projet d’investissement ou situation nécessitant une approche plus stratégique peuvent être analysés au cas par cas.",
  },
];

export default function MalekMezidiLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = useMemo(
    () => [
      { value: "17+", label: "Années d’expérience" },
      { value: "RE/MAX", label: "Force du réseau" },
      { value: "Montréal", label: "Laval • Rive-Nord" },
      { value: "24h", label: "Retour sur demande" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3">
            <img src="/remax-logo.png" alt="RE/MAX" className="h-11 w-auto" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-600">RE/MAX</p>
              <p className="text-lg font-bold leading-none">Malek Mezidi</p>
              <p className="text-xs text-slate-600 sm:text-sm">Courtier immobilier résidentiel</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#accueil" className="text-sm font-medium hover:text-red-600">Accueil</a>
            <a href="#vendre" className="text-sm font-medium hover:text-red-600">Vendre</a>
            <a href="#acheter" className="text-sm font-medium hover:text-red-600">Acheter</a>
            <a href="#secteurs" className="text-sm font-medium hover:text-red-600">Secteurs</a>
            <a href="#articles" className="text-sm font-medium hover:text-red-600">Articles</a>
            <a href="#faq" className="text-sm font-medium hover:text-red-600">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-red-600">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:5146593233"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500"
            >
              514-659-3233
            </a>
            <a
              href="#formulaire"
              className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Évaluation gratuite
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold md:hidden"
          >
            Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Accueil</a>
              <a href="#vendre" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Vendre</a>
              <a href="#acheter" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Acheter</a>
              <a href="#secteurs" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Secteurs</a>
              <a href="#articles" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Articles</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">FAQ</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Contact</a>
              <a href="#formulaire" onClick={() => setMobileMenuOpen(false)} className="rounded-2xl bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white">
                Obtenir une évaluation gratuite
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="accueil" className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-25">
          <div className="h-full w-full bg-[linear-gradient(115deg,rgba(15,23,42,0.86),rgba(15,23,42,0.52))]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24 items-center">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Montréal • Laval • Rive-Nord • Évaluation gratuite
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Vendez avec une stratégie claire. Achetez avec un avantage réel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Malek Mezidi, courtier immobilier RE/MAX, accompagne vendeurs, acheteurs et investisseurs avec une approche structurée, une mise en marché sérieuse et un suivi orienté résultats.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#formulaire"
                className="rounded-2xl bg-red-600 px-7 py-4 text-center text-base font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Obtenir mon évaluation gratuite
              </a>
              <a
                href="tel:5146593233"
                className="rounded-2xl border border-white/25 px-7 py-4 text-center text-base font-semibold text-white transition hover:border-white/50"
              >
                Appeler maintenant
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Vendeurs</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Acheteurs</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Investisseurs</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Dossiers urgents</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/malek-mezidi.jpg"
                alt="Malek Mezidi courtier immobilier"
                className="h-[500px] w-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">Vendre</p>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Vendre au meilleur prix</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Évaluation, positionnement, mise en marché et négociation pour maximiser la valeur de votre propriété.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">Acheter</p>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Acheter avec méthode</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Analyse du marché, sélection des propriétés et accompagnement jusqu’à l’offre d’achat et la signature.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">Stratégie</p>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Situations complexes ou urgentes</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Dossier successoral, vente rapide, repositionnement d’un actif ou projet d’investissement: approche sur mesure.
            </p>
          </div>
        </div>
      </section>

      <section id="vendre" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Pour les vendeurs</p>
            <h3 className="mt-4 text-3xl font-bold">Une stratégie claire pour vendre plus vite et mieux</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Analyse de marché, positionnement du prix, plan de mise en marché, mise en valeur et négociation structurée pour défendre votre valeur.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>• Analyse comparative de marché</li>
              <li>• Plan de commercialisation performant</li>
              <li>• Conseils avant mise en vente</li>
              <li>• Suivi sérieux jusqu’au notaire</li>
            </ul>
            <a href="#formulaire" className="mt-8 inline-block rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5">
              Demander mon évaluation
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Pour les acheteurs</p>
            <h3 className="mt-4 text-3xl font-bold text-slate-950">Achetez avec méthode et sécurité</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Ciblage des bonnes opportunités, lecture du marché, analyse de la valeur, accompagnement à l’offre d’achat et coordination jusqu’à la prise de possession.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Accompagnement du début à la remise des clés</li>
              <li>• Lecture stratégique du marché local</li>
              <li>• Négociation orientée résultat</li>
              <li>• Références vers les bons professionnels</li>
            </ul>
            <a href="#formulaire" className="mt-8 inline-block rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-900 transition hover:border-slate-500">
              Discuter de mon projet d’achat
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Pourquoi cette version est meilleure</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Pensée pour convertir</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Le message principal, les formulaires visibles et les appels à l’action répétés rendent la page beaucoup plus efficace qu’un site vitrine classique.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">SEO local</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Faite pour Google</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Cette base permet d’ajouter des pages par ville, des contenus vendeur/acheteur et des articles de fond pour capter des leads organiques.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Positionnement</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Plus expert, plus premium</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Le ton et la structure projettent une image plus forte: courtier d’expérience, conseiller stratégique et partenaire fiable pour vendre ou acheter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Preuve sociale</p>
              <h3 className="mt-3 text-3xl font-bold">Une présence professionnelle qui rassure avant même le premier appel</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Cette section est conçue pour recevoir vos vrais témoignages et renforcer la crédibilité de votre positionnement RE/MAX auprès des vendeurs, acheteurs et investisseurs.
              </p>
            </div>
            <div className="grid gap-6">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm leading-7 text-slate-200">“{item.text}”</p>
                  <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Propriétaires en situation urgente</p>
              <h3 className="mt-3 text-3xl font-bold text-slate-950">Une approche discrète et structurée</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Certains dossiers exigent plus qu’une simple mise en marché standard. Vente rapide, contexte familial, succession, repositionnement ou autres enjeux immobiliers peuvent nécessiter une analyse plus stratégique.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Approche confidentielle</li>
                <li>• Analyse réaliste des options</li>
                <li>• Accompagnement structuré</li>
                <li>• Plan d’action adapté au dossier</li>
              </ul>
              <a href="#formulaire" className="mt-8 inline-block rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:opacity-95">
                Discuter de ma situation
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Positionnement investisseur</p>
              <h3 className="mt-3 text-3xl font-bold text-slate-950">Un angle différenciateur pour votre marque</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Cette section donne de la profondeur à votre image: pas seulement courtier, mais aussi conseiller capable de comprendre la valeur, la stratégie, la vitesse d’exécution et les opportunités immobilières.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Lecture stratégique du marché</li>
                <li>• Vision vendeur et acquéreur</li>
                <li>• Meilleure compréhension de la valeur</li>
                <li>• Accompagnement sur dossiers à potentiel</li>
              </ul>
              <a href="#formulaire" className="mt-8 inline-block rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-900 transition hover:border-slate-500">
                Parler de mon projet immobilier
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Blog immobilier</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">Articles pour attirer du trafic Google</h3>
          </div>
          <a href="#formulaire" className="text-sm font-semibold text-red-600">Créer votre stratégie SEO →</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((title) => (
            <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">Article SEO</p>
              <h4 className="mt-3 text-xl font-bold text-slate-950">{title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Contenu pensé pour attirer des prospects qualifiés, renforcer votre expertise et les diriger vers vos formulaires.
              </p>
              <a href="#formulaire" className="mt-4 inline-block text-sm font-semibold text-slate-950">
                En savoir plus →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">FAQ</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">Questions fréquentes</h3>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q} className="rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between rounded-[1.25rem] px-5 py-4 text-left"
                  >
                    <span className="pr-6 text-base font-semibold text-slate-950">{item.q}</span>
                    <span className="text-xl font-light text-slate-500">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Contact</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">Prêt à lancer une version beaucoup plus forte de votre site immobilier?</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Cette version finale est conçue pour être plus réaliste, plus premium et plus vendeuse. Il reste à intégrer vos vraies photos, vos vrais témoignages, votre identité RE/MAX finale et votre identifiant Formspree.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="space-y-4 text-sm text-slate-700">
              <p><span className="font-semibold text-slate-950">Nom:</span> Malek Mezidi</p>
              <p><span className="font-semibold text-slate-950">Téléphone:</span> 514-659-3233</p>
              <p><span className="font-semibold text-slate-950">Positionnement:</span> Courtier immobilier RE/MAX</p>
              <p><span className="font-semibold text-slate-950">Objectif:</span> Générer plus de demandes vendeurs et acheteurs</p>
              <p><span className="font-semibold text-slate-950">Étape suivante:</span> Intégrer photo, branding et Formspree</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#formulaire" className="rounded-2xl bg-red-600 px-6 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5">
                Recevoir des demandes
              </a>
              <a href="tel:5146593233" className="rounded-2xl border border-slate-300 px-6 py-4 text-center font-semibold text-slate-900 transition hover:border-slate-500">
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <img src="/remax-logo.png" alt="RE/MAX" className="h-6 w-auto" />
            <p className="mt-3 text-lg font-bold text-white">Malek Mezidi</p>
            <p className="mt-2 text-sm leading-6">Courtier immobilier résidentiel</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Navigation</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>Accueil</p>
              <p>Vendre</p>
              <p>Acheter</p>
              <p>Articles</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Secteurs</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>Montréal</p>
              <p>Laval</p>
              <p>Rive-Nord</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Coordonnées</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>514-659-3233</p>
              <p>Formulaire connecté à Formspree</p>
              <p>Site pensé pour SEO + conversion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
