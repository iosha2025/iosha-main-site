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
  { title: 'Ordination Certificate', description: 'Recognized ecclesiastical credentials as an ordained minister of sacred healing arts — your covenant standing in the assembly' },
  { title: 'Letter of Direction', description: 'Defines the scope of your healing ministry — presented to banks, landlords, and institutions as your stewardship credential' },
  { title: 'Private Faith Assembly', description: 'Your covenant community operates as a sacred assembly — those you serve are covenant holders and congregants, not customers' },
  { title: '508(c)(1)(A) Standing', description: 'Your ministry operates as a Faith-Based Organization with automatic tax-exempt status — no government application required' },
  { title: 'Covenant Framework', description: 'Complete covenant documentation — participation covenants, assembly guidelines, and stewardship standards for your ministry' },
  { title: 'Foundation Course', description: 'Six weeks of ministry formation — theology, church governance, stewardship, banking, and pastoral practice' },
]

const PILLARS = [
  {
    title: 'Sacred Calling',
    body: 'IOSHA recognizes that healing is not merely a profession — it is a vocation. We ordain those called to serve others through the sacred healing arts as ministers of that calling.'
  },
  {
    title: 'Covenant Community',
    body: 'Every IOSHA minister is part of a covenant assembly — a fellowship of practitioners who share theological commitments, ethical standards, and a common understanding of healing as sacred service.'
  },
  {
    title: 'Ecclesiastical Standing',
    body: 'Our ordination is grounded in real ecclesiastical authority — apostolic succession, documented lineage, and a 508(c)(1)(A) Faith-Based Organization structure established in Florida.'
  },
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
              <a href="#mission" className="text-stone-500 hover:text-emerald-700 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">Mission</a>
              <a href="#ordination" className="text-stone-500 hover:text-emerald-700 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">Ordination</a>
              <Link href="https://ministerportal.vercel.app" className="bg-stone-900 text-emerald-50 px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-emerald-700 transition-all">
                Enter Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-36 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-16 bg-emerald-600/30"></div>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">International Order of Sacred Healing Arts</span>
            <div className="h-[1px] w-16 bg-emerald-600/30"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Answering the Call<br /><span className="italic font-light">to Healing Ministry</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            IOSHA is an ecclesiastical assembly ordaining those called to sacred healing arts — recognizing healing not as a service, but as a ministry of sacred covenant and care.
          </p>
          <p className="text-lg text-stone-500 italic max-w-2xl mx-auto mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
            All authentic ministry is healing ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://ministerportal.vercel.app/auth/signup" className="bg-stone-900 text-emerald-50 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-700 transition-all shadow-lg">
              Begin Your Ordination
            </Link>
            <a href="#mission" className="border border-stone-300 text-stone-700 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:border-emerald-600 hover:text-emerald-700 transition-all">
              Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-emerald-500/40"></div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.4em]">Our Mission</span>
            <div className="h-[1px] w-12 bg-emerald-500/40"></div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Recognizing Healing as <span className="italic font-light text-emerald-400">Sacred Service</span>
          </h2>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            IOSHA exists to ordain, equip, and support those called to sacred healing ministry — providing the ecclesiastical standing, covenant framework, and ministerial formation needed to walk faithfully in that calling.
          </p>
          <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
            We believe the healer, the herbalist, the sound worker, the counselor, and the ceremonial minister are all expressions of one sacred call — to serve the wholeness of those entrusted to their care.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {PILLARS.map((p) => (
              <div key={p.title} className="border border-stone-700 p-8 text-left">
                <h3 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-4">{p.title}</h3>
                <p className="text-stone-300 leading-relaxed text-sm">{p.body}</p>
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
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">Who We Ordain</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Many Gifts, <span className="italic font-light">One Calling</span>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">IOSHA ordains practitioners across all healing modalities — recognizing each expression of sacred service as genuine ministry.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {WHO_ITS_FOR.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-emerald-600">✦</span>
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section id="ordination" className="py-24 bg-[#FCFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">Ordination</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              What Ordination <span className="italic font-light">Provides</span>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">Full ministerial standing within an ecclesiastically grounded assembly — with the covenant framework and credentials to walk faithfully in your calling.</p>
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

      {/* Ecclesiastical Grounding */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.4em]">Ecclesiastical Foundation</span>
            <div className="h-[1px] w-12 bg-emerald-600/30"></div>
          </div>
          <h2 className="text-4xl font-bold text-stone-900 mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Grounded in <span className="italic font-light">Real Authority</span>
          </h2>
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            {[
              { label: 'Apostolic Succession', value: 'IOSHA ordination is grounded in documented ecclesiastical lineage — real church authority, not a certificate mill.' },
              { label: '508(c)(1)(A) Faith-Based Organization', value: 'Established as a Florida FBO operating under 508(c)(1)(A) — your ministry benefits from automatic tax-exempt standing as an integrated auxiliary.' },
              { label: 'Nationwide Covenant Standing', value: 'Your Letter of Direction and ordination credentials are recognized in all 50 states as evidence of your ministerial calling and scope.' },
              { label: 'Private Faith Assembly Structure', value: 'Those you serve enter into covenant fellowship with your assembly — a sacred relationship governed by covenant principles, not commercial terms.' },
            ].map((item) => (
              <div key={item.label} className="bg-[#FCFAF8] border border-stone-200 p-8 flex gap-6">
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
      <section className="py-32 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-emerald-500/50"></div>
            <span className="text-emerald-200 text-xs font-bold uppercase tracking-[0.4em]">Enter into Fellowship</span>
            <div className="h-[1px] w-12 bg-emerald-500/50"></div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Walk in Your <span className="italic font-light">Calling</span>
          </h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Create your account in the Minister Portal, complete the foundation course, and receive your ordination credentials and Letter of Direction.
          </p>
          <Link href="https://ministerportal.vercel.app/auth/signup" className="bg-white text-emerald-800 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-50 transition-all shadow-lg inline-block">
            Begin Your Ordination
          </Link>
          <p className="text-emerald-200 text-sm mt-6">Currently accepting covenant participants — entry by invitation code</p>
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
                <h4 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Assembly</h4>
                <ul className="space-y-2">
                  <li><a href="#mission" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">Our Mission</a></li>
                  <li><a href="#ordination" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">Ordination</a></li>
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
