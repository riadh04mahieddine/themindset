import { audiowide, poppins } from '@/app/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Conditions() {
  return (
    <div className="bg-stone-100 min-h-screen text-black">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className={`${audiowide.className} text-4xl md:text-5xl font-bold mb-8 text-center`}>Terms of Use</h1>
        <div className={`${poppins.className} space-y-6 bg-white shadow-xl p-8 rounded-lg ring-1 ring-black/5`}>
          <p>Last updated: August 1, 2025</p>

          <h2 className="text-2xl font-bold pt-4">1. Acceptance of the Terms</h2>
          <p>
            By downloading, installing, or using The Mindset application, you agree to be bound by these Terms of Use.
            If you do not agree with these terms, please refrain from using our application.
          </p>

          <h2 className="text-2xl font-bold pt-4">2. Description of the Service</h2>
          <p>
            The Mindset is a mobile application designed to help users develop their strategic thinking and make better decisions when faced with ethical or personal dilemmas.
            The app offers hypothetical scenarios, reflection exercises, and personal analysis tools.
          </p>

          <h2 className="text-2xl font-bold pt-4">3. User Account</h2>
          <p>
            To use certain features of the app, you will need to create an account. You are responsible for maintaining the confidentiality of your login information
            and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold pt-4">4. User Content</h2>
          <p>
            By submitting content to our application (comments, scenario responses, etc.), you grant us a worldwide, non-exclusive, royalty-free license
            to use, reproduce, and display that content as part of our service. You warrant that you have all necessary rights to grant this license.
          </p>
          <p>
            You agree not to submit content that is illegal, offensive, defamatory, or infringes on the rights of others. We reserve the right to remove any content that,
            in our judgment, violates these terms.
          </p>

          <h2 className="text-2xl font-bold pt-4">5. Intellectual Property</h2>
          <p>
            The Mindset application, including its code, design, logo, text, and other elements, is protected by intellectual property laws.
            You are not authorized to copy, modify, distribute, sell, or rent any part of our application without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold pt-4">6. Limitation of Liability</h2>
          <p>
            The application is provided &quot;as is&quot; without any warranty of any kind. We do not guarantee that the application will be error-free or available at all times.
            In no event shall we be liable for direct, indirect, special, or consequential damages resulting from the use or inability to use our application.
          </p>
          <p>
            The advice and scenarios presented in the application are for informational purposes only and do not replace the guidance of a qualified professional.
          </p>

          <h2 className="text-2xl font-bold pt-4">7. Changes to the Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes take effect as soon as they are published on this page.
            Your continued use of the application after the changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold pt-4">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the application at any time, for any reason, without notice.
            You may also stop using the application at any time.
          </p>

          <h2 className="text-2xl font-bold pt-4">9. Governing Law</h2>
          <p>
            These Terms of Use are governed by French law. Any dispute arising from these terms will be subject to the exclusive jurisdiction of the French courts.
          </p>

          <h2 className="text-2xl font-bold pt-4">10. Contact</h2>
          <p>
            If you have any questions regarding these Terms of Use, please contact us at: [support@themindset.app]
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
