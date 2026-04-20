import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Btn({ children, acid, ghost, onClick, style }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      style={{
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
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

function Card({ children, wobble, style }) {
  return (
    <div style={{
      border: '2px solid var(--ink)',
      borderRadius: wobble ? '16px 14px 18px 12px / 14px 18px 12px 16px' : 14,
      background: 'var(--paper)',
      boxShadow: '3px 3px 0 rgba(0,0,0,.1)',
      padding: '18px 20px',
      ...style,
    }}>
      {children}
    </div>
  )
}

function Pull({ children }) {
  return (
    <div style={{
      borderLeft: '4px solid var(--acid)',
      padding: '10px 16px', margin: '22px 0',
      fontFamily: 'var(--hand-title)', fontSize: 28, lineHeight: 1.2,
      color: 'var(--ink)', background: 'var(--paper-2)',
      borderRadius: '0 10px 10px 0',
    }}>
      {children}
    </div>
  )
}

export default function Thesis() {
  const navigate = useNavigate()

  return (
    <div>
      {/* NAV */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'var(--paper)',
        borderBottom: '2px solid var(--line-strong)',
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ fontFamily: 'var(--hand-title)', fontSize: 28, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            display: 'inline-block', width: 14, height: 14, borderRadius: '50%',
            background: 'var(--acid)', border: '2px solid var(--ink)',
          }} />
          Litmus AI
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            marginLeft: 'auto',
            fontFamily: 'var(--hand)', fontSize: 16, fontWeight: 700,
            padding: '6px 14px', border: '2px solid var(--ink)', borderRadius: 10,
            background: 'var(--paper-2)', color: 'var(--ink)',
            transform: 'rotate(-.4deg)', cursor: 'pointer',
          }}
        >
          ← back to site
        </button>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 28px 120px' }}>

        {/* HEADER */}
        <div style={{
          display: 'inline-block', padding: '3px 10px',
          border: '2px solid var(--ink)', borderRadius: 30,
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em',
          background: 'var(--paper-2)',
        }}>
          OUR THESIS
        </div>

        <h1 style={{
          fontFamily: 'var(--hand-title)', fontSize: 'clamp(56px, 9vw, 104px)',
          lineHeight: .92, margin: '14px 0 6px',
        }}>
          Every AI system<br/>will need a{' '}
          <span style={{
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 10'><path d='M2,6 C20,2 40,9 60,5 S100,2 118,6' stroke='%23ff4d6d' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>\")",
            backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%', backgroundSize: '100% .35em',
            paddingBottom: '.1em',
          }}>
            litmus test
          </span>.
        </h1>

        <p style={{ fontFamily: 'var(--hand)', fontSize: 24, lineHeight: 1.4, maxWidth: 680, color: '#2a2a32', margin: '14px 0 28px' }}>
          A short note on why we're building Litmus, what we believe about the next five years of AI, and the kind of infrastructure that has to exist for any of it to work.
        </p>

        <Pull>
          "Shipping an AI product today feels like{' '}
          <span style={{ background: 'linear-gradient(transparent 55%, var(--neutral) 55% 92%, transparent 92%)', padding: '0 .15em' }}>
            shipping a website in 1996
          </span>{' '}
          — no staging, no tests, no idea what it looks like to anyone but you."
        </Pull>

        {/* SECTION 1 */}
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: '40px 0 8px' }}>1 · The surface area exploded.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 12 }}>
          A traditional software product has a bounded interface: buttons, forms, a predictable input space. You can write tests for it. You can QA it. A single engineer can hold most of it in their head.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 12 }}>
          AI products don't work like that. Every input is free-form text. Every output is generative. Every user is a different person with a different goal, a different emotional state, and a different level of patience. The space of things a user might say to your AI is, for practical purposes, infinite.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65 }}>
          That means{' '}
          <span style={{ background: 'linear-gradient(transparent 55%, var(--neutral) 55% 92%, transparent 92%)', padding: '0 .15em' }}>
            the test surface is also infinite
          </span>{' '}
          — and none of the tools we've inherited from decades of traditional software know how to deal with that.
        </p>

        {/* SECTION 2 */}
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: '40px 0 12px' }}>2 · Benchmarks lie. Red-teams don't scale.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          <Card wobble>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}><strong>Benchmarks are static.</strong> They tell you how your model does on a frozen dataset. They say nothing about how it does with your users, in your product, on the thing you actually ship.</p>
          </Card>
          <Card wobble>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}><strong>Red-teams are human.</strong> Humans are brilliant at finding novel attacks. They are also slow, expensive, inconsistent, and not available before your release.</p>
          </Card>
          <Card wobble>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}><strong>Neither catches drift.</strong> Most failures aren't bugs at launch — they're silent regressions after a prompt change, a model swap, a new tool. No one notices until a user does.</p>
          </Card>
        </div>

        {/* SECTION 3 */}
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: '40px 0 8px' }}>3 · What we believe.</h2>
        <p style={{ fontSize: 20, lineHeight: 1.6, marginBottom: 12 }}>
          We think the missing layer is{' '}
          <span style={{ background: 'linear-gradient(transparent 55%, var(--hl) 55% 92%, transparent 92%)', padding: '0 .15em' }}>
            behavioral fuzzing
          </span>: a system that can simulate a whole population of users against your AI, continuously, and surface the places where it breaks.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 12 }}>
          Fuzzing is an old idea. It's how we make compilers, kernels, and protocols reliable. You throw pseudo-random inputs at a system and watch it crash. The trick with AI is that random text isn't useful — your AI rejects obvious garbage. What breaks it is <em>plausible</em> input from a user with an unusual goal.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65 }}>
          So we don't throw random strings. We throw{' '}
          <span style={{ background: 'linear-gradient(transparent 55%, var(--neutral) 55% 92%, transparent 92%)', padding: '0 .15em' }}>
            personas
          </span>: agents with their own motivations, patience, tone, technical skill, and failure modes. Each one is a small model of a real user archetype. Run them in parallel and you compress a wide range of real user behavior into a single test run.
        </p>

        <Pull>
          A persona is a hypothesis about how a user might break your AI. A swarm is a test of many hypotheses at once.
        </Pull>

        {/* SECTION 4 */}
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: '40px 0 12px' }}>4 · Why now.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 12 }}>A few things changed recently:</p>
        <Card style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 18, lineHeight: 1.65 }}><strong>Agents became real.</strong> Tool-using AI has left the demo stage. Every agent action is a potential failure — a wrong API call, a leaked credential, a hallucinated plan. The stakes of a bad output went from embarrassing to operational.</p>
        </Card>
        <Card style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 18, lineHeight: 1.65 }}><strong>The model beneath you keeps moving.</strong> Teams swap models every quarter. A prompt that worked yesterday silently regresses tomorrow. You can't catch this by hand.</p>
        </Card>
        <Card>
          <p style={{ fontSize: 18, lineHeight: 1.65 }}><strong>Regulators started paying attention.</strong> The EU AI Act, NIST's AI RMF, and half a dozen state-level bills now require evidence of testing. "We vibed it" is no longer a defensible QA process.</p>
        </Card>

        {/* SECTION 5 */}
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: '40px 0 12px' }}>5 · What we're building.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 16 }}>Litmus is the infrastructure layer for behavioral testing of AI systems. Three pieces:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          <Card wobble>
            <strong style={{ fontFamily: 'var(--hand)', fontSize: 17 }}>A swarm engine</strong>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 6 }}>Spawn a parallel population of persona agents against any AI endpoint. Recorded, reproducible, CI-friendly.</p>
          </Card>
          <Card wobble>
            <strong style={{ fontFamily: 'var(--hand)', fontSize: 17 }}>A persona library</strong>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 6 }}>A growing set of archetypes — jailbreakers, frustrated users, compliance probes, naive users — that expands with every run.</p>
          </Card>
          <Card wobble>
            <strong style={{ fontFamily: 'var(--hand)', fontSize: 17 }}>A reaction report</strong>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 6 }}>What broke, for whom, how badly, and the exact transcript. Triage by severity and persona, not just by metric.</p>
          </Card>
        </div>

        {/* SECTION 6 */}
        <h2 style={{ fontFamily: 'var(--hand-title)', fontSize: 48, margin: '40px 0 8px' }}>6 · Where this goes.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 12 }}>
          Short term: we want every team shipping an AI product to run Litmus before they ship. Same reflex as writing a test, opening a staging URL, or hitting deploy.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 12 }}>
          Longer term: behavioral fuzzing becomes the substrate for everything adjacent — evals, red-teaming, compliance attestation, on-call for agents. The system of record for <em>how your AI actually behaves</em>, run continuously and owned by the team that ships it.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65 }}>
          We think that layer is inevitable. We'd like to build it.
        </p>

        {/* SIGNATURE */}
        <div style={{
          marginTop: 40, padding: '18px 20px',
          border: '2px dashed var(--ink)', borderRadius: 14,
          display: 'flex', gap: 16, alignItems: 'center',
          background: 'var(--paper-2)',
        }}>
          <div style={{
            fontFamily: 'var(--hand-title)', fontSize: 28, color: 'var(--acid)',
            border: '3px solid var(--acid)', borderRadius: 10,
            padding: '6px 14px', transform: 'rotate(-6deg)', flexShrink: 0,
          }}>
            LITMUS
          </div>
          <div>
            <div style={{ fontFamily: 'var(--hand-title)', fontSize: 28, lineHeight: 1 }}>— The founders</div>
            <div style={{ fontFamily: 'var(--hand)', fontSize: 20, lineHeight: 1.4, marginTop: 4 }}>
              If this resonates, we'd love to talk. Early access is open.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
          <Btn acid onClick={() => navigate('/')}>Join the waitlist →</Btn>
          <Btn ghost onClick={() => navigate('/')}>← back to site</Btn>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{
        padding: '10px 22px', display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--mono)', fontSize: 12, color: '#6b6658',
        borderTop: '2px solid var(--line-strong)',
      }}>
        <div>© Litmus AI · 2026</div>
        <div>thesis · privacy</div>
      </footer>
    </div>
  )
}
