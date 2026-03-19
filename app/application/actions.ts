'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.APPLICATION_EMAIL || 'kuleanainfo@protonmail.com'
const FROM = 'onboarding@resend.dev'

export async function submitApplication(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const location = formData.get('location') as string
  const modality = formData.get('modality') as string
  const calling = formData.get('calling') as string
  const ordained = formData.get('ordained') as string
  const ordinationDetails = formData.get('ordinationDetails') as string
  const ref1Name = formData.get('ref1Name') as string
  const ref1Email = formData.get('ref1Email') as string
  const ref1Relationship = formData.get('ref1Relationship') as string
  const ref2Name = formData.get('ref2Name') as string
  const ref2Email = formData.get('ref2Email') as string
  const ref2Relationship = formData.get('ref2Relationship') as string
  const backgroundCheck = formData.get('backgroundCheck') as string
  const agree = formData.get('agree') as string

  if (!name || !email || !modality || !calling || !ref1Name || !ref1Email || !agree) {
    return { error: 'Please complete all required fields.' }
  }

  const html = `
<h2>New IOSHA Minister Application</h2>
<hr/>
<h3>Applicant</h3>
<p><strong>Name:</strong> ${name}<br/>
<strong>Email:</strong> ${email}<br/>
<strong>Phone:</strong> ${phone || 'not provided'}<br/>
<strong>Location:</strong> ${location || 'not provided'}</p>

<h3>Ministry</h3>
<p><strong>Healing Modality / Practice:</strong><br/>${modality}</p>
<p><strong>Statement of Calling:</strong><br/>${calling}</p>

<h3>Ordination Status</h3>
<p><strong>Previously ordained:</strong> ${ordained === 'yes' ? 'Yes' : 'No'}</p>
${ordained === 'yes' ? `<p><strong>Details:</strong> ${ordinationDetails}</p>` : ''}

<h3>References</h3>
<p><strong>Reference 1:</strong> ${ref1Name} (${ref1Relationship || 'relationship not specified'}) — ${ref1Email}</p>
<p><strong>Reference 2:</strong> ${ref2Name ? `${ref2Name} (${ref2Relationship || ''}) — ${ref2Email}` : 'not provided'}</p>

<h3>Background Check</h3>
<p>${backgroundCheck === 'completed' ? '✅ Applicant states background check is completed.' : '⏳ Applicant will complete background check upon council request.'}</p>

<hr/>
<p style="color:#666;font-size:12px;">Submitted via iosha.vercel.app</p>
  `

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New Minister Application: ${name}`,
      html,
      replyTo: email,
    })
    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { error: 'Failed to submit. Please try again or email us directly.' }
  }
}
