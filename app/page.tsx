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

const ORDINATION_LEVELS = [
  {
    level: 'Deacon',
    description: 'Entry into ordained service — credentials, Letter of Direction, and the foundation course. The beginning of your ministerial journey.',
  },
  {
    level: 'Minister',
    description: 'Full ministerial standing — recognized clergy credentials in all 50 states, authority to perform ceremonies, and complete covenant framework for your assembly.',
    featured: true,
  },
  {
    level: 'Reverend',
    description: 'Senior ministerial standing — advanced formation, expanded scope of ministry, and leadership recognition within the IOSHA assembly.',
  },
]

const WHAT_IOSHA_PROVIDES = [
  { title: 'Ordination Credentials', description: 'Official IOSHA ordination certificate, credential number, and clergy standing recognized in all 50 states' },
  { title: 'Letter of Direction', description: 'Your personal ministerial scope document — presented to banks, landlords, and institutions as your stewardship credential' },
  { title: 'Foundation Course', description: 'Six weeks of ministerial formation — theology, healing modalities, church governance, covenant framework, and pastoral practice' },
  { title: 'Covenant Templates', description: 'Participation covenants, assembly guidelines, and stewardship standards — everything you need to establish your Private Faith Assembly' },
  { title: 'State-by-State Guidance', description: 'What you may and may not say and do in ministry — by state — so you walk faithfully and clearly in your calling' },
  { title: 'Ongoing Standing', description: 'Annual covenant reaffirmation keeps your credentials current and your standing in the IOSHA assembly active' },
]

