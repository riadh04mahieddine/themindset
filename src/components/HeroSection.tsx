import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

export default function HeroSection() {
  return (
    <section className="w-full text-white pt-12 pb-0 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className={`text-5xl md:text-6xl font-bold mb-5 ${audiowide.className}`}>
            Transforme ton quotidien avec le bon mindset
          </h1>
          <p className={`text-base md:text-lg max-w-3xl mx-auto mb-8 font-light ${poppins.className}`}>
            Reçois chaque jour des notifications inspirantes et des conseils puissants pour booster ta productivité, ta motivation et ton bien-être. Les meilleures routines, et bien plus.
          </p>
          <div className="flex justify-center items-center gap-8">
            <a href="#download-apple" className="inline-block">
              <Image
                src="/images/app-store.svg.png"
                alt="Télécharger dans l'App Store"
                width={180}
                height={54}
                className="object-contain"
              />
            </a>
            <a href="#download-google" className="inline-block">
              <Image
                src="/images/Google-Play.png"
                alt="Disponible sur Google Play"
                width={200}
                height={54}
                className="object-contain"
              />
            </a>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center items-center h-[600px] -mt-10">
          {/* Left Screenshot */}
          <div className="absolute -translate-x-2/4 -rotate-12 transition-transform duration-300 hover:rotate-[-15deg] hover:scale-105">
            <div className="rounded-[2.5rem] border-8 border-black bg-black shadow-2xl overflow-hidden">
              <Image
                src="/images/onboarding.png"
                alt="Notification Screenshot"
                width={270}
                height={585}
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Screenshot */}
          <div className="relative z-10 transition-transform duration-300 hover:scale-105">
            <div className="rounded-[2.5rem] border-8 border-black bg-black shadow-2xl overflow-hidden">
              <Image
                src="/images/home.png"
                alt="Home Screen Screenshot"
                width={270}
                height={585}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Screenshot */}
          <div className="absolute translate-x-2/4 rotate-12 transition-transform duration-300 hover:rotate-[15deg] hover:scale-105">
            <div className="rounded-[2.5rem] border-8 border-black bg-black shadow-2xl overflow-hidden">
              <Image
                src="/images/liek-capsule.png"
                alt="Like Capsule Screenshot"
                width={270}
                height={585}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
