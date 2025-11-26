import Link from 'next/link';
import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

export default function CtaSection() {
  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto text-center py-20 px-4">
        <h2 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>
          Ready to transform your mindset?
        </h2>
        <p className={`${poppins.className} text-lg mt-4 max-w-2xl mx-auto opacity-90`}>
          Join the community of entrepreneurs who have decided to take control of their growth. This is your moment. Today. The journey is just beginning.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* App Store Button */}
          <a 
            href="https://apps.apple.com/us/app/the-mindset/id6748640506?ppid=92a455e3-fc3d-4f3a-b96c-f02967071832"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/app-store.svg.png"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="object-contain"
            />
          </a>
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
            <span className={`${poppins.className} text-xs text-gray-500 mt-1`}>Coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
