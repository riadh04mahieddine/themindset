import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

const features = [
  {
    title: 'choose style priority',
    description: 'Get daily tips and quotes to fuel your mindset and boost your motivation.',
    image: '/images/style.png',
  },
  {
    title: 'Themes choice',
    description: 'Keep track of the messages that resonate with you and add your own reflections.',
    image: '/images/theme-choice.png',
  },
  {
    title: 'Icon choice',
    description: 'Challenge your mindset with scenarios that push you to make conscious choices.',
    image: '/images/icone-choice.png',
  },
];

export default function FeaturesSection() {
  return (
    <section id="fonctionnalite" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>Key Features</h2>
          <p className={`${poppins.className} text-lg mt-4 max-w-2xl mx-auto opacity-90`}>
            Discover how The Mindset supports you day after day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-xl ring-1 ring-black/5 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-full mb-6 flex items-center justify-center">
                 <div className="rounded-[2rem] border-8 border-black bg-black shadow-lg overflow-hidden">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        width={250}
                        height={541}
                        className="object-contain"
                    />
                 </div>
              </div>
              <h3 className={`${audiowide.className} text-xl font-bold mb-3`}>{feature.title}</h3>
              <p className={`${poppins.className} text-base leading-relaxed opacity-80`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
