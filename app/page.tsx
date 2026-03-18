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
      <nav className="bg-white border-b border-[#e8f0e4] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-32 items-center">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={100} height={100} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.2em] leading-none" style={{ fontFamily: 'var(--font-playfair)', color: '#122904' }}>IOSHA</span>
                <span className="text-[10px] tracking-widest font-medium uppercase mt-1" style={{ color: '#8fa882' }}>International Order of Sacred Healing Arts</span>
              </div>
            </div>
            <Link href="https://elder-portal.vercel.app/application/welcome"
              className="px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all shadow-lg text-white"
              style={{ backgroundColor: '#1d5306' }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#122904')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#1d5306')}>
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#FCFAF8] py-32 overflow-hidden border-b border-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-12" style={{ backgroundColor: '#1d5306', opacity: 0.3 }}></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: '#1d5306' }}>Ordination Candidate Portal</span>
              <div className="h-[1px] w-12" style={{ backgroundColor: '#1d5306', opacity: 0.3 }}></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 max-w-5xl leading-[1.05]" style={{ fontFamily: 'var(--font-playfair)', color: '#122904' }}>
              The Path to <span className="italic font-light">Sacred Ministry</span>
            </h1>
            <p className="text-xl mb-14 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-playfair)', color: '#4a7038' }}>
              Establishing, protecting, and nurturing sacred healing ministries that honor diverse spiritual traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="https://elder-portal.vercel.app/application/welcome"
                className="px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase transition-all shadow-2xl text-white"
                style={{ backgroundColor: '#1d5306' }}>
                Begin Your Application
              </Link>
              <a href="#who"
                className="px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase transition-all border"
                style={{ borderColor: '#1d5306', color: '#1d5306', backgroundColor: 'transparent' }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <div className="text-[200px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: '#1d5306' }}>IOSHA</div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who" className="py-24" style={{ backgroundColor: '#122904' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12" style={{ backgroundColor: '#8fa882', opacity: 0.4 }}></div>
            <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: '#c4d9bb' }}>Is This for You?</span>
            <div className="h-[1px] w-12" style={{ backgroundColor: '#8fa882', opacity: 0.4 }}></div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            The Path to <span className="italic font-light" style={{ color: '#c4d9bb' }}>Sacred Fellowship</span>
          </h2>
          <p className="max-w-xl mx-auto mb-14 leading-relaxed" style={{ color: '#8fa882' }}>
            Establishing, protecting, and nurturing sacred healing ministries that honor diverse spiritual traditions — through a covenant process of application and council approval.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {HEALING_ARTS.map((art) => (
              <div key={art.title} className="p-6 border" style={{ borderColor: '#1d5306' }}>
                <h3 className="font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#8fa882' }}>{art.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#c4d9bb' }}>{art.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm italic mt-8" style={{ color: '#4a7038' }}>...and any healing modality rooted in firmly held spiritual belief — subject to council approval.</p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-white border-b border-[#e8f0e4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12" style={{ backgroundColor: '#1d5306', opacity: 0.25 }}></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: '#1d5306' }}>What Ordination Gives You</span>
              <div className="h-[1px] w-12" style={{ backgroundColor: '#1d5306', opacity: 0.25 }}></div>
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#122904' }}>
              Credentials, community, <span className="italic font-light">and clarity</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Official Ordination Credentials', body: 'Your certificate, credential number, and clergy standing — recognized in all 50 states. Present it anywhere a minister\'s credentials are required.' },
              { title: 'Ministerial Authorization Letter', body: 'A personal letter from IOSHA that defines your specific healing scope. Your official ecclesiastical credential — it speaks for your ministry.' },
              { title: 'Foundation Course', body: 'Six weeks of real ministerial formation. Theology, healing practice, how to structure your assembly, how to stand in your calling. Built for working healers.' },
              { title: 'Community & Ongoing Standing', body: 'You are not ordained and abandoned. Annual covenant reaffirmation keeps your credentials current, and the IOSHA network keeps you connected to peers who understand this work.' },
            ].map((item) => (
              <div key={item.title} className="p-8 border" style={{ backgroundColor: '#FCFAF8', borderColor: '#e8f0e4' }}>
                <span className="text-lg mb-4 block" style={{ color: '#1d5306' }}>✦</span>
                <h3 className="font-bold mb-3 text-sm tracking-wide" style={{ color: '#122904' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a7038' }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* Minister rights — dark forest block */}
          <div className="p-10" style={{ backgroundColor: '#122904' }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#8fa882' }}>As an ordained IOSHA minister, you are authorized to:</h3>
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
                  <span className="mt-0.5 text-xs" style={{ color: '#4a7038' }}>✦</span>
                  <span className="text-sm" style={{ color: '#c4d9bb' }}>{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white border-t border-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block" style={{ color: '#1d5306' }}>The Process</span>
            <h2 className="text-5xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#122904' }}>
              How It <span className="italic font-light">Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { n: '01', title: 'Invitation', body: 'Learn about IOSHA\'s mission, bylaws, and Statement of Fundamental Truths. Discern if you are called to serve as a healing minister.' },
              { n: '02', title: 'Application', body: 'Submit your application to the Council with references, background verification, and ministerial credentials.' },
              { n: '03', title: 'Ordainment', body: 'If not already ordained, complete the Foundation Ordination Course to receive your ministerial credentials through IOSHA.' },
            ].map((item) => (
              <div key={item.n} className="text-center">
                <span className="text-6xl font-bold mb-6 block italic" style={{ fontFamily: 'var(--font-playfair)', color: '#e8f0e4' }}>{item.n}</span>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest" style={{ fontFamily: 'var(--font-playfair)', color: '#122904' }}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: '#4a7038' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ backgroundColor: '#1d5306' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            You don&apos;t have to<br /><span className="italic font-light">do this alone.</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#c4d9bb' }}>
            Many of us have been doing this work for years without standing, without community, without anyone who truly gets it. That ends here.
          </p>
          <Link href="https://elder-portal.vercel.app/application/welcome"
            className="px-14 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-lg inline-block"
            style={{ backgroundColor: 'white', color: '#1d5306' }}>
            Apply for Ordination
          </Link>
          <p className="text-sm mt-5" style={{ color: '#8fa882' }}>Applications personally reviewed by the Elders Council</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: '#122904', borderColor: '#1d5306' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={120} height={120} className="object-contain brightness-0 invert" />
              <div>
                <div className="font-bold tracking-[0.2em] text-sm text-white" style={{ fontFamily: 'var(--font-playfair)' }}>IOSHA</div>
                <div className="text-[9px] tracking-widest uppercase mt-1" style={{ color: '#4a7038' }}>International Order of Sacred Healing Arts</div>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="https://ministerportal.vercel.app" className="transition-colors" style={{ color: '#8fa882' }}>Minister Portal</Link>
              <Link href="https://elder-portal.vercel.app" className="transition-colors" style={{ color: '#8fa882' }}>Elder Portal</Link>
              <Link href="https://elder-portal.vercel.app/application/welcome" className="font-semibold text-white">Apply</Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2" style={{ borderTop: '1px solid #1d5306' }}>
            <p className="text-xs" style={{ color: '#4a7038' }}>© 2025–2026 IOSHA — International Order of Sacred Healing Arts. All rights reserved.</p>
            <p className="text-xs" style={{ color: '#2d5018' }}>A 508(c)(1)(A) Faith-Based Organization</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
