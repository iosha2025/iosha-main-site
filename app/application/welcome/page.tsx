import Link from 'next/link'
import Image from 'next/image'

const G = '#1d5306'

function Progress({ step }: { step: number }) {
  const steps = ['Welcome', 'The Process', 'Apply']
  return (
    <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e8f0e4' }}>
      <div className="max-w-3xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => {
            const n = i + 1
            const active = n === step
            const done = n < step
            return (
              <div key={label} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: active || done ? G : '#e8f0e4', color: active || done ? 'white' : '#999' }}>
                    {done ? '✓' : n}
                  </div>
                  <span className="text-sm font-semibold hidden sm:block" style={{ color: active ? G : '#999' }}>{label}</span>
                </div>
                {i < steps.length - 1 && <div className="flex-1 h-px mx-4" style={{ backgroundColor: done ? G : '#e8f0e4' }} />}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const HEALING_ARTS = [
  { title: 'Energy Healers', body: 'Reiki, Healing Touch, biofield therapy, chakra work, frequency medicine' },
  { title: 'Herbalists & Plant Medicine', body: 'Herbal practice, plant spirit work, earth-based healing traditions' },
  { title: 'Sound & Vibrational Healers', body: 'Sound bowls, gongs, tuning forks, vocal toning, frequency work' },
  { title: 'Ceremonial Ministers', body: 'Weddings, funerals, naming ceremonies, rites of passage, seasonal rites' },
  { title: 'Somatic Practitioners', body: 'Breathwork, trauma release, movement healing, nervous system regulation' },
  { title: 'Spiritual Counselors', body: 'Pastoral care, spiritual direction, grief support, intention work' },
]

export default function WelcomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-jakarta)', backgroundColor: '#FCFAF8' }} className="min-h-screen">

      {/* Nav */}
      <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #e8f0e4' }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/iosha-logo.png" alt="IOSHA" width={60} height={60} className="object-contain" />
              <div>
                <div className="text-base font-bold tracking-[0.2em] leading-none" style={{ fontFamily: 'var(--font-playfair)', color: G }}>IOSHA</div>
                <div className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: G }}>International Order of Sacred Healing Arts</div>
              </div>
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: G }}>Minister Application</span>
          </div>
        </div>
      </nav>

      <Progress step={1} />

      <div className="max-w-3xl mx-auto px-4 py-14">

        {/* Hero */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: G, opacity: 0.3 }} />
            <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: G }}>Ordination Application</span>
            <div className="h-px w-10" style={{ backgroundColor: G, opacity: 0.3 }} />
          </div>
          <h1 className="text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)', color: G }}>
            Welcome to <span className="italic font-light">IOSHA</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto text-stone-500">
            You've been doing this work. Now let's give it the standing it deserves — a real ministerial credential, recognized in all 50 states.
          </p>
        </div>

        {/* What is IOSHA */}
        <div className="bg-white p-8 mb-6" style={{ border: '1px solid #d4e6c8' }}>
          <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)', color: G }}>What is IOSHA?</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>The <strong style={{ color: G }}>International Order of Sacred Healing Arts</strong> is a free church that ordains healing ministers — energy healers, herbalists, ceremonial practitioners, sound healers, spiritual counselors, and all who answer the call to sacred ministry.</p>
            <p>We provide ecclesiastical covering, ministerial credentials, and a genuine community of ministers who get what you do. No dogma. No gatekeeping. Real standing for real healers.</p>
            <div className="mt-6 p-5" style={{ backgroundColor: '#FCFAF8', border: '1px solid #d4e6c8' }}>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: G }}>Our Foundation</p>
              <p className="italic text-stone-500">&ldquo;All authentic ministry is healing ministry. Whether you offer energy sessions, lead ceremonies, counsel souls, or bless the earth — if you are called to serve, you belong here.&rdquo;</p>
            </div>
          </div>
        </div>

        {/* Who We Ordain */}
        <div className="bg-white p-8 mb-6" style={{ border: '1px solid #d4e6c8' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)', color: G }}>Who We Ordain</h2>
          <p className="text-stone-500 mb-6 text-sm">IOSHA ordains across every healing tradition, subject to council approval:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {HEALING_ARTS.map((art) => (
              <div key={art.title} className="p-4" style={{ border: '1px solid #e8f0e4' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: G }}>✦ {art.title}</div>
                <div className="text-xs text-stone-500 leading-relaxed">{art.body}</div>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-stone-400 mt-4">...and any healing modality rooted in firmly held spiritual belief — subject to Elders Council approval.</p>
        </div>

        {/* Application Process Overview */}
        <div className="bg-white p-8 mb-10" style={{ border: '1px solid #d4e6c8' }}>
          <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)', color: G }}>The Application Process</h2>
          <div className="space-y-4">
            {[
              { n: '01', title: 'Submit Your Application', body: 'Tell us about your calling, your healing practice, and provide two references.' },
              { n: '02', title: 'Background Verification', body: 'All candidates complete a background check through one of our approved vendors.' },
              { n: '03', title: 'Elders Council Review', body: 'Your application is personally reviewed by the Elders Council. This is a real discernment process — not a rubber stamp.' },
              { n: '04', title: 'Receive Your Credentials', body: 'Approved ministers receive their credentials directly or complete the Foundation Ordination Course if not previously ordained.' },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 items-start">
                <span className="text-3xl font-bold italic flex-shrink-0" style={{ fontFamily: 'var(--font-playfair)', color: G, opacity: 0.25 }}>{step.n}</span>
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest mb-1" style={{ color: G }}>{step.title}</div>
                  <div className="text-sm text-stone-500 leading-relaxed">{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/application/info"
            className="inline-block px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase btn-forest shadow">
            Continue — What to Expect →
          </Link>
          <p className="text-xs text-stone-400 mt-4">Takes about 10 minutes to complete</p>
        </div>

      </div>
    </div>
  )
}
