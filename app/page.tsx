import Image from 'next/image'
import Link from 'next/link'

const WHO_ITS_FOR = [
  'Energy Healers & Reiki Practitioners',
  'Herbalists & Plant Medicine Ministers',
  'Sound Healers & Vibrational Practitioners',
  'Somatic & Body-Centered Practitioners',
  'Spiritual Counselors & Pastoral Care Ministers',
  'Ceremonial Ministers — Weddings, Memorials, Blessings',
  'Naturopaths & Holistic Health Practitioners',
  'Trauma-Informed Healing Ministers',
  'Life Coaches Transitioning to Ministry',
  'Indigenous & Traditional Medicine Holders',
]

const WHAT_YOU_RECEIVE = [
  { title: 'Ordination Certificate', description: 'Recognized ecclesiastical credentials as an ordained minister of sacred healing arts' },
  { title: 'Letter of Direction', description: 'Defines the scope of your ministry — presented to banks, landlords, and institutions' },
  { title: 'First Amendment Protection', description: 'Your healing work is ministry, not a regulated health service' },
  { title: '508(c)(1)(A) Church Status', description: 'Automatic tax exemption — no IRS application required' },
  { title: 'Private Faith Assembly Structure', description: 'Your members are congregation — not clients or customers' },
  { title: 'Foundation Course', description: 'Six weeks of ministry law, church structure, banking, and practice' },
]

const CREDIBILITY = [
  { label: 'Ecclesiastical Standing', value: 'Ordained under recognized church authority with apostolic succession and documented lineage' },
  { label: '508(c)(1)(A) Compliant', value: 'Faith-Based Organization registered in Florida — automatic tax exemption, no IRS approval needed' },
  { label: 'First Amendment Grounded', value: 'Your ministry is protected religious practice — not an unlicensed health service' },
  { label: 'Nationwide Recognition', value: 'IOSHA ordination is recognized in all 50 states. Your Letter of Direction travels with you.' },
]

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-jakarta)' }} className="min-h-screen bg-[#FCFAF8]">

      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={72} height={72} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-[0.2em] text-stone-900 leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>IOSHA</span>
                <span className="text-[9px] tracking-widest text-stone-400 font-medium uppercase mt-1">International Order of Sacred Healing Arts</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-stone-500 hover:text-emerald-700 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">About</a>
              <a href="#ordination" className="text-stone-500 hover:text-emerald-700 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">Ordination</a>
              <Link href="https://ministerportal.vercel.app" className="bg-stone-900 text-emerald-50 px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-emerald-700 transition-all">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#FCFAF8] py-32 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-16 bg-emerald-600/30"></div>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">Sacred Healing Ministry</span>
            <div className="h-[1px] w-16 bg-emerald-600/30"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ordain Your<br /><span className="italic font-light">Healing Ministry</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            IOSHA ordains healing practitioners as ministers of sacred healing arts — providing First Amendment protection, ecclesiastical standing, and a complete legal framework for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://ministerportal.vercel.app/auth/signup" className="bg-stone-900 text-emerald-50 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-700 transition-all shadow-lg">
              Begin Ordination
            </Link>
            <a href="#about" className="border border-stone-300 text-stone-700 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:border-emerald-600 hover:text-emerald-700 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Your Healing Work <span className="italic font-light text-emerald-400">Is Ministry</span>
            </h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Licensing boards are expanding. Payment processors are flagging healing language. Banks are closing accounts. The regulatory environment is tightening around practitioners who operate without a legal framework.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Regulatory Pressure', body: 'Licensing boards are broadening the definition of regulated practice to capture energy healers, herbalists, and spiritual counselors.' },
              { title: 'Banking Challenges', body: 'Payment processors and banks treat healing services as health services — requiring licensure you don\'t have and don\'t need.' },
              { title: 'Marketing Restrictions', body: 'Platforms flag health-adjacent language. Ordained ministers operating as churches navigate this with a fundamentally different framework.' },
            ].map((item) => (
              <div key={item.title} className="border border-stone-700 p-8">
                <h3 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-4">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-l-4 border-emerald-500 pl-8">
            <p className="text-stone-200 text-lg italic leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
              &ldquo;Ordination is not a workaround — it is a legitimate legal framework for legitimate spiritual work. If your healing practice is rooted in genuine calling and operates as real ministry, ordained standing is the correct structure.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section id="ordination" className="py-24 bg-[#FCFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">What You Receive</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-playfair)' }}>
              Full Ordination <span className="italic font-light">Package</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_YOU_RECEIVE.map((item) => (
              <div key={item.title} className="bg-white border border-stone-200 p-8 shadow-sm">
                <span className="text-emerald-600 text-lg mb-4 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-3 uppercase text-xs tracking-widest">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">Who It&apos;s For</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-playfair)' }}>
              All Authentic Ministry <span className="italic font-light">Is Healing Ministry</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {WHO_ITS_FOR.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section id="about" className="py-24 bg-[#FCFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">About IOSHA</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ecclesiastically <span className="italic font-light">Grounded</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              IOSHA is an ecclesiastically established ordaining body operating under recognized church authority. Our ordination carries real legal standing — not because we say so, but because of the structure behind it.
            </p>
          </div>
          <div className="space-y-4">
            {CREDIBILITY.map((item) => (
              <div key={item.label} className="bg-white border border-stone-200 p-8 flex gap-6 shadow-sm">
                <span className="text-emerald-600 font-bold text-lg mt-0.5">✦</span>
                <div>
                  <h3 className="font-bold text-stone-900 uppercase text-xs tracking-widest mb-2">{item.label}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Begin Your <span className="italic font-light">Ministry?</span>
          </h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Create your account on the Minister Portal, complete the foundation course, and receive your ordination credentials.
          </p>
          <Link href="https://ministerportal.vercel.app/auth/signup" className="bg-white text-emerald-800 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-50 transition-all shadow-lg inline-block">
            Begin Ordination
          </Link>
          <p className="text-emerald-200 text-sm mt-6">Currently accepting applications — access is by invitation code</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={60} height={60} className="object-contain" />
              <div>
                <div className="text-white font-bold tracking-[0.2em] text-sm" style={{ fontFamily: 'var(--font-playfair)' }}>IOSHA</div>
                <div className="text-stone-400 text-[9px] tracking-widest uppercase mt-1">International Order of Sacred Healing Arts</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Portals</h4>
                <ul className="space-y-2">
                  <li><Link href="https://ministerportal.vercel.app" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">Minister Portal</Link></li>
                  <li><Link href="https://elder-portal.vercel.app" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">Elder Portal</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Ministry</h4>
                <ul className="space-y-2">
                  <li><a href="#ordination" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">Ordination</a></li>
                  <li><a href="#about" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">About IOSHA</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-xs tracking-wide">© 2026 IOSHA — International Order of Sacred Healing Arts. All rights reserved.</p>
            <p className="text-stone-600 text-xs">A 508(c)(1)(A) Faith-Based Organization</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
