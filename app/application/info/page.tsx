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

export default function InfoPage() {
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

      <Progress step={2} />

      <div className="max-w-3xl mx-auto px-4 py-14">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: G, opacity: 0.3 }} />
            <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: G }}>What to Expect</span>
            <div className="h-px w-10" style={{ backgroundColor: G, opacity: 0.3 }} />
          </div>
          <h1 className="text-5xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)', color: G }}>
            Requirements &amp; <span className="italic font-light">What You Receive</span>
          </h1>
          <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
            Ordination through IOSHA is a real process with real review — and real ministerial standing on the other side.
          </p>
        </div>

        {/* What You Receive */}
        <div className="bg-white p-8 mb-6" style={{ border: '1px solid #d4e6c8' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: G }}>What You Receive</h2>
          <div className="space-y-5">
            {[
              { title: 'Official Ordination Certificate', body: 'Your credential number and clergy standing — recognized in all 50 states. Present it anywhere a minister\'s credentials are required.' },
              { title: 'Ministerial Authorization Letter', body: 'A personal letter from IOSHA defining your specific healing and ministry scope. Your official ecclesiastical credential — it speaks for your ministry.' },
              { title: 'Right to Establish a Private Faith Assembly', body: 'Serve your members through a recognized private religious association. Removes your ministry from public business licensing requirements.' },
              { title: 'Authorization to Officiate', body: 'Perform weddings, funerals, baptisms, rites of passage, healing ceremonies, blessings, and all ministerial acts — in all 50 states.' },
              { title: 'Community & Annual Covenant', body: 'You are not ordained and abandoned. Annual reaffirmation keeps credentials current. The IOSHA minister network keeps you connected.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-lg flex-shrink-0" style={{ color: G }}>✦</span>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wide mb-1" style={{ color: G }}>{item.title}</div>
                  <div className="text-sm text-stone-500 leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white p-8 mb-6" style={{ border: '1px solid #d4e6c8' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: G }}>Ordination Requirements</h2>
          <div className="space-y-4">
            {[
              { title: 'Firmly Held Spiritual Belief', body: 'Your healing practice must be rooted in sincere, firmly held spiritual or religious conviction — not just technique.' },
              { title: 'Two Personal References', body: 'Provide two references who can speak to your character, calling, and integrity as a minister.' },
              { title: 'Background Check', body: 'All candidates complete a background verification through one of our approved church screening vendors (cost borne by applicant, typically $25–$75).' },
              { title: 'Statement of Calling', body: 'A brief personal statement describing your healing practice, your spiritual foundation, and why you are seeking ordination.' },
              { title: 'Council Approval', body: 'Applications are reviewed and approved by the Elders Council. This is not automatic — it is a discernment process honoring the gravity of ordination.' },
            ].map((req) => (
              <div key={req.title} className="flex gap-4 p-4" style={{ backgroundColor: '#FCFAF8', border: '1px solid #e8f0e4' }}>
                <span className="text-base flex-shrink-0 mt-0.5" style={{ color: G }}>✓</span>
                <div>
                  <div className="font-bold text-sm mb-0.5" style={{ color: G }}>{req.title}</div>
                  <div className="text-sm text-stone-500 leading-relaxed">{req.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Check Vendors */}
        <div className="bg-white p-8 mb-6" style={{ border: '1px solid #d4e6c8' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)', color: G }}>Approved Background Check Vendors</h2>
          <p className="text-sm text-stone-500 mb-5">Complete your background check through any of these approved providers before submitting your application, or complete it after applying if instructed by council.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: 'Protect My Ministry', url: 'https://www.protectmyministry.com' },
              { name: 'MinistryWorks', url: 'https://www.ministryworks.com' },
              { name: 'Brotherhood Mutual', url: 'https://www.brotherhoodmutual.com' },
              { name: 'National Background Check', url: 'https://www.nationalbackgroundcheck.com' },
            ].map((v) => (
              <a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 text-sm hover:opacity-80 transition-opacity"
                style={{ border: '1px solid #d4e6c8', color: G }}>
                <span className="font-semibold">{v.name}</span>
                <span className="text-xs opacity-60">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* If Already Ordained */}
        <div className="p-6 mb-10" style={{ backgroundColor: G }}>
          <div className="text-white">
            <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Already Ordained Elsewhere?</div>
            <p className="text-sm leading-relaxed" style={{ color: '#c4d9bb' }}>
              If you hold ordination credentials from another recognized organization, you may submit those with your application. The Elders Council will review and may grant recognition without requiring the Foundation Course.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/application/welcome" className="text-sm text-stone-400 hover:text-stone-600">
            ← Back
          </Link>
          <Link href="/application/submit"
            className="inline-block px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase btn-forest shadow">
            Begin Application →
          </Link>
        </div>

      </div>
    </div>
  )
}
