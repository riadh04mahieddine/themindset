import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

const features = [
  {
    title: 'Notifications Inspirantes',
    description: 'Recevez chaque jour des conseils et des citations pour nourrir votre mindset et booster votre motivation.',
    image: '/images/home.png',
  },
  {
    title: 'Favoris & Notes',
    description: 'Gardez une trace des messages qui vous marquent et complétez-les avec vos propres réflexions.',
    image: '/images/favoris.png',
  },
  {
    title: 'Dilemmes Quotidiens',
    description: 'Mettez votre mindset à l\'épreuve avec des dilemmes qui vous poussent à faire des choix conscients.',
    image: '/images/dilemme.png',
  },
];

export default function FeaturesSection() {
  return (
    <section id="fonctionnalite" className="w-full text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>Fonctionnalités Clés</h2>
          <p className={`${poppins.className} text-lg mt-4 max-w-2xl mx-auto opacity-90`}>
            Découvrez comment SMART vous accompagne au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg ring-1 ring-white/20 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
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
