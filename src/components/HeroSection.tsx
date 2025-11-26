import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

export default function HeroSection() {
  return (
    <section className="w-full pt-12 pb-0 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className={`text-5xl md:text-6xl font-bold mb-5 ${audiowide.className}`}>
            Transform your daily life with the right mindset
          </h1>
          <p className={`text-base md:text-lg max-w-3xl mx-auto mb-8 font-light ${poppins.className}`}>
            Receive daily inspirational notifications and powerful advice to boost your productivity, motivation, and well-being. The best routines, and so much more.
          </p>
          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://apps.apple.com/us/app/the-mindset/id6748640506?ppid=92a455e3-fc3d-4f3a-b96c-f02967071832" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/images/app-store.svg.png"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="object-contain"
              />
            </a>
            <div className="inline-block relative">
              <Image
                src="/images/Google-Play.png"
                alt="Coming soon on Google Play"
                width={200}
                height={54}
                className="object-contain opacity-50"
              />
              <div className="absolute top-3 right-0 translate-x-1/6">
                <span className={`text-white text-xs font-semibold bg-black/80 px-2 py-1 rounded-full shadow-lg ${poppins.className}`}>
                  Coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center items-center h-[600px] -mt-10">
          {/* Left Screenshot */}
          <div className="absolute -translate-x-2/4 -rotate-12 transition-transform duration-300 hover:rotate-[-15deg] hover:scale-105">
            <div className="rounded-[2.5rem] border-8 border-black bg-black shadow-2xl overflow-hidden">
              <Image
                src="/images/icone.png"
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
                src="/images/theme.png"
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
