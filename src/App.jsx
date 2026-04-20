import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AGENTS = [
  { label: 'Karen',     color: '#ffd2dc', delay: '0s'   },
  { label: 'Kid',       color: '#fde6a9', delay: '-2.3s' },
  { label: 'Jailbreak', color: '#d6f4c1', delay: '-4.7s' },
  { label: 'Lawyer',    color: '#c7e3ff', delay: '-7s'   },
  { label: 'Noob',      color: '#e0d0ff', delay: '-9.3s' },
  { label: 'Spammer',   color: '#ffe0c7', delay: '-11.7s'},
]

function SwarmScene() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: 420,
      border: '2px dashed var(--ink)',
      borderRadius: 16,
      background: 'var(--paper-2)',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* center target */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        width: 160, height: 160, borderRadius: '50%',
        background: 'repeating-linear-gradient(45deg,#fff 0 6px,#eee 6px 12px)',
        border: '3px solid var(--ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700,
        lineHeight: 1.3,
        zIndex: 2,
      }}>
        YOUR<br/>AI<br/>SYSTEM
      </div>

      {/* orbit agents */}
      {AGENTS.map((a, i) => (
        <div key={a.label} style={{
          position: 'absolute', left: '50%', top: '50%', width: 0, height: 0,
        }}>
          <div style={{
            position: 'absolute',
            width: 56, height: 56, borderRadius: '50%',
            background: a.color,
            border: '2px solid var(--ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--hand)', fontSize: 11, fontWeight: 700,
            textAlign: 'center', lineHeight: 1.2,
            boxShadow: '2px 2px 0 rgba(0,0,0,.15)',
            '--r': '170px',
            animation: `agentOrbit ${14 + i * 0.4}s linear infinite`,
            animationDelay: a.delay,
          }}>
            {a.label}
          </div>
        </div>
      ))}

      {/* annotation */}
      <div style={{
        position: 'absolute', top: 10, left: 12,
        fontFamily: 'var(--hand-title)', fontSize: 13,
        color: 'var(--acid)', maxWidth: 160, lineHeight: 1.3,
        pointerEvents: 'none',
      }}>
        agents orbit + probe<br/>your AI in real-time ↓
      </div>
    </div>
  )
}

function SketchBox({ children, wobble, style }) {
  return (
    <div style={{
      border: '2px solid var(--line-strong)',
      borderRadius: wobble ? '16px 14px 18px 12px / 14px 18px 12px 16px' : 14,
      background: 'var(--paper)',
      boxShadow: '3px 3px 0 rgba(0,0,0,.08)',
      position: 'relative',
      padding: 22,
      ...style,
    }}>
      {children}
    </div>
  )
}

function Phase({ children }) {
  return (
    <div style={{
      display: 'inline-block', padding: '3px 10px',
      border: '2px solid var(--ink)', borderRadius: 30,
      fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em',
      background: 'var(--paper-2)',
    }}>
      {children}
    </div>
  )
}

function Btn({ children, acid, ghost, href, onClick, style }) {
  const [hovered, setHovered] = useState(false)
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--hand)', fontWeight: 700, fontSize: 18,
    padding: '10px 18px', border: '2px solid var(--ink)',
    borderRadius: 12,
    background: acid ? 'var(--acid)' : ghost ? 'var(--paper)' : 'var(--ink)',
    color: acid ? '#fff' : ghost ? 'var(--ink)' : 'var(--paper)',
    boxShadow: hovered ? '5px 5px 0 rgba(0,0,0,.18)' : '3px 3px 0 rgba(0,0,0,.15)',
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
    <button style={{ ...base, fontFamily: 'var(--hand)' }} onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {children}
    </button>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return submitted
    ? <p style={{ fontFamily: 'var(--hand)', fontSize: 18, color: 'var(--green)', fontWeight: 700 }}>
        You're on the list ✓
      </p>
    : (
      <form
        onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true) }}
        style={{ display: 'flex', gap: 8, alignItems: 'center', maxWidth: 520, flexWrap: 'wrap' }}
      >
        <input
          type="email" required
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            flex: 1, minWidth: 200,
            fontFamily: 'var(--hand)', fontSize: 18,
            padding: '10px 14px', border: '2px solid var(--ink)',
            borderRadius: 12, background: 'var(--paper)',
            boxShadow: '3px 3px 0 rgba(0,0,0,.1)',
            outline: 'none',
          }}
        />
        <Btn acid>Get on the list</Btn>
      </form>
    )
}

