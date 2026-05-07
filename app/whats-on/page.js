import Link from 'next/link';

const timeline = [
  {
    month: 'January',
    color: 'teal',
    events: [
      {
        title: 'JAE Application',
        subtitle: 'Joint Admissions Exercise',
        desc: 'A-Level results released. JAE opens for polytechnic and ITE applications. Typically 3–5 days only — do not miss the window.',
        tag: 'A-Level Students',
        tagColor: 'teal',
      },
    ],
  },
  {
    month: 'February – March',
    color: 'pink',
    events: [
      {
        title: 'Local University Applications Open',
        subtitle: 'NUS · NTU · SMU · SUTD · SIT · SUSS',
        desc: 'All 6 local universities open their undergraduate admissions portals. Applications are submitted directly through each university\'s website. Most courses use the same window — check each university individually for exact dates.',
        tag: 'All Students',
        tagColor: 'pink',
      },
      {
        title: 'Scholarship Applications',
        subtitle: 'PSC · University-based · Industry',
        desc: 'Most scholarships open alongside university applications. PSC scholarships, university merit scholarships (e.g. Lee Kong Chian at SMU), and faculty-specific scholarships typically open now. Deadlines vary — track each one separately.',
        tag: 'Scholarship Seekers',
        tagColor: 'navy',
      },
    ],
  },
  {
    month: 'March – April',
    color: 'teal',
    events: [
      {
        title: 'University Aptitude Tests & Interviews',
        subtitle: 'NUS Medicine · NTU Law · SMU · SUTD',
        desc: 'Courses with additional selection rounds (interviews, aptitude tests, portfolios) typically conduct them now. SMU\'s structured interviews are common for Business and Social Sciences. Check your course\'s specific requirements early.',
        tag: 'Selected Courses',
        tagColor: 'teal',
      },
    ],
  },
  {
    month: 'May – June',
    color: 'pink',
    events: [
      {
        title: 'Admission Offers Released',
        subtitle: 'Acceptance Deadline: Typically 2 Weeks',
        desc: 'Most universities release offers in May. You\'ll receive an email and can accept/reject via the university\'s portal. Acceptance deadlines are short — usually 1–2 weeks. Housing applications (for NUS/NTU/SUTD halls) typically open immediately after acceptance.',
        tag: 'All Applicants',
        tagColor: 'pink',
      },
      {
        title: 'Hall / On-Campus Housing Applications',
        subtitle: 'NUS · NTU · SUTD',
        desc: 'If you\'re applying for on-campus accommodation, the window opens shortly after offer acceptance. Popular halls fill up fast. Submit your application as early as possible.',
        tag: 'NUS · NTU · SUTD',
        tagColor: 'navy',
      },
    ],
  },
  {
    month: 'July – August',
    color: 'teal',
    events: [
      {
        title: 'Polytechnic Early Admissions Exercise (EAE)',
        subtitle: 'For Current Poly Students',
        desc: 'Poly Year 3 students can apply to selected local university courses via EAE before A-Level results are released. Merit-based with an interview component. Not all courses participate — check the MOE EAE microsite for the full list.',
        tag: 'Poly Year 3',
        tagColor: 'teal',
      },
      {
        title: 'Orientation & Matriculation',
        subtitle: 'Freshmen Orientation Programmes',
        desc: 'Most universities hold freshmen orientation in July or August before the academic year begins. Orientation camps, faculty welcomes, and CCA fairs typically happen during this period.',
        tag: 'Incoming Freshmen',
        tagColor: 'pink',
      },
    ],
  },
  {
    month: 'August',
    color: 'pink',
    events: [
      {
        title: 'Academic Year Begins',
        subtitle: 'All 6 Local Universities',
        desc: 'Semester 1 begins. Enjoy it — this is what all the research was for.',
        tag: 'Freshmen',
        tagColor: 'navy',
      },
    ],
  },
];

const tips = [
  {
    emoji: '📋',
    title: 'Track deadlines individually',
    text: 'Each university has slightly different timelines. Don\'t assume one deadline applies to all — bookmark each university\'s admissions page.',
  },
  {
    emoji: '📄',
    title: 'Prepare your personal statement early',
    text: 'Some courses (NUS Medicine, SMU, SUTD) require supplementary essays or personal statements. Start drafting before applications open.',
  },
  {
    emoji: '🏠',
    title: 'Hall applications move fast',
    text: 'If you want on-campus housing at NUS, NTU, or SUTD — apply the moment the portal opens. Popular halls and rooms are taken within days.',
  },
  {
    emoji: '💰',
    title: 'Scholarship deadlines are separate',
    text: 'University and external scholarships have their own deadlines, often before admissions decisions are out. Track them independently.',
  },
];

export default function WhatsOnPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-peach py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-pink font-semibold tracking-widest text-xs uppercase mb-3">admissions calendar</p>
          <h1 className="font-bold text-navy text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            What&apos;s On
          </h1>
          <p className="text-navy text-base leading-relaxed opacity-75 max-w-xl mx-auto">
            Key dates and deadlines for Singapore university admissions — so you know what&apos;s coming and when to act.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            ⚠️ Dates are approximate and updated annually. Always verify with each university&apos;s official admissions page.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-peach" />

            <div className="space-y-12">
              {timeline.map((block) => (
                <div key={block.month} className="relative pl-12">
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm ${
                      block.color === 'teal' ? 'bg-teal' : 'bg-pink'
                    }`}
                  >
                    📅
                  </div>

                  {/* Month label */}
                  <h2
                    className="font-bold text-navy text-xl mb-4"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {block.month}
                  </h2>

                  {/* Events */}
                  <div className="space-y-4">
                    {block.events.map((event) => (
                      <div
                        key={event.title}
                        className={`rounded-2xl p-5 border-l-4 bg-peach-light ${
                          block.color === 'teal' ? 'border-teal' : 'border-pink'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div>
                            <h3
                              className="font-bold text-navy text-base"
                              style={{ fontFamily: 'Nunito, sans-serif' }}
                            >
                              {event.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">{event.subtitle}</p>
                          </div>
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                              event.tagColor === 'teal'
                                ? 'bg-teal text-white'
                                : event.tagColor === 'pink'
                                ? 'bg-pink text-white'
                                : 'bg-navy text-white'
                            }`}
                          >
                            {event.tag}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-3">{event.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-peach py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="font-bold text-navy text-2xl mb-8 text-center"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Things to keep in mind
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl p-5 border border-peach-light">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{tip.emoji}</span>
                  <div>
                    <h3
                      className="font-bold text-navy text-sm mb-1"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p
            className="text-white text-lg font-semibold mb-3"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Not sure which course to apply for?
          </p>
          <p className="text-white opacity-80 text-sm mb-6">
            Read from students who have been through it — anonymous, honest, and specific.
          </p>
          <Link
            href="/#browse"
            className="inline-block bg-white text-teal font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md text-sm"
          >
            Browse Articles
          </Link>
        </div>
      </section>

    </main>
  );
}
