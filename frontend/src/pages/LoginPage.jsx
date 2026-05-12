import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setTokens, getToken } from '../auth'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (getToken()) navigate('/', { replace: true })
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setError(data?.detail || 'Credenciales incorrectas')
        return
      }
      const data = await res.json()
      setTokens(data.access_token, data.refresh_token)
      navigate('/', { replace: true })
    } catch {
      setError('No se pudo conectar con el servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf6ec 0%, #fde8d0 15%, #e8d5f5 35%, #c5bbff 55%, #a78bfa 70%, #7c6fff 85%, #533afd 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: 'var(--color-canvas)',
        borderRadius: 'var(--rounded-lg)',
        boxShadow: 'var(--shadow-2)',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
      }}>
        {/* Logo / brand mark */}
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--rounded-md)',
          background: 'var(--color-primary)',
          marginBottom: '24px',
        }} />

        <h1 style={{
          fontSize: '32px',
          fontWeight: 300,
          letterSpacing: '-0.64px',
          color: 'var(--color-ink)',
          marginBottom: '8px',
        }}>
          Bienvenido
        </h1>
        <p style={{
          fontSize: '15px',
          fontWeight: 300,
          color: 'var(--color-ink-mute)',
          marginBottom: '32px',
        }}>
          Ingresa tus credenciales para continuar
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: 400, color: 'var(--color-ink-mute)', letterSpacing: '-0.39px' }}>
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="admin"
              required
              autoComplete="username"
              style={{
                background: 'var(--color-canvas)',
                color: 'var(--color-ink)',
                fontSize: '15px',
                fontWeight: 300,
                fontFamily: 'inherit',
                padding: '8px 12px',
                borderRadius: 'var(--rounded-sm)',
                border: '1px solid var(--color-hairline-input)',
                outline: 'none',
                transition: 'border-color 0.15s',
                height: '40px',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-hairline-input)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: 400, color: 'var(--color-ink-mute)', letterSpacing: '-0.39px' }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
              style={{
                background: 'var(--color-canvas)',
                color: 'var(--color-ink)',
                fontSize: '15px',
                fontWeight: 300,
                fontFamily: 'inherit',
                padding: '8px 12px',
                borderRadius: 'var(--rounded-sm)',
                border: '1px solid var(--color-hairline-input)',
                outline: 'none',
                transition: 'border-color 0.15s',
                height: '40px',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-hairline-input)'}
            />
          </div>

          {error && (
            <p style={{
              fontSize: '14px',
              color: 'var(--color-ruby)',
              background: '#fff0f4',
              border: '1px solid #ffc1d4',
              borderRadius: 'var(--rounded-md)',
              padding: '8px 12px',
            }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? 'var(--color-primary-deep)' : 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'inherit',
              padding: '8px 16px',
              borderRadius: 'var(--rounded-pill)',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              height: '44px',
              transition: 'background 0.15s',
              marginTop: '8px',
            }}
            onMouseDown={e => { if (!loading) e.currentTarget.style.background = 'var(--color-primary-press)' }}
            onMouseUp={e => { if (!loading) e.currentTarget.style.background = 'var(--color-primary)' }}
          >
            {loading ? 'Ingresando…' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  )
}
