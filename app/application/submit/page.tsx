'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { submitApplication } from '../actions'

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

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: G }}>
      {children}{required && <span className="ml-1 text-red-500">*</span>}
    </label>
  )
}

const inputClass = 'w-full px-4 py-3 text-sm border bg-white focus:outline-none focus:ring-2'
const inputStyle = { borderColor: '#d4e6c8', focusRingColor: G }

export default function SubmitPage() {
  const [ordained, setOrdained] = useState('')
  const [backgroundCheck, setBackgroundCheck] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError('')
    const formData = new FormData(e.currentTarget)
    const result = await submitApplication(formData)
    if (result.error) {
      setError(result.error)
      setPending(false)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div style={{ fontFamily: 'var(--font-jakarta)', backgroundColor: '#FCFAF8' }} className="min-h-screen">
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
            </div>
          </div>
        </nav>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <span className="text-5xl block mb-8" style={{ color: G }}>✦</span>
          <h1 className="text-4xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)', color: G }}>
            Application <span className="italic font-light">Received</span>
          </h1>
          <p className="text-lg text-stone-500 mb-8 leading-relaxed">
            Thank you for applying. Your application has been submitted to the Elders Council for personal review. You will hear from us within 7–14 days.
          </p>
          <div className="p-8 mb-8" style={{ backgroundColor: 'white', border: '1px solid #d4e6c8' }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: G }}>What Happens Next</div>
            <div className="space-y-3 text-sm text-stone-500 text-left">
              <div className="flex gap-3"><span style={{ color: G }}>01</span><span>The Elders Council reviews your application and references</span></div>
              <div className="flex gap-3"><span style={{ color: G }}>02</span><span>You may be contacted to complete or submit a background check</span></div>
              <div className="flex gap-3"><span style={{ color: G }}>03</span><span>Upon approval, you will receive onboarding instructions for credentials or the Foundation Course</span></div>
            </div>
          </div>
          <Link href="/" className="text-sm font-semibold" style={{ color: G }}>← Return to IOSHA</Link>
        </div>
      </div>
    )
  }

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

      <Progress step={3} />

      <div className="max-w-3xl mx-auto px-4 py-14">

        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: G, opacity: 0.3 }} />
            <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: G }}>Step 3 of 3</span>
            <div className="h-px w-10" style={{ backgroundColor: G, opacity: 0.3 }} />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: G }}>
            Your <span className="italic font-light">Application</span>
          </h1>
          <p className="text-stone-500">All fields marked with * are required.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {error && (
            <div className="p-4 text-sm text-red-700" style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #dc2626' }}>
              {error}
            </div>
          )}

          {/* Personal Info */}
          <div className="bg-white p-8" style={{ border: '1px solid #d4e6c8' }}>
            <h2 className="text-lg font-bold mb-6 uppercase tracking-widest" style={{ color: G }}>Personal Information</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <input name="name" required type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="Your full legal name" />
              </div>
              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <input name="email" required type="email" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="your@email.com" />
              </div>
              <div>
                <FieldLabel>Phone Number</FieldLabel>
                <input name="phone" type="tel" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="(optional)" />
              </div>
              <div>
                <FieldLabel>City &amp; State</FieldLabel>
                <input name="location" type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="Portland, OR" />
              </div>
            </div>
          </div>

          {/* Ministry */}
          <div className="bg-white p-8" style={{ border: '1px solid #d4e6c8' }}>
            <h2 className="text-lg font-bold mb-6 uppercase tracking-widest" style={{ color: G }}>Your Ministry</h2>
            <div className="space-y-5">
              <div>
                <FieldLabel required>Healing Modality / Practice</FieldLabel>
                <input name="modality" required type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }}
                  placeholder="e.g. Reiki Master, Herbalist, Ceremonial Minister, Sound Healer..." />
              </div>
              <div>
                <FieldLabel required>Statement of Calling</FieldLabel>
                <textarea name="calling" required rows={6} className={inputClass} style={{ borderColor: '#d4e6c8', resize: 'vertical' }}
                  placeholder="Describe your healing practice, your spiritual foundation, and why you are seeking ordination through IOSHA..." />
              </div>
            </div>
          </div>

          {/* Ordination Status */}
          <div className="bg-white p-8" style={{ border: '1px solid #d4e6c8' }}>
            <h2 className="text-lg font-bold mb-6 uppercase tracking-widest" style={{ color: G }}>Ordination Status</h2>
            <FieldLabel required>Are you currently ordained through another organization?</FieldLabel>
            <div className="flex gap-6 mt-2 mb-5">
              {['yes', 'no'].map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="ordained" value={val} required
                    onChange={() => setOrdained(val)}
                    className="w-4 h-4" style={{ accentColor: G }} />
                  <span className="text-sm capitalize" style={{ color: G }}>{val === 'yes' ? 'Yes — I am already ordained' : 'No — I am seeking ordination through IOSHA'}</span>
                </label>
              ))}
            </div>
            {ordained === 'yes' && (
              <div>
                <FieldLabel>Please describe your existing ordination</FieldLabel>
                <textarea name="ordinationDetails" rows={3} className={inputClass} style={{ borderColor: '#d4e6c8', resize: 'vertical' }}
                  placeholder="Ordaining organization, year, credential type..." />
              </div>
            )}
            {ordained === 'no' && (
              <div className="p-4 text-sm" style={{ backgroundColor: '#FCFAF8', border: '1px solid #e8f0e4', color: '#4a6b38' }}>
                Upon council approval, you will be enrolled in the Foundation Ordination Course to receive your IOSHA ministerial credentials.
              </div>
            )}
          </div>

          {/* References */}
          <div className="bg-white p-8" style={{ border: '1px solid #d4e6c8' }}>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-widest" style={{ color: G }}>References</h2>
            <p className="text-sm text-stone-500 mb-6">Provide two people who can speak to your character, calling, and integrity as a minister.</p>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: G }}>Reference 1 (required)</div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <FieldLabel required>Name</FieldLabel>
                  <input name="ref1Name" required type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="Full name" />
                </div>
                <div>
                  <FieldLabel required>Email</FieldLabel>
                  <input name="ref1Email" required type="email" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="email@example.com" />
                </div>
                <div>
                  <FieldLabel>Relationship</FieldLabel>
                  <input name="ref1Relationship" type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="Colleague, student, etc." />
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: G }}>Reference 2 (recommended)</div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <FieldLabel>Name</FieldLabel>
                  <input name="ref2Name" type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="Full name" />
                </div>
                <div>
                  <FieldLabel>Email</FieldLabel>
                  <input name="ref2Email" type="email" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="email@example.com" />
                </div>
                <div>
                  <FieldLabel>Relationship</FieldLabel>
                  <input name="ref2Relationship" type="text" className={inputClass} style={{ borderColor: '#d4e6c8' }} placeholder="Colleague, student, etc." />
                </div>
              </div>
            </div>
          </div>

          {/* Background Check */}
          <div className="bg-white p-8" style={{ border: '1px solid #d4e6c8' }}>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-widest" style={{ color: G }}>Background Check</h2>
            <p className="text-sm text-stone-500 mb-5">All ordination candidates are required to complete a background check. You may complete this before or after submitting your application.</p>
            <FieldLabel required>Background check status</FieldLabel>
            <div className="flex flex-col gap-3 mt-2">
              {[
                { val: 'completed', label: 'I have already completed a background check and can provide the report' },
                { val: 'pending', label: 'I will complete a background check when requested by the council' },
              ].map((opt) => (
                <label key={opt.val} className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="backgroundCheck" value={opt.val} required
                    onChange={() => setBackgroundCheck(opt.val)}
                    className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ accentColor: G }} />
                  <span className="text-sm text-stone-600">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Agreement */}
          <div className="bg-white p-8" style={{ border: '1px solid #d4e6c8' }}>
            <h2 className="text-lg font-bold mb-5 uppercase tracking-widest" style={{ color: G }}>Agreement</h2>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="agree" value="yes" required className="w-4 h-4 mt-1 flex-shrink-0" style={{ accentColor: G }} />
              <span className="text-sm text-stone-600 leading-relaxed">
                I affirm that the information provided in this application is accurate and complete. I understand that IOSHA ordination is granted through a discernment process by the Elders Council, and that submission of this application does not guarantee ordination. I agree to uphold the ethical standards of the IOSHA ministerial covenant.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="text-center pt-2 pb-10">
            <button type="submit" disabled={pending}
              className="px-14 py-4 text-sm font-bold tracking-[0.2em] uppercase btn-forest shadow disabled:opacity-50">
              {pending ? 'Submitting...' : 'Submit Application'}
            </button>
            <p className="text-xs text-stone-400 mt-4">Applications are personally reviewed by the Elders Council within 7–14 days.</p>
          </div>

        </form>

        <div className="text-center pb-8">
          <Link href="/application/info" className="text-sm text-stone-400 hover:text-stone-600">← Back</Link>
        </div>

      </div>
    </div>
  )
}
