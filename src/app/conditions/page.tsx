import { audiowide, poppins } from '@/app/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Conditions() {
  return (
    <div className="bg-gradient-to-b from-sky-400 via-sky-800 to-gray-900 min-h-screen text-white">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className={`${audiowide.className} text-4xl md:text-5xl font-bold mb-8 text-center`}>Conditions d&apos;Utilisation</h1>
        <div className={`${poppins.className} space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/20`}>
          <p>Dernière mise à jour : 1 août 2025</p>

          <h2 className="text-2xl font-bold pt-4">1. Acceptation des Conditions</h2>
          <p>
            En téléchargeant, installant ou utilisant l&apos;application The Mindset, vous acceptez d&apos;être lié par les présentes Conditions d&apos;Utilisation. 
            Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre application.
          </p>

          <h2 className="text-2xl font-bold pt-4">2. Description du Service</h2>
          <p>
            The Mindset est une application mobile conçue pour aider les utilisateurs à développer leur intelligence émotionnelle et à prendre de meilleures décisions 
            face à des dilemmes éthiques et personnels. L&apos;application propose des scénarios hypothétiques, des exercices de réflexion et des outils d&apos;analyse personnelle.
          </p>

          <h2 className="text-2xl font-bold pt-4">3. Compte Utilisateur</h2>
          <p>
            Pour utiliser certaines fonctionnalités de l&apos;application, vous devrez créer un compte. Vous êtes responsable de maintenir la confidentialité de vos informations 
            de connexion et de toutes les activités qui se produisent sous votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.
          </p>

          <h2 className="text-2xl font-bold pt-4">4. Contenu Utilisateur</h2>
          <p>
            En soumettant du contenu à notre application (commentaires, réponses aux scénarios, etc.), vous nous accordez une licence mondiale, non exclusive, libre de redevance 
            pour utiliser, reproduire et afficher ce contenu dans le cadre de notre service. Vous garantissez que vous possédez tous les droits nécessaires pour nous accorder cette licence.
          </p>
          <p>
            Vous acceptez de ne pas soumettre de contenu illégal, offensant, diffamatoire ou violant les droits d&apos;autrui. Nous nous réservons le droit de supprimer tout contenu 
            qui, selon notre jugement, viole ces conditions.
          </p>

          <h2 className="text-2xl font-bold pt-4">5. Propriété Intellectuelle</h2>
          <p>
            L&apos;application The Mindset, y compris son code, design, logo, textes et autres éléments, est protégée par les lois sur la propriété intellectuelle. 
            Vous n&apos;êtes pas autorisé à copier, modifier, distribuer, vendre ou louer une partie de notre application sans notre autorisation écrite préalable.
          </p>

          <h2 className="text-2xl font-bold pt-4">6. Limitation de Responsabilité</h2>
          <p>
            L&apos;application est fournie &quot;telle quelle&quot; sans garantie d&apos;aucune sorte. Nous ne garantissons pas que l&apos;application sera exempte d&apos;erreurs ou disponible en permanence. 
            En aucun cas, nous ne serons responsables des dommages directs, indirects, spéciaux ou consécutifs résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser notre application.
          </p>
          <p>
            Les conseils et scénarios présentés dans l&apos;application sont à titre informatif uniquement et ne remplacent pas l&apos;avis d&apos;un professionnel qualifié.
          </p>

          <h2 className="text-2xl font-bold pt-4">7. Modifications des Conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces Conditions d&apos;Utilisation à tout moment. Les modifications prendront effet dès leur publication sur cette page. 
            Votre utilisation continue de l&apos;application après la publication des modifications constitue votre acceptation de ces modifications.
          </p>

          <h2 className="text-2xl font-bold pt-4">8. Résiliation</h2>
          <p>
            Nous nous réservons le droit de suspendre ou de résilier votre accès à l&apos;application à tout moment, pour quelque raison que ce soit, sans préavis. 
            Vous pouvez également cesser d&apos;utiliser l&apos;application à tout moment.
          </p>

          <h2 className="text-2xl font-bold pt-4">9. Droit Applicable</h2>
          <p>
            Ces Conditions d&apos;Utilisation sont régies par les lois françaises. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux français.
          </p>

          <h2 className="text-2xl font-bold pt-4">10. Contact</h2>
          <p>
            Si vous avez des questions concernant ces Conditions d&apos;Utilisation, veuillez nous contacter à l&apos;adresse suivante : [Votre adresse e-mail de contact]
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
