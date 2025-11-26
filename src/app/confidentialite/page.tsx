import { audiowide, poppins } from '@/app/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Confidentialite() {
  return (
    <div className="bg-stone-100 min-h-screen text-black">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className={`${audiowide.className} text-4xl md:text-5xl font-bold mb-8 text-center`}>Privacy Policy</h1>
        <div className={`${poppins.className} space-y-6 bg-white shadow-xl p-8 rounded-lg ring-1 ring-black/5`}>
          <p>Last updated: July 18, 2025</p>

          <h2 className="text-2xl font-bold pt-4">1. Introduction</h2>
          <p>Welcome to The Mindset. We are committed to protecting the privacy of our users. This privacy policy explains what information we collect, how we use it, and the rights you have regarding your data.</p>

          <h2 className="text-2xl font-bold pt-4">2. Information we collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>User-provided information:</strong> When creating an account, we may collect your name, email address, and other profile details.</li>
            <li><strong>User-generated content:</strong> We collect notes, favorites, and dilemma responses that you create and save in the app.</li>
            <li><strong>Usage data:</strong> We collect information about how you interact with our app, such as the features you use and the time spent, to help improve our services.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">3. How we use your information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Provide, maintain, and improve our application.</li>
            <li>Personalize your experience.</li>
            <li>Communicate with you, including sending notifications and updates.</li>
            <li>Ensure the security of our platform.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">4. Sharing your information</h2>
          <p>We do not share your personal information with third parties, except in the following cases:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>With your explicit consent.</li>
            <li>To comply with a legal obligation.</li>
            <li>With third-party service providers that help us operate the app (e.g., data hosting), under strict confidentiality agreements.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">5. Data security</h2>
          <p>We implement technical and organizational security measures to protect your information against unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-2xl font-bold pt-4">6. Your rights</h2>
          <p>In accordance with applicable regulations, you have the right to access, correct, delete, and port your personal data. You can exercise these rights by contacting us at the address below.</p>

          <h2 className="text-2xl font-bold pt-4">7. Changes to this policy</h2>
          <p>We may update this privacy policy from time to time. We will inform you of any changes by posting the new policy on this page.</p>

          <h2 className="text-2xl font-bold pt-4">8. Contact us</h2>
          <p>If you have any questions about this privacy policy, please contact us at: [support@themindset.app]</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
