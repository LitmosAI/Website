export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      minHeight: '100vh',
      background: '#ffffff',
    }}>
      <span style={{
        fontFamily: "'Satoshi', -apple-system, sans-serif",
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        color: '#111111',
      }}>
        Litmus AI
      </span>
      <button
        style={{
          fontFamily: "'Satoshi', -apple-system, sans-serif",
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.01em',
          color: '#111111',
          background: 'transparent',
          border: '1px solid #d1d1d1',
          borderRadius: '100px',
          padding: '0.6rem 1.4rem',
          cursor: 'pointer',
        }}
        onMouseEnter={e => e.target.style.borderColor = '#111111'}
        onMouseLeave={e => e.target.style.borderColor = '#d1d1d1'}
      >
        Meet the team
      </button>
    </div>
  )
}
