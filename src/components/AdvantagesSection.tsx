import Image from 'next/image';
import { audiowide, poppins } from '@/app/fonts';

interface IosNotificationProps {
  title: string;
  text: string;
  time: string;
}

// A reusable component for the iOS-style notification
const IosNotification = ({ title, text, time }: IosNotificationProps) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl w-full max-w-sm mx-auto ring-1 ring-black/5">
    <div className="flex items-center gap-3 mb-2">
      <Image src="/images/logo.png" alt="Smart App Logo" width={24} height={24} className="rounded-md" />
      <span className={`${poppins.className} font-semibold text-sm text-gray-800`}>SMART</span>
      <span className={`${poppins.className} text-xs text-gray-500 ml-auto`}>{time}</span>
    </div>
    <div className="pl-1">
      <h4 className={`${poppins.className} font-bold text-gray-900`}>{title}</h4>
      <p className={`${poppins.className} text-sm text-gray-700`}>{text}</p>
    </div>
  </div>
);

export default function AdvantagesSection() {
  return (
    <section className="w-full text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>Deux Capsules, Un Objectif</h2>
          <p className={`${poppins.className} text-lg mt-4 max-w-3xl mx-auto opacity-90`}>
            Chaque jour, recevez deux notifications conçues pour aiguiser votre esprit d&apos;entrepreneur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <IosNotification 
            title="Capsule du Matin : Le Principe"
            text="Découvrez les grands principes qui régissent le succès, comme la loi de Pareto (80/20), et apprenez à les appliquer."
            time="9:41 AM"
          />
          <IosNotification 
            title="Capsule du Soir : L'Action"
            text="Analysez une action concrète d'une startup ou d'un produit, comme le passage au freemium, pour en tirer des leçons pratiques."
            time="8:15 PM"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto pt-10 border-t border-white/20">
          <h3 className={`${audiowide.className} text-3xl font-bold mb-4`}>Entraînez-vous à Décider</h3>
          <p className={`${poppins.className} text-base leading-relaxed opacity-80`}>
            Nos dilemmes quotidiens ne sont pas de simples questions. Ils sont conçus pour vous confronter à des choix complexes, affiner votre jugement et renforcer votre capacité à prendre des décisions stratégiques sous pression.
          </p>
        </div>
      </div>
    </section>
  );
}
