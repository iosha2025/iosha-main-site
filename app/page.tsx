import Image from 'next/image'
import Link from 'next/link'

const HEALING_ARTS = [
  { title: 'Energy Healing', description: 'Reiki, pranic healing, biofield therapy, chakra balancing, frequency medicine' },
  { title: 'Sanctified Healing', description: 'Prayer, anointing, laying-on-of-hands, intention, spiritual invocation' },
  { title: 'Quantum Healing', description: 'Consciousness-based healing, vibrational medicine, sound therapy, light work' },
  { title: 'Earth-Based Healing', description: 'Herbal medicine, plant spirit work, elemental healing, sacred ceremony' },
  { title: 'Somatic & Embodied Healing', description: 'Breathwork, movement, trauma release, nervous system regulation' },
  { title: 'Ceremonial Ministry', description: 'Weddings, memorials, blessings, rites of passage, sacred ceremony' },
]

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-jakarta)' }} className="min-h-screen bg-[#FCFAF8]">

      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-32 items-center">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={100} height={100} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.2em] text-stone-900 leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>IOSHA</span>
                <span className="text-[10px] tracking-widest text-stone-400 font-medium uppercase mt-1">International Order of Sacred Healing Arts</span>
              </div>
            </div>
            <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-stone-900 text-emerald-50 px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-emerald-900 transition-all shadow-lg">
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#FCFAF8] py-32 overflow-hidden border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">Ordination Candidate Portal</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8 max-w-5xl leading-[1.05]" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Path to <span className="italic font-light">Sacred Ministry</span>
            </h1>
            <p className="text-xl text-stone-500 mb-14 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              Establishing, protecting, and nurturing sacred healing ministries that honor diverse spiritual traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-stone-900 text-emerald-50 px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-emerald-900 transition-all shadow-2xl">
                Begin Your Application
              </Link>
              <a href="#who" className="border border-stone-200 text-stone-900 px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-stone-50 transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <div className="text-[200px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>IOSHA</div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who" className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-emerald-500/40"></div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.4em]">Who We Ordain</span>
            <div className="h-[1px] w-12 bg-emerald-500/40"></div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ordination for those <span className="italic font-light text-emerald-400">called to this work</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-14 leading-relaxed">
            IOSHA ordains across healing traditions — but ordination is not automatic. Every candidate is reviewed and approved by the Elders Council. If this is your calling, we invite you to apply.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {HEALING_ARTS.map((art) => (
              <div key={art.title} className="border border-stone-700 p-6">
                <h3 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-2">{art.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{art.description}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-500 text-sm italic mt-8">...and any healing modality rooted in firmly held spiritual belief — subject to council approval.</p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">What Ordination Gives You</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Credentials, community, <span className="italic font-light">and clarity</span>
            </h2>
          </div>

          {/* Four key things */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: 'Official Ordination Credentials',
                body: 'Your certificate, credential number, and clergy standing — recognized in all 50 states. Present it anywhere a minister\'s credentials are required.',
              },
              {
                title: 'Ministerial Authorization Letter',
                body: 'A personal letter from IOSHA that defines your specific healing scope. Your official ecclesiastical credential — it speaks for your ministry.',
              },
              {
                title: 'Foundation Course',
                body: 'Six weeks of real ministerial formation. Theology, healing practice, how to structure your assembly, how to stand in your calling. Built for working healers.',
              },
              {
                title: 'Community & Ongoing Standing',
                body: 'You are not ordained and abandoned. Annual covenant reaffirmation keeps your credentials current, and the IOSHA network keeps you connected to peers who understand this work.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#FCFAF8] border border-stone-200 p-8">
                <span className="text-emerald-700 text-lg mb-4 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-3 text-sm tracking-wide">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* As an ordained minister you can... */}
          <div className="bg-stone-900 p-10">
            <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">As an ordained IOSHA minister, you are authorized to:</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              {[
                'Officiate weddings in all 50 states',
                'Lead funerals and memorial services',
                'Perform baptisms, dedications, and naming ceremonies',
                'Practice healing as recognized sacred ministry',
                'Lead worship, healing circles, and sacred gatherings',
                'Bless persons, places, land, and sacred objects',
                'Establish your own Private Faith Assembly',
                'Offer pastoral counsel and spiritual care',
                'Perform rites of passage and seasonal ceremonies',
                'Conduct earth-based ceremony and plant medicine rites',
                'Claim clergy tax standing as an actively serving minister',
              ].map((right) => (
                <div key={right} className="flex items-start gap-3 py-1">
                  <span className="text-emerald-500 mt-0.5 text-xs">✦</span>
                  <span className="text-stone-300 text-sm">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-24 bg-[#FCFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">How It Works</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              A covenant, <span className="italic font-light">not a transaction</span>
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">Every application is read by a real person on the Elders Council. Ordination is granted — not sold.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Apply', body: 'Tell us about your calling, your healing practice, and what you are here to do.' },
              { step: '02', title: 'Background Check', body: 'All candidates complete a background check as part of our covenant of community integrity.' },
              { step: '03', title: 'Council Review', body: 'The Elders Council personally reviews every application. This is not automated.' },
              { step: '04', title: 'Formation & Ordination', body: 'Complete the Foundation Course and receive your credentials, Authorization Letter, and full ministerial standing.' },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-200 p-6 shadow-sm">
                <div className="text-emerald-700 font-bold text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{item.step}</div>
                <h3 className="font-bold text-stone-900 uppercase text-xs tracking-widest mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-emerald-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            You don&apos;t have to<br /><span className="italic font-light">do this alone.</span>
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Many of us have been doing this work for years without standing, without community, without anyone who truly gets it. That ends here.
          </p>
          <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-white text-emerald-800 px-14 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-50 transition-all shadow-lg inline-block">
            Apply for Ordination
          </Link>
          <p className="text-emerald-300 text-sm mt-5">Applications personally reviewed by the Elders Council</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={120} height={120} className="object-contain brightness-0 invert" />
              <div>
                <div className="text-white font-bold tracking-[0.2em] text-sm" style={{ fontFamily: 'var(--font-playfair)' }}>IOSHA</div>
                <div className="text-stone-400 text-[9px] tracking-widest uppercase mt-1">International Order of Sacred Healing Arts</div>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="https://ministerportal.vercel.app" className="text-stone-400 hover:text-emerald-400 transition-colors">Minister Portal</Link>
              <Link href="https://elder-portal.vercel.app" className="text-stone-400 hover:text-emerald-400 transition-colors">Elder Portal</Link>
              <Link href="https://elder-portal.vercel.app/application/welcome" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Apply</Link>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-stone-600 text-xs">© 2025–2026 IOSHA — International Order of Sacred Healing Arts. All rights reserved.</p>
            <p className="text-stone-700 text-xs">A 508(c)(1)(A) Faith-Based Organization</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
