import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Btn({ children, acid, ghost, href, onClick, style }) {
  const [hovered, setHovered] = useState(false)
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--hand)', fontWeight: 700, fontSize: 20,
    padding: '12px 22px', border: '2px solid var(--ink)',
    borderRadius: 12,
    background: acid ? 'var(--acid)' : ghost ? 'var(--paper)' : 'var(--ink)',
    color: acid ? '#fff' : ghost ? 'var(--ink)' : 'var(--paper)',
    boxShadow: hovered ? '6px 6px 0 rgba(0,0,0,.2)' : '4px 4px 0 rgba(0,0,0,.18)',
    transform: hovered ? 'rotate(-.6deg) translateY(-1px)' : 'rotate(-.4deg)',
    cursor: 'pointer',
    transition: 'box-shadow .15s, transform .15s',
    textDecoration: 'none',
    ...style,
  }
  if (href) return (
    <a href={href} style={base}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {children}
    </a>
  )
  return (
    <button style={{ ...base, border: '2px solid var(--ink)' }} onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {children}
    </button>
  )
}

function LitmusStrip({ level }) {
  const opacity = (idx) => idx < level ? 1 : 0.3
  return (
    <div style={{
      display: 'flex', border: '2px solid var(--ink)', borderRadius: 6,
      overflow: 'hidden', margin: '14px 0 0',
      boxShadow: '3px 3px 0 rgba(0,0,0,.1)', height: 14,
    }}>
      {['#ff4d6d', '#ff8a5b', '#f0c65a'].map((color, i) => (
        <div key={i} style={{
          flex: 1, background: color,
          opacity: opacity(i),
          transition: 'opacity .3s ease',
        }} />
      ))}
    </div>
  )
}

export default function Waitlist() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [noteFocused, setNoteFocused] = useState(false)

  const stripLevel = (email.trim() && /@/.test(email) ? 1 : 0) + (note.trim() ? 1 : 0)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputStyle = (focused) => ({
    width: '100%', fontFamily: 'var(--hand)', fontSize: 18,
    padding: '10px 14px', border: '2px solid var(--ink)',
    borderRadius: 12, background: 'var(--paper)',
    boxShadow: focused ? '4px 4px 0 var(--acid)' : '3px 3px 0 rgba(0,0,0,.08)',
    borderColor: focused ? 'var(--acid)' : 'var(--ink)',
    transform: focused ? 'translate(-1px,-1px)' : 'none',
    transition: 'box-shadow .15s ease, transform .15s ease, border-color .15s ease',
    outline: 'none',
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      {/* Chrome */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'var(--paper)',
        borderBottom: '2px solid var(--line-strong)',
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div
          onClick={() => navigate('/')}
          style={{ fontFamily: 'var(--hand-title)', fontSize: 28, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <span style={{
            display: 'inline-block', width: 14, height: 14, borderRadius: '50%',
            background: 'var(--acid)', border: '2px solid var(--ink)',
          }} />
          Litmus AI
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            marginLeft: 'auto', fontFamily: 'var(--hand)', fontSize: 16,
            padding: '6px 14px', border: '2px solid var(--ink)', borderRadius: 10,
            background: 'var(--paper-2)', color: 'var(--ink)',
            transform: 'rotate(-.4deg)', cursor: 'pointer',
          }}
        >
          ← back to site
        </button>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 620, margin: '0 auto', padding: '60px 28px 120px' }}>

        {submitted ? (
          /* Success card */
          <div style={{
            border: '2px solid var(--ink)',
            borderRadius: '18px 14px 20px 12px / 14px 20px 12px 16px',
            background: 'var(--paper)',
            boxShadow: '4px 4px 0 rgba(0,0,0,.12)',
            padding: 26,
          }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--hand-title)', fontSize: 26, color: 'var(--acid)',
                border: '3px solid var(--acid)', borderRadius: 10,
                padding: '4px 12px', transform: 'rotate(-6deg)',
              }}>
                RECEIVED
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: 0, lineHeight: 1 }}>
                  You're on the list.
                </h2>
                <p style={{ fontFamily: 'var(--hand)', fontSize: 20, lineHeight: 1.45, color: '#2a2a32', marginTop: 6 }}>
                  We'll be in touch soon.
                </p>
                <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                  <Btn acid onClick={() => navigate('/')}>← back to site</Btn>
                  <Btn ghost onClick={() => navigate('/thesis')}>Read the thesis</Btn>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{
              display: 'inline-block', padding: '3px 10px',
              border: '2px solid var(--ink)', borderRadius: 30,
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em',
              background: 'var(--paper-2)',
            }}>
              EARLY ACCESS
            </div>

            <h1 style={{
              fontFamily: 'var(--hand-title)', fontSize: 'clamp(64px,10vw,88px)',
              lineHeight: .95, margin: '14px 0 8px',
            }}>
              Join the{' '}
              <span style={{
                backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 10'><path d='M2,6 C20,2 40,9 60,5 S100,2 118,6' stroke='%23ff4d6d' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                backgroundSize: '100% .35em',
                paddingBottom: '.1em',
              }}>
                waitlist
              </span>
              .
            </h1>

            <p style={{ fontFamily: 'var(--hand)', fontSize: 20, lineHeight: 1.45, color: '#2a2a32' }}>
              Leave your email.
            </p>

            {/* Form card */}
            <div style={{
              border: '2px solid var(--ink)',
              borderRadius: '18px 14px 20px 12px / 14px 20px 12px 16px',
              background: 'var(--paper)',
              boxShadow: '4px 4px 0 rgba(0,0,0,.12)',
              padding: 26,
              marginTop: 24,
            }}>
              <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', margin: '0 0 4px', fontFamily: 'var(--hand-title)', fontSize: 24, lineHeight: 1 }}>
                  Email <span style={{ color: 'var(--acid)' }}>*</span>
                </label>
                <input
                  type="email" required
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  style={inputStyle(emailFocused)}
                />

                <label style={{ display: 'block', margin: '14px 0 4px', fontFamily: 'var(--hand-title)', fontSize: 24, lineHeight: 1 }}>
                  What are you building?{' '}
                  <span style={{ fontSize: 16, color: '#6b6658' }}>(optional)</span>
                </label>
                <textarea
                  placeholder="one line is fine"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  onFocus={() => setNoteFocused(true)}
                  onBlur={() => setNoteFocused(false)}
                  style={{ ...inputStyle(noteFocused), minHeight: 90, resize: 'vertical' }}
                />

                <LitmusStrip level={stripLevel} />

                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
                  <Btn acid style={{ fontSize: 20 }}>Send it →</Btn>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#6b6658' }}>
                    no spam · we reply personally
                  </span>
                </div>
              </form>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        padding: '10px 22px',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--mono)', fontSize: 12, color: '#6b6658',
        borderTop: '2px solid var(--line-strong)',
      }}>
        <div>© Litmus AI · 2026</div>
        <div>waitlist · thesis · docs · twitter</div>
      </footer>
    </div>
  )
}
