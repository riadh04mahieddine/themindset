import { audiowide, poppins } from '@/app/fonts';

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.25 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const testimonials = [
  {
    quote: '"Une vraie claque ! Les capsules du matin ont changé ma façon de voir les choses. Indispensable pour tout entrepreneur."',
    name: 'Sarah L.',
    rating: 5,
  },
  {
    quote: '"J&apos;adore les dilemmes. C&apos;est comme une salle de sport pour mon cerveau. Je me sens plus affûté dans mes décisions."',
    name: 'Mehdi B.',
    rating: 5,
  },
  {
    quote: '"Simple, efficace et direct. SMART va droit au but sans fioritures. C&apos;est exactement ce dont j&apos;avais besoin."',
    name: 'Alexandre M.',
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${audiowide.className} text-4xl md:text-5xl font-bold`}>Ce qu&apos;ils en pensent</h2>
          <p className={`${poppins.className} text-lg mt-4 max-w-2xl mx-auto opacity-90`}>
            Nos premiers utilisateurs sont nos meilleurs ambassadeurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-between shadow-lg ring-1 ring-white/20">
              <p className={`${poppins.className} text-base italic mb-6 opacity-90`}>{testimonial.quote}</p>
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className={`${audiowide.className} text-sm font-semibold`}>{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
