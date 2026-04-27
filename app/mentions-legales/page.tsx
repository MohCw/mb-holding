import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: "Mentions légales du site groupembholding.com — Groupe MB Holding (Maître Bâtisseur).",
}

const sections = [
  {
    heading: 'Identité',
    body: "Ce site est le portail institutionnel du Groupe MB Holding (Maître Bâtisseur), société spécialisée dans la construction, l'ingénierie et l'immobilier en Afrique de l'Ouest, dont le siège principal est établi à Dakar, Sénégal. Pour toute question relative à ce site, vous pouvez nous joindre via les coordonnées professionnelles disponibles sur la page de contact.",
  },
  {
    heading: 'Contenu & Responsabilité',
    body: "Les informations présentées sur ce site sont fournies à titre informatif et de présentation institutionnelle. Elles ne constituent pas un engagement contractuel ni un conseil technique ou juridique contraignant. MB Holding se réserve le droit de modifier ou de retirer tout contenu sans préavis.",
  },
  {
    heading: 'Propriété intellectuelle',
    body: "Les textes, logotypes, compositions graphiques et contenus structurés de ce site sont la propriété exclusive du Groupe MB Holding. Les visuels illustratifs utilisés à titre de présentation peuvent être soumis aux droits de leurs auteurs respectifs et ne sauraient être reproduits sans leur accord. Toute reproduction ou exploitation des éléments appartenant à MB Holding sans accord écrit préalable est strictement interdite.",
  },
  {
    heading: 'Hébergement',
    body: "Ce site est hébergé sur une infrastructure cloud professionnelle susceptible de traiter des données de connexion standard (adresses IP, types de navigateurs) à des fins de sécurité, de débogage et d'optimisation des performances.",
  },
  {
    heading: 'Droit applicable',
    body: "Les présentes mentions légales sont régies par le droit applicable dans la juridiction de Dakar, Sénégal, où le Groupe MB Holding a son siège principal.",
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-40 pb-16 px-8 md:px-24 bg-white border-b border-[#acb3b4]/10">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 font-headline">
            Informations légales
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-headline mb-6">
            Mentions<br />
            <span className="text-primary">Légales</span>
          </h1>
          <div className="h-1 w-24 bg-primary" />
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-2xl space-y-12">

            <p className="text-xs uppercase tracking-widest text-[#acb3b4] font-body">
              Dernière mise à jour : 25 avril 2026
            </p>

            {sections.map(({ heading, body }) => (
              <div key={heading} className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground font-headline">
                  {heading}
                </h2>
                <p className="text-sm text-[#44475f] font-body leading-relaxed">{body}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}
