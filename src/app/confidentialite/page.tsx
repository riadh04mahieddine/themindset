import { audiowide, poppins } from '@/app/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Confidentialite() {
  return (
    <div className="bg-gradient-to-b from-sky-400 via-sky-800 to-gray-900 min-h-screen text-white">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className={`${audiowide.className} text-4xl md:text-5xl font-bold mb-8 text-center`}>Politique de Confidentialité</h1>
        <div className={`${poppins.className} space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/20`}>
          <p>Dernière mise à jour : 18 juillet 2025</p>

          <h2 className="text-2xl font-bold pt-4">1. Introduction</h2>
          <p>Bienvenue sur The Mindset. Nous nous engageons à protéger la vie privée de nos utilisateurs. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et les droits que vous avez sur vos données.</p>

          <h2 className="text-2xl font-bold pt-4">2. Informations que nous collectons</h2>
          <p>Nous pouvons collecter les types d&apos;informations suivants :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Informations fournies par l&apos;utilisateur :</strong> Lors de la création d&apos;un compte, nous pouvons collecter votre nom, votre adresse e-mail et d&apos;autres informations de profil.</li>
            <li><strong>Contenu généré par l&apos;utilisateur :</strong> Nous collectons les notes, les favoris et les réponses aux dilemmes que vous créez et enregistrez dans l&apos;application.</li>
            <li><strong>Données d&apos;utilisation :</strong> Nous collectons des informations sur la manière dont vous interagissez avec notre application, telles que les fonctionnalités que vous utilisez et le temps que vous y passez, afin d&apos;améliorer nos services.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">3. Utilisation de vos informations</h2>
          <p>Nous utilisons les informations collectées pour :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Fournir, maintenir et améliorer notre application.</li>
            <li>Personnaliser votre expérience.</li>
            <li>Communiquer avec vous, notamment pour vous envoyer des notifications et des mises à jour.</li>
            <li>Assurer la sécurité de notre plateforme.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">4. Partage de vos informations</h2>
          <p>Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Avec votre consentement explicite.</li>
            <li>Pour se conformer à une obligation légale.</li>
            <li>Avec des fournisseurs de services tiers qui nous aident à exploiter notre application (par exemple, des hébergeurs de données), sous réserve d&apos;accords de confidentialité stricts.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">5. Sécurité de vos données</h2>
          <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos informations contre l&apos;accès, la modification ou la destruction non autorisés. Cependant, aucune méthode de transmission sur Internet n&apos;est sûre à 100%.</p>

          <h2 className="text-2xl font-bold pt-4">6. Vos droits</h2>
          <p>Conformément à la réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles. Vous pouvez exercer ces droits en nous contactant à l&apos;adresse ci-dessous.</p>

          <h2 className="text-2xl font-bold pt-4">7. Modifications de cette politique</h2>
          <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.</p>

          <h2 className="text-2xl font-bold pt-4">8. Nous contacter</h2>
          <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l&apos;adresse suivante : [support@themindset.app]</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