export default function App() {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>

      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 0 24px',
        borderBottom: '2px solid var(--line-strong)',
        marginBottom: 32,
      }}>
        <div style={{ fontFamily: 'var(--hand-title)', fontSize: 28, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            display: 'inline-block', width: 14, height: 14, borderRadius: '50%',
            background: 'var(--acid)', border: '2px solid var(--ink)', verticalAlign: '-1px',
          }} />
          Litmus AI
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            onClick={() => navigate('/team')}
            style={{
              fontFamily: 'var(--hand)', fontSize: 16, fontWeight: 700,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: 'var(--ink-soft)',
            }}
          >
            Team
          </button>
          <Btn acid style={{ fontSize: 15, padding: '7px 14px' }}>Join waitlist</Btn>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
        alignItems: 'center', marginBottom: 32,
      }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--hand-title)', fontSize: 'clamp(56px, 8vw, 100px)',
            fontWeight: 700, lineHeight: .92, margin: 0,
          }}>
            100 users.<br/>1 AI.<br/>
            <span style={{
              background: 'linear-gradient(transparent 55%, var(--neutral) 55% 92%, transparent 92%)',
              padding: '0 .15em',
            }}>1 minute.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--hand)', fontSize: 20, lineHeight: 1.45,
            maxWidth: 480, marginTop: 20,
          }}>
            Litmus throws a swarm of persona agents at your system and records exactly how it reacts. It's a <strong>behavioral fuzzer for AI</strong>.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <Btn acid>Join waitlist</Btn>
            <Btn ghost onClick={() => navigate('/thesis')}>Read the thesis</Btn>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: '#6b6658', marginTop: 14 }}>
            no credit card · early access
          </div>
        </div>
        <SwarmScene />
      </section>

      {/* STATS */}
      <SketchBox style={{ marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, textAlign: 'center' }}>
          {[
            { n: '40+',  label: 'built-in personas',     color: 'var(--acid)' },
            { n: '10k',  label: 'parallel convos / run', color: 'var(--base)' },
            { n: '~60s', label: 'to first failure',      color: 'var(--neutral)' },
            { n: '1×',   label: 'config file to set up', color: 'var(--green)' },
          ].map(s => (
            <div key={s.n}>
              <div style={{ fontFamily: 'var(--hand-title)', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.n}</div>
              <p style={{ fontFamily: 'var(--hand)', fontSize: 16, marginTop: 6 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </SketchBox>

      {/* HOW IT WORKS */}
      <SketchBox style={{ marginBottom: 24 }}>
        <Phase>THE ATTACK LOOP</Phase>
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, lineHeight: 1, margin: '10px 0 20px' }}>
          Spawn → <span style={{ background: 'linear-gradient(transparent 55%, var(--hl) 55% 92%, transparent 92%)', padding: '0 .1em' }}>Probe</span> → Score → Fix.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {[
            { n: '1', color: 'var(--acid)',    title: 'Point it at your AI',  body: 'API, chat, or agent. One config file.' },
            { n: '2', color: 'var(--base)',    title: 'Pick personas',         body: 'Frustrated user, jailbreaker, 7-yr-old, lawyer… or generate custom ones.' },
            { n: '3', color: 'var(--neutral)', title: 'Swarm runs',            body: 'Thousands of conversations in parallel, recorded & scored.' },
            { n: '4', color: 'var(--green)',   title: 'See the reaction',      body: 'Where it breaks, what it leaks, how it drifts.' },
          ].map(step => (
            <SketchBox key={step.n} wobble style={{ padding: 16 }}>
              <div style={{ fontFamily: 'var(--hand-title)', fontSize: 48, color: step.color, lineHeight: 1 }}>{step.n}</div>
              <h3 style={{ fontFamily: 'var(--hand-title)', fontSize: 22, fontWeight: 700, margin: '4px 0 6px' }}>{step.title}</h3>
              <p style={{ fontFamily: 'var(--hand)', fontSize: 15, lineHeight: 1.4 }}>{step.body}</p>
            </SketchBox>
          ))}
        </div>
      </SketchBox>

      {/* WHO'S USING IT */}
      <SketchBox style={{ marginBottom: 24 }}>
        <Phase>WHO'S USING IT</Phase>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 16 }}>
          {[
            { emoji: '🤖', title: 'Agent builders',  body: 'Catch tool-use failures before prod.' },
            { emoji: '🛡', title: 'Red teams',        body: 'Scale adversarial testing without scaling headcount.' },
            { emoji: '📦', title: 'PMs',              body: 'Know how users actually break your copilot.' },
          ].map(u => (
            <SketchBox key={u.title} wobble style={{ padding: 16 }}>
              <h3 style={{ fontFamily: 'var(--hand-title)', fontSize: 22, fontWeight: 700, margin: '0 0 6px' }}>{u.emoji} {u.title}</h3>
              <p style={{ fontFamily: 'var(--hand)', fontSize: 15 }}>{u.body}</p>
            </SketchBox>
          ))}
        </div>
      </SketchBox>

      {/* THESIS */}
      <SketchBox style={{ background: 'var(--paper-2)', marginBottom: 24 }}>
        <Phase>FOR THE CURIOUS</Phase>
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, margin: '10px 0 10px' }}>
          Every AI system will need this.
        </h2>
        <p style={{ fontFamily: 'var(--hand)', fontSize: 20, lineHeight: 1.45, maxWidth: 600 }}>
          As agents act in the real world, the test surface explodes. We're building the infra layer that makes that surface visible.
        </p>
        <Btn ghost style={{ marginTop: 14 }} onClick={() => navigate('/thesis')}>Read our thesis →</Btn>
      </SketchBox>

      {/* FOUNDERS + WAITLIST */}
      <SketchBox style={{ marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <Phase>FOUNDERS</Phase>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 14 }}>
              {[
                { initials: 'NP', name: 'Niel Parekh',   role: 'Co-founder', href: 'https://www.linkedin.com/in/nielparekh/' },
                { initials: 'DS', name: 'Devansh Shah',  role: 'Co-founder', href: 'https://www.linkedin.com/in/devansh-shah11/' },
                { initials: 'DP', name: 'Devasy Patel',  role: 'Co-founder', href: 'https://www.linkedin.com/in/devasy-patel/' },
              ].map(f => (
                <a key={f.name} href={f.href} target="_blank" rel="noopener noreferrer" style={{
                  border: '2px solid var(--line-strong)', borderRadius: 14, padding: 12,
                  background: 'var(--paper)', boxShadow: '3px 3px 0 rgba(0,0,0,.1)',
                  textDecoration: 'none',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--paper-2)', border: '2px solid var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--hand-title)', fontWeight: 700, fontSize: 18,
                    marginBottom: 8,
                  }}>
                    {f.initials}
                  </div>
                  <div style={{ fontFamily: 'var(--hand)', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{f.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#6b6658', marginTop: 2 }}>{f.role}</div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <Phase>GET ACCESS</Phase>
            <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, lineHeight: 1, margin: '10px 0 16px' }}>
              Point the swarm at your AI.
            </h2>
            <WaitlistForm />
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#6b6658', marginTop: 10 }}>
              we read every note · usually reply &lt;24h
            </div>
          </div>
        </div>
      </SketchBox>

      {/* FOOTER */}
      <footer style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--mono)', fontSize: 12, color: '#6b6658',
        padding: '10px 0',
      }}>
        <div>© Litmus AI · 2026</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <button onClick={() => navigate('/team')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 12, color: '#6b6658' }}>team</button>
          <span>privacy</span>
        </div>
      </footer>
    </div>
  )
}
