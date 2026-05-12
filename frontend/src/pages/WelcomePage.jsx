import { useNavigate } from 'react-router-dom'
import { clearTokens, getUsername } from '../auth'

export default function WelcomePage() {
  const navigate = useNavigate()
  const username = getUsername()

  function handleLogout() {
    clearTokens()
    navigate('/login', { replace: true })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-canvas-soft)' }}>
      {/* Gradient mesh hero */}
      <div style={{
        background: 'linear-gradient(135deg, #fdf6ec 0%, #fde8d0 15%, #e8d5f5 35%, #c5bbff 55%, #a78bfa 70%, #7c6fff 85%, #533afd 100%)',
        padding: '0',
      }}>
        {/* Nav bar */}
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 'var(--rounded-md)',
              background: 'var(--color-primary)',
            }} />
            <span style={{ fontSize: '16px', fontWeight: 400, color: 'var(--color-ink)' }}>
              JWT App
            </span>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'var(--color-canvas)',
              color: 'var(--color-primary)',
              fontSize: '14px',
              fontWeight: 400,
              fontFamily: 'inherit',
              padding: '8px 16px',
              borderRadius: 'var(--rounded-pill)',
              border: '1px solid var(--color-primary)',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-canvas-soft)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-canvas)'}
          >
            Cerrar sesión
          </button>
        </nav>

        {/* Hero content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px 96px',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            background: '#b9b9f9',
            color: 'var(--color-primary-deep)',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.1px',
            textTransform: 'uppercase',
            padding: '4px 8px',
            borderRadius: 'var(--rounded-pill)',
            marginBottom: '24px',
          }}>
            Sesión activa
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 300,
            letterSpacing: '-1.4px',
            color: 'var(--color-ink)',
            lineHeight: 1.03,
            marginBottom: '16px',
          }}>
            ¡Hola, {username}!
          </h1>
          <p style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--color-ink-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.4,
          }}>
            Has iniciado sesión correctamente. Tu token de acceso está activo.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {/* Card 1 */}
          <div style={{
            background: 'var(--color-canvas)',
            borderRadius: 'var(--rounded-lg)',
            padding: '32px',
            border: '1px solid var(--color-hairline)',
            boxShadow: 'var(--shadow-1)',
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 300,
              letterSpacing: '-0.2px',
              color: 'var(--color-ink)',
              marginBottom: '12px',
            }}>
              Autenticación JWT
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--color-ink-mute)',
              lineHeight: 1.4,
            }}>
              Tu sesión está protegida con JSON Web Tokens. El access token expira en 5 minutos.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: 'var(--color-canvas)',
            borderRadius: 'var(--rounded-lg)',
            padding: '32px',
            border: '1px solid var(--color-hairline)',
            boxShadow: 'var(--shadow-1)',
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 300,
              letterSpacing: '-0.2px',
              color: 'var(--color-ink)',
              marginBottom: '12px',
            }}>
              Sesión segura
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--color-ink-mute)',
              lineHeight: 1.4,
            }}>
              El token se almacena en sessionStorage, por lo que se cierra automáticamente al cerrar el navegador.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            background: 'var(--color-canvas)',
            borderRadius: 'var(--rounded-lg)',
            padding: '32px',
            border: '1px solid var(--color-hairline)',
            boxShadow: 'var(--shadow-1)',
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 300,
              letterSpacing: '-0.2px',
              color: 'var(--color-ink)',
              marginBottom: '12px',
            }}>
              Rutas protegidas
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--color-ink-mute)',
              lineHeight: 1.4,
            }}>
              Esta página solo es accesible para usuarios autenticados. Sin sesión, serás redirigido al login.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
