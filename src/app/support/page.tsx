import { audiowide, poppins } from '@/app/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SupportIcon from '@/components/SupportIcon';

export default function Support() {
  return (
    <div className="bg-stone-100 min-h-screen text-black">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="border-b border-gray-300 pb-4 mb-12">
          <h1 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>
            Support - <span className="italic">The Mindset</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="mb-8">
            <SupportIcon />
          </div>
          
          <h2 className={`${audiowide.className} text-3xl font-bold mb-6`}>Besoin d&apos;aide ?</h2>
          
          <p className={`${poppins.className} text-xl max-w-2xl mx-auto`}>
            Tu rencontres un problème avec l&apos;application The Mindset ou tu as une question ? 
            On est là pour t&apos;aider !
          </p>
        </div>
        
        <div className={`${poppins.className} bg-white shadow-xl p-8 rounded-lg mb-12 ring-1 ring-black/5`}>
          <h3 className={`${audiowide.className} text-2xl font-bold mb-6 text-center`}>Contacte-nous</h3>
          
          <p className="text-center text-lg mb-8">
            Envoie-nous un email et on te répondra aussi vite que possible :
          </p>
          
          <div className="flex justify-center mb-4">
            <a 
              href="mailto:support@themindset.app" 
              className="bg-black text-white py-4 px-8 rounded-lg flex items-center justify-center text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@themindset.app
            </a>
          </div>
        </div>
        
        <p className="text-center text-lg opacity-80 mb-12">
          Nous répondons généralement sous 1 à 2 jours ouvrés.
        </p>
        
        <div className="flex justify-center">
          <Link 
            href="/" 
            className={`${audiowide.className} text-sky-600 hover:text-black transition-colors duration-200`}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
