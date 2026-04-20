import { useNavigate } from 'react-router-dom'

const members = [
  { initials: 'NP', name: 'Niel Parekh',  role: 'Co-founder', linkedin: 'https://www.linkedin.com/in/nielparekh/' },
  { initials: 'DS', name: 'Devansh Shah', role: 'Co-founder', linkedin: 'https://www.linkedin.com/in/devansh-shah11/' },
  { initials: 'DP', name: 'Devasy Patel', role: 'Co-founder', linkedin: 'https://www.linkedin.com/in/devasy-patel/' },
]

export default function Team() {
  const navigate = useNavigate()

  return (
    <div style={{
      maxWidth: 900, margin: '0 auto', padding: '0 24px 80px',
    }}>
      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '20px 0 24px',
        borderBottom: '2px solid var(--line-strong)',
        marginBottom: 48,
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            fontFamily: 'var(--hand)', fontSize: 16, fontWeight: 700,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: '#6b6658',
          }}
        >
          ← Back
        </button>
        <div style={{ fontFamily: 'var(--hand-title)', fontSize: 28, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            display: 'inline-block', width: 14, height: 14, borderRadius: '50%',
            background: 'var(--acid)', border: '2px solid var(--ink)',
          }} />
          Litmus AI
        </div>
      </nav>

      <h1 style={{
        fontFamily: 'var(--hand-title)', fontSize: 'clamp(40px,7vw,80px)',
        fontWeight: 700, lineHeight: .95, marginBottom: 12,
      }}>
        Built by humans who've<br/>
        <span style={{
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 10'><path d='M2,6 C20,2 40,9 60,5 S100,2 118,6' stroke='%23ff4d6d' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>\")",
          backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%', backgroundSize: '100% .35em',
          paddingBottom: '.1em',
        }}>
          broken
        </span> AI for a living.
      </h1>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20, marginTop: 40,
      }}>
        {members.map(m => (
          <a
            key={m.name}
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '2px solid var(--line-strong)',
              borderRadius: '16px 14px 18px 12px / 14px 18px 12px 16px',
              background: 'var(--paper)',
              boxShadow: '3px 3px 0 rgba(0,0,0,.08)',
              padding: 20,
              textDecoration: 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 12,
              transition: 'box-shadow .15s, transform .15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '5px 5px 0 rgba(0,0,0,.12)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '3px 3px 0 rgba(0,0,0,.08)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'var(--paper-2)', border: '2px solid var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--hand-title)', fontWeight: 700, fontSize: 26,
            }}>
              {m.initials}
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--hand)', fontSize: 18, fontWeight: 700,
                color: 'var(--ink)',
              }}>{m.name}</p>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: 11, color: '#6b6658', marginTop: 4,
              }}>{m.role}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
