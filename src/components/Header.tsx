import Image from 'next/image';
import Link from 'next/link';
import { audiowide } from '@/app/fonts';

export default function Header() {
  return (
    <div className="py-4">
      <header className="bg-white rounded-full shadow-lg px-4 py-2 mx-auto max-w-5xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg p-1">
            <Image
              src="/images/logo.png"
              alt="Smart Logo"
              width={70}
              height={70}
              className="rounded-2xl"
            />
          </div>
          <span className={`${audiowide.className} text-2xl font-bold text-gray-800`}>The Mindset</span>
        </div>
        <nav className={`hidden md:flex items-center space-x-8 ${audiowide.className}`}>
          <Link href="#fonctionnalite" className="text-gray-600 hover:text-black font-bold">Features</Link>
          <Link href="/confidentialite" className="text-gray-600 hover:text-black font-bold">Privacy</Link>
          <Link href="/support" className="text-gray-600 hover:text-black font-bold">Support</Link>
        </nav>
        <a 
          href="https://apps.apple.com/us/app/the-mindset/id6748640506?ppid=92a455e3-fc3d-4f3a-b96c-f02967071832"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/app-store.svg.png"
            alt="Télécharger dans l'App Store"
            width={160}
            height={60}
          />
        </a>
        
      </header>
    </div>
  );
}