const FUNDAMENTAL_TRUTHS = [
  { title: 'The Sacred Source', body: 'We believe in a loving, healing Divine Presence — known by many names and honored in many traditions: God, Goddess, Spirit, Source, Creator, Great Mystery, Universal Consciousness, Divine Love.' },
  { title: 'The Sacredness of All Life', body: 'Every person, creature, plant, and element is sacred and interconnected. Healing one heals the whole.' },
  { title: 'The Divine Nature of Healing', body: 'Healing is a sacred gift flowing from Spirit. The healer is a vessel, not the source — a channel of the Divine\'s love and restoration.' },
  { title: 'Mother Earth as Sacred Teacher', body: 'We honor the Earth as a living, conscious being. Earth-based healing arts are sacred expressions of our covenant with creation.' },
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
              <a href="#mission" className="text-stone-500 hover:text-emerald-800 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">Mission</a>
              <a href="#ordination" className="text-stone-500 hover:text-emerald-800 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">Ordination</a>
              <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-stone-900 text-emerald-50 px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-emerald-900 transition-all">
                Apply
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
            <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">International Order of Sacred Healing Arts</span>
            <div className="h-[1px] w-16 bg-emerald-600/30"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Awaken. Train. Ordain.<br /><span className="italic font-light">Walk in Sacred Service.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            IOSHA is a spiritual tribe and healing order — a Mother Church empowered to ordain ministers and charter integrated auxiliaries in the ancient and sacred arts of healing.
          </p>
          <p className="text-lg text-stone-500 italic max-w-2xl mx-auto mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
            United by a shared covenant of healing, not by blood or political jurisdiction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-stone-900 text-emerald-50 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-900 transition-all shadow-lg">
              Apply for Ordination
            </Link>
            <a href="#mission" className="border border-stone-300 text-stone-700 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:border-emerald-700 hover:text-emerald-800 transition-all">
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
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.4em]">Core Mission</span>
            <div className="h-[1px] w-12 bg-emerald-500/40"></div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            To Awaken, Train, Ordain<br /><span className="italic font-light text-emerald-400">and Support Healing Ministers</span>
          </h2>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            We organize not for profit, but for the sacred purposes of worship, healing, education, and charity — to train ministers in the theology, ethics, and practice of spiritual healing arts, and to ordain clergy who serve their communities through the ancient and sacred healing modalities.
          </p>
          <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
            We honor these modalities as religious and spiritual practices — acts of devotion, sacred service, and communion with the Divine Source.
          </p>

          {/* Healing Arts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 text-left">
            {HEALING_ARTS.map((art) => (
              <div key={art.title} className="border border-stone-700 p-6">
                <h3 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-2">{art.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{art.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Fundamental Truths */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">Statement of Fundamental Truths</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Foundation of <span className="italic font-light">Our Faith</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FUNDAMENTAL_TRUTHS.map((truth) => (
              <div key={truth.title} className="bg-[#FCFAF8] border border-stone-200 p-8">
                <span className="text-emerald-700 text-lg mb-4 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-3 uppercase text-xs tracking-widest">{truth.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{truth.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordination Levels */}
      <section id="ordination" className="py-24 bg-[#FCFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">Ordination Pathway</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Three Levels of <span className="italic font-light">Ordained Standing</span>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">Each level of ordination confers deeper formation, broader ministerial scope, and greater standing within the IOSHA assembly.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ORDINATION_LEVELS.map((item) => (
              <div key={item.level} className={`p-8 border ${item.featured ? 'border-emerald-700 bg-emerald-50/40 shadow-md' : 'border-stone-200 bg-white shadow-sm'}`}>
                {item.featured && <div className="text-emerald-800 text-xs font-bold uppercase tracking-widest mb-3">Most Common Entry</div>}
                <span className="text-emerald-700 text-lg mb-4 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-3 uppercase text-sm tracking-widest" style={{ fontFamily: 'var(--font-playfair)' }}>{item.level}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What IOSHA Provides */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">What IOSHA Provides</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Credentials, Formation <span className="italic font-light">& Framework</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_IOSHA_PROVIDES.map((item) => (
              <div key={item.title} className="bg-[#FCFAF8] border border-stone-200 p-8 shadow-sm">
                <span className="text-emerald-700 text-lg mb-4 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-3 uppercase text-xs tracking-widest">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecclesiastical Standing */}
      <section className="py-24 bg-[#FCFAF8] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">Ecclesiastical Foundation</span>
            <div className="h-[1px] w-12 bg-emerald-600/30"></div>
          </div>
          <h2 className="text-4xl font-bold text-stone-900 mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Grounded in <span className="italic font-light">Real Authority</span>
          </h2>
          <div className="space-y-4 text-left">
            {[
              { label: 'Mother Church', value: 'IOSHA is empowered as a Mother Church — ordaining ministers and chartering integrated auxiliaries (priories) across all healing modalities.' },
              { label: '508(c)(1)(A) Faith-Based Organization', value: 'Established as a Florida FBO operating under 508(c)(1)(A) — automatically tax-exempt, sovereign in its internal affairs, organized for religious, charitable, and educational purposes.' },
              { label: 'Nationwide Ministerial Standing', value: 'Your Letter of Direction and ordination credentials are recognized in all 50 states as evidence of your calling and ministerial scope.' },
              { label: 'Private Faith Assembly Framework', value: 'Those you serve enter into covenant fellowship with your assembly — a sacred relationship governed by covenant principles, not commercial terms.' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-stone-200 p-8 flex gap-6 shadow-sm">
                <span className="text-emerald-700 font-bold text-lg mt-0.5">✦</span>
                <div>
                  <h3 className="font-bold text-stone-900 uppercase text-xs tracking-widest mb-2">{item.label}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-500/40"></div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.4em]">The Path to Ordination</span>
              <div className="h-[1px] w-12 bg-emerald-500/40"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              A Covenant, <span className="italic font-light text-emerald-400">Not a Transaction</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              IOSHA ordination is granted through a covenant relationship. Every candidate is reviewed by the Elders Council before ordination is conferred.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Submit Application', body: 'Share your calling, healing practice, and ministerial intent. Tell us who you are and what you are being called to do.' },
              { step: '02', title: 'Background Review', body: 'All candidates complete a background check as part of our covenant of integrity and community trust.' },
              { step: '03', title: 'Council Approval', body: 'The Elders Council reviews each application. Ordination is granted by the council — not automatically upon registration.' },
              { step: '04', title: 'Formation & Ordination', body: 'Upon approval, complete the Foundation Course and receive your ordination credentials, Letter of Direction, and full ministerial standing.' },
            ].map((item) => (
              <div key={item.step} className="border border-stone-700 p-6">
                <div className="text-emerald-500 font-bold text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{item.step}</div>
                <h3 className="font-bold text-white uppercase text-xs tracking-widest mb-3">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-emerald-800">
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
            If you feel called to minister, apply. Share your heart and your practice. The Elders Council reviews every application personally.
          </p>
          <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-white text-emerald-800 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-50 transition-all shadow-lg inline-block">
            Apply for Ordination
          </Link>
          <p className="text-emerald-200 text-sm mt-6">Applications reviewed by the Elders Council — not automated</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex items-center gap-4">
              <Image src="/iosha-logo.png" alt="IOSHA" width={120} height={120} className="object-contain brightness-0 invert" />
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
            <p className="text-stone-500 text-xs tracking-wide">© 2025–2026 IOSHA — International Order of Sacred Healing Arts. All rights reserved.</p>
            <p className="text-stone-600 text-xs">A 508(c)(1)(A) Faith-Based Organization</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
