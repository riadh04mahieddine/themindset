import { audiowide, poppins } from '@/app/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: 'Comment puis-je réinitialiser mon mot de passe ?',
    answer: 'Pour le moment, la gestion de compte se fait directement via les services d\&apos;authentification (Apple, Google). Il n\&apos;y a pas de mot de passe spécifique à The Mindset.',
  },
  {
    question: 'L\&apos;application est-elle disponible sur Android ?',
    answer: 'Pas encore. Nous nous concentrons actuellement sur la version iOS. La version Android est dans notre feuille de route et nous vous tiendrons informés dès qu\&apos;elle sera disponible.',
  },
  {
    question: 'Comment puis-je suggérer une nouvelle fonctionnalité ?',
    answer: 'Nous adorons recevoir des idées de nos utilisateurs ! Envoyez-nous un e-mail à l\&apos;adresse de support ci-dessous avec votre suggestion. Nous lisons attentivement chaque proposition.',
  },
];

export default function Support() {
  return (
    <div className="bg-gradient-to-b from-sky-400 via-sky-800 to-gray-900 min-h-screen text-white">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className={`${audiowide.className} text-4xl md:text-5xl font-bold mb-8 text-center`}>Support & Aide</h1>
        
        <div className={`${poppins.className} space-y-12 bg-white/10 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/20`}>
          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Nous Contacter</h2>
            <p className="opacity-90">
              Pour toute question, problème technique ou suggestion, n&apos;hésitez pas à nous contacter. Notre équipe s&apos;engage à vous répondre dans les plus brefs délais.
            </p>
            <p className="mt-4">
              <span className="font-bold">Adresse e-mail du support :</span>
              <a href="mailto:support@themindset.app" className="ml-2 text-sky-300 hover:underline">
                support@themindset.app
              </a>
            </p>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Questions Fréquemment Posées (FAQ)</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/20 pb-4">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <p className="opacity-80 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
