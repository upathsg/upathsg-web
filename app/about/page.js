import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-peach py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-pink font-semibold tracking-widest text-xs uppercase mb-3">our story</p>
          <h1 className="font-bold text-navy text-4xl md:text-5xl mb-6" style={{fontFamily:'Nunito,sans-serif'}}>
            We&apos;ve been in your shoes.
          </h1>
          <p className="text-navy text-base leading-relaxed opacity-80 max-w-2xl mx-auto">
            Choosing a university course is one of the most stressful decisions you&apos;ll make — and somehow, the honest answers are always the hardest to find. We built upathsg to change that.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-bold text-navy text-2xl mb-6" style={{fontFamily:'Nunito,sans-serif'}}>Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              upathsg started in 2020, created by a group of students who had just been through the university application process themselves. They knew how difficult it was to get honest, ground-level information about courses — the kind that doesn&apos;t come from brochures, open days, or university ambassadors.
            </p>
            <p>
              So they built what they wished had existed: a space where seniors could speak candidly about their experiences, and juniors could actually make sense of their options before committing.
            </p>
            <p>
              After a few years of helping students find their path, the platform went quiet. But the need never went away. <span className="font-semibold text-navy">upathsg is back</span> — rebuilt, and here to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose banner */}
      <section className="bg-teal py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed" style={{fontFamily:'Nunito,sans-serif'}}>
            Our purpose: make information on <span className="text-pink">all</span> Singapore universities and courses more accessible — so that juniors can make <span className="text-pink">better informed decisions.</span>
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-bold text-navy text-2xl mb-8 text-center" style={{fontFamily:'Nunito,sans-serif'}}>What makes us different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Comprehensive',
                border: 'border-teal',
                titleColor: 'text-teal',
                points: [
                  'Wide coverage of questions across every section of uni life',
                  'Very detailed, first-person responses — not summaries',
                  'Well-vetted before publishing',
                ],
              },
              {
                title: 'Truthful & Credible',
                border: 'border-pink',
                titleColor: 'text-pink',
                points: [
                  'Anonymous sharing — seniors can be candid without consequences',
                  'Concrete, practical advice from people who have lived it',
                  'Both pros and cons, honestly — not just the highlight reel',
                ],
              },
              {
                title: 'Accessible to All',
                border: 'border-navy',
                titleColor: 'text-navy',
                points: [
                  'Always free to read — no sign-ups, no paywalls',
                  'Priority is helping as many students as possible',
                  'Community-driven, not institutional',
                ],
              },
              {
                title: 'Wide Range',
                border: 'border-teal',
                titleColor: 'text-teal',
                points: [
                  'Covers all 6 local universities',
                  'Across every major faculty and discipline',
                  'Our vision: every course, every path represented',
                ],
              },
            ].map(card => (
              <div key={card.title} className={`border-l-4 ${card.border} pl-6 py-4 rounded-r-xl bg-peach-light`}>
                <h3 className={`font-bold text-lg mb-3 ${card.titleColor}`} style={{fontFamily:'Nunito,sans-serif'}}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.points.map(p => (
                    <li key={p} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-teal mt-0.5 font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
