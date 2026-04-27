import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: "Politique de confidentialité et protection des données personnelles — Groupe MB Holding (Maître Bâtisseur).",
}

const sections = [
  {
    heading: 'Identité',
    body: "Ce site est le portail institutionnel du Groupe MB Holding (Maître Bâtisseur). Pour toute question relative au traitement de vos données personnelles, vous pouvez nous joindre via les coordonnées professionnelles disponibles sur la page de contact.",
  },
  {
    heading: 'Collecte & finalité',
    body: "Nous ne traitons que les informations personnelles — nom et adresse email — que vous nous communiquez volontairement lors de la soumission d'un formulaire de contact. Ces informations sont utilisées exclusivement pour traiter votre demande et faciliter nos échanges professionnels. Elles ne font l'objet d'aucune utilisation commerciale, de prospection ou de revente à des tiers.",
  },
  {
    heading: 'Conservation & sécurité',
    body: "Vos informations de contact sont conservées uniquement pour la durée nécessaire au traitement de votre demande, et au plus tard trois ans à compter de notre dernier échange. Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données tout au long de cette période.",
  },
  {
    heading: 'Services tiers',
    body: "Ce site est hébergé sur une infrastructure cloud professionnelle susceptible de traiter des données de connexion standard (adresses IP, types de navigateurs) à des fins de sécurité, de débogage et d'optimisation des performances. Nous utilisons également un service d'analyse d'audience qui collecte des données de navigation de manière anonymisée afin d'améliorer l'expérience proposée sur ce site.",
  },
  {
    heading: 'Vos droits',
    body: "Conformément à la loi sénégalaise n°2008-12 sur la protection des données à caractère personnel, vous disposez des droits d'accès, de rectification et de suppression de toute information personnelle que vous nous avez communiquée. Pour exercer ces droits, veuillez nous contacter directement via la page de contact.",
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="pt-40 pb-16 px-8 md:px-24 bg-white border-b border-[#acb3b4]/10">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 font-headline">
            Protection des données
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-headline mb-6">
            Politique de<br />
            <span className="text-primary">Confidentialité</span>
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
