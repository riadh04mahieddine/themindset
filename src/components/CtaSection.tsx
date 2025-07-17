import Link from 'next/link';
import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

export default function CtaSection() {
  return (
    <section className="w-full text-white">
      <div className="max-w-4xl mx-auto text-center py-20 px-4">
        <h2 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>
          Prêt à transformer votre mindset ?
        </h2>
        <p className={`${poppins.className} text-lg mt-4 max-w-2xl mx-auto opacity-90`}>
          Rejoignez la communauté d&apos;entrepreneurs qui ont décidé de prendre le contrôle de leur croissance. C&apos;est votre moment. Aujourd&apos;hui. L&apos;aventure ne fait que commencer.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* App Store Button */}
          <Link href="#" className="inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/app-store.svg.png"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="object-contain"
            />
          </Link>
          {/* Google Play Button */}
          <div className="relative flex flex-col items-center">
            <Link href="#" className="inline-block transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/Google-Play.png"
                alt="Get it on Google Play"
                width={200}
                height={75}
                className="object-contain opacity-50 cursor-not-allowed"
              />
            </Link>
            <span className={`${poppins.className} text-xs text-white/70 mt-1`}>Bientôt disponible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
