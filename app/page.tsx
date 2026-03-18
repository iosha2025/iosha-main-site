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
    description: 'Your first step into ordained service. You receive your credentials, your Ministerial Authorization Letter, and begin the Foundation Course at your own pace.',
  },
  {
    level: 'Minister',
    description: 'Full ordained standing — clergy credentials recognized in all 50 states, authority to perform all ceremonies, and everything you need to open your own faith assembly.',
    featured: true,
  },
  {
    level: 'Reverend',
    description: 'For those called to deeper leadership — expanded scope, advanced formation, and recognized standing within the broader IOSHA community of healers.',
  },
]

const WHAT_IOSHA_PROVIDES = [
  { title: 'Ordination Credentials', description: 'Your official certificate, credential number, and clergy standing — recognized in all 50 states. Present it anywhere a minister\'s credentials are asked for.' },
  { title: 'Ministerial Authorization Letter', description: 'A personal letter from IOSHA defining your specific healing scope — bring it to your bank, your landlord, your members. It speaks for your ministry so you don\'t have to explain yourself.' },
  { title: 'Foundation Course', description: 'Six weeks of real formation — not busy work. Theology, healing practice, how to set up your assembly, how to protect your work. Built for working healers.' },
  { title: 'Covenant Templates', description: 'Member agreements, assembly guidelines, stewardship documents — everything you need to open your Private Faith Assembly, ready to customize.' },
  { title: 'State-by-State Guidance', description: 'Plain-language guidance on what you can say and do in your state — so you can move confidently in your practice.' },
  { title: 'Community & Ongoing Standing', description: 'You\'re not ordained and abandoned. Annual reaffirmation keeps your credentials current, and the IOSHA network keeps you connected.' },
]

const MINISTER_RIGHTS = [
  { title: 'Officiate Weddings', description: 'Legally perform and sign marriage ceremonies in all 50 states as recognized clergy.' },
  { title: 'Conduct Funerals & Memorials', description: 'Lead memorial services, funeral rites, and end-of-life ceremonies for those in your care.' },
  { title: 'Perform Baptisms & Dedications', description: 'Administer baptism, infant dedication, naming ceremonies, and initiation rites.' },
  { title: 'Heal Through Sacred Sacrament', description: 'Practice energy healing, laying on of hands, anointing, and healing prayer as recognized sacerdotal acts of your ministry.' },
  { title: 'Lead Worship & Sacred Gatherings', description: 'Convene healing circles, prayer groups, ceremonies, and community worship as acts of religious service.' },
  { title: 'Bless Persons, Places & Objects', description: 'Offer blessings of homes, businesses, land, sacred objects, and individuals within your ministerial scope.' },
  { title: 'Establish a Private Faith Assembly', description: 'Open your own faith-based assembly with covenant membership — your community governed by sacred covenant, not commercial terms.' },
  { title: 'Open a Church Bank Account', description: 'Present your ordination credentials and Ministerial Authorization Letter to establish a church account for your assembly\'s offerings and stewardship.' },
  { title: 'Perform Rites of Passage', description: 'Officiate vision quests, coming-of-age ceremonies, seasonal rites, and spiritual milestones for your congregation.' },
  { title: 'Provide Pastoral Counsel', description: 'Offer spiritual guidance, pastoral care, and faith-based support to your members within your ministerial scope.' },
  { title: 'Claim Clergy Tax Standing', description: 'As an actively serving ordained minister, access clergy tax treatment including housing allowance designation when properly established.' },
  { title: 'Conduct Earth-Based Ceremony', description: 'Lead seasonal ceremonies, plant medicine gatherings, and earth-honoring rites as recognized religious practice.' },
]

const SHARED_VALUES = [
  { title: 'All Names Are Welcome Here', body: 'We don\'t require you to use our words. God, Goddess, Spirit, Source, the Universe, Great Mystery, Divine Love — call it what is true for you. We\'re united by what we do, not what we call it.' },
  { title: 'Healing Is Sacred Work', body: 'What you do is not a side hustle or a hobby. It is ministry. It has always been ministry. IOSHA exists to give that truth a name and a standing in the world.' },
  { title: 'The Healer Deserves to Be Held', body: 'You pour out for others constantly. IOSHA is built to give you a community, a foundation, and the support structure you need to sustain your work for the long haul.' },
  { title: 'The Earth Teaches Us', body: 'We honor earth-based traditions, plant medicine, and indigenous wisdom as living spiritual lineages — not relics. The land is our elder.' },
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
              <a href="#minister-rights" className="text-stone-500 hover:text-emerald-800 text-sm font-semibold tracking-widest uppercase transition-colors hidden md:block">Ministry</a>
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
            Your work is sacred.<br /><span className="italic font-light">Now make it official.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            IOSHA ordains energy healers, herbalists, ceremonial ministers, and all healing practitioners — giving your calling a name, credentials, and a community of people who understand what you do.
          </p>
          <p className="text-lg text-stone-500 italic max-w-2xl mx-auto mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
            No dogma required. No single tradition. Just a shared commitment to healing — and each other.
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
            A home for healers.<br /><span className="italic font-light text-emerald-400">A community that has your back.</span>
          </h2>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Many of us have been doing this work for years — in isolation, without standing, without a community that truly gets it. IOSHA exists to change that. We ordain healing practitioners across every tradition, give you the credentials and tools you need to stand fully in your calling, and surround you with a network of ministers who understand what you do and why it matters.
          </p>
          <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
            This is about more than credentials. It's about being seen, supported, and connected — so you can sustain your work for the long haul.
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

      {/* Shared Values */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">What We Hold in Common</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              No dogma. <span className="italic font-light">Just shared values.</span>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">We don&apos;t hand you a creed and tell you to sign it. These are the things that naturally unite us — regardless of tradition, lineage, or what you call the sacred.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SHARED_VALUES.map((value) => (
              <div key={value.title} className="bg-[#FCFAF8] border border-stone-200 p-8">
                <span className="text-emerald-700 text-lg mb-4 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-3 uppercase text-xs tracking-widest">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{value.body}</p>
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

      {/* Minister Rights */}
      <section id="minister-rights" className="py-24 bg-[#FCFAF8] border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-[0.4em]">Ministerial Authority</span>
              <div className="h-[1px] w-12 bg-emerald-600/30"></div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              What opens up <span className="italic font-light">when you&apos;re ordained</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">As an ordained IOSHA minister, you hold full clergy standing recognized in all 50 states. Here&apos;s what that actually means in practice.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MINISTER_RIGHTS.map((item) => (
              <div key={item.title} className="bg-white border border-stone-200 p-6 shadow-sm">
                <span className="text-emerald-700 text-base mb-3 block">✦</span>
                <h3 className="font-bold text-stone-900 mb-2 uppercase text-xs tracking-widest">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
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
              { label: 'Nationwide Ministerial Standing', value: 'Your Ministerial Authorization Letter and ordination credentials are recognized in all 50 states as evidence of your calling and ministerial scope.' },
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
            You don&apos;t have to<br /><span className="italic font-light">do this alone.</span>
          </h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us about your work and your calling. Every application is read by a real person on the Elders Council — not an algorithm. If you belong here, we&apos;ll know it.
          </p>
          <Link href="https://elder-portal.vercel.app/application/welcome" className="bg-white text-emerald-800 px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-emerald-50 transition-all shadow-lg inline-block">
            Apply for Ordination
          </Link>
          <p className="text-emerald-200 text-sm mt-6">Every application personally reviewed by the Elders Council</p>
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
