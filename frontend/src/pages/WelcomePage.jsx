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

      {/* Microsoft Certifications section */}
      <div style={{
        background: 'var(--color-canvas-soft)',
        borderTop: '1px solid var(--color-hairline)',
        padding: '64px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-block',
              background: '#c5e4ff',
              color: '#0050a0',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.1px',
              textTransform: 'uppercase',
              padding: '4px 8px',
              borderRadius: 'var(--rounded-pill)',
              marginBottom: '16px',
            }}>
              Microsoft Learn
            </div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 300,
              letterSpacing: '-0.8px',
              color: 'var(--color-ink)',
              marginBottom: '12px',
            }}>
              Certificaciones Microsoft 2026
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--color-ink-mute)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.5,
            }}>
              Las últimas certificaciones de Microsoft para impulsar tu carrera en tecnología, IA y cloud en 2026.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>

            {/* Cert Card 1 - Azure AI Engineer Associate */}
            <div style={{
              background: 'var(--color-canvas)',
              borderRadius: 'var(--rounded-lg)',
              padding: '28px',
              border: '1px solid var(--color-hairline)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--rounded-md)',
                  background: 'linear-gradient(135deg, #0078d4, #005a9e)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#0078d4',
                  background: '#e8f4fd',
                  padding: '2px 8px',
                  borderRadius: 'var(--rounded-pill)',
                }}>Intermedio · AI-102</span>
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: 'var(--color-ink)',
                margin: 0,
              }}>
                Azure AI Engineer Associate
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
                margin: 0,
                flexGrow: 1,
              }}>
                Diseña e implementa soluciones de IA en Azure usando Azure AI Services, Azure AI Search y Azure OpenAI. Actualizado: abril 2025.
              </p>
              <a
                href="https://learn.microsoft.com/credentials/certifications/azure-ai-engineer/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#0078d4',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver certificación →
              </a>
            </div>

            {/* Cert Card 2 - Azure AI Fundamentals */}
            <div style={{
              background: 'var(--color-canvas)',
              borderRadius: 'var(--rounded-lg)',
              padding: '28px',
              border: '1px solid var(--color-hairline)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--rounded-md)',
                  background: 'linear-gradient(135deg, #50e6ff, #0078d4)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#0078d4',
                  background: '#e8f4fd',
                  padding: '2px 8px',
                  borderRadius: 'var(--rounded-pill)',
                }}>Principiante · AI-900</span>
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: 'var(--color-ink)',
                margin: 0,
              }}>
                Azure AI Fundamentals
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
                margin: 0,
                flexGrow: 1,
              }}>
                Demuestra conocimientos fundamentales de IA y machine learning en Azure. Ideal para perfiles técnicos y no técnicos. Actualizado: mayo 2025.
              </p>
              <a
                href="https://learn.microsoft.com/credentials/certifications/azure-ai-fundamentals/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#0078d4',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver certificación →
              </a>
            </div>

            {/* Cert Card 3 - Microsoft 365 Fundamentals */}
            <div style={{
              background: 'var(--color-canvas)',
              borderRadius: 'var(--rounded-lg)',
              padding: '28px',
              border: '1px solid var(--color-hairline)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--rounded-md)',
                  background: 'linear-gradient(135deg, #d83b01, #ff8c00)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#d83b01',
                  background: '#fef2ec',
                  padding: '2px 8px',
                  borderRadius: 'var(--rounded-pill)',
                }}>Principiante · MS-900</span>
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: 'var(--color-ink)',
                margin: 0,
              }}>
                Microsoft 365 Certified: Fundamentals
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
                margin: 0,
                flexGrow: 1,
              }}>
                Demuestra comprensión de Microsoft 365: productividad, colaboración, seguridad y gestión de identidad en la nube. Actualizado: abril 2025.
              </p>
              <a
                href="https://learn.microsoft.com/credentials/certifications/microsoft-365-fundamentals/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#d83b01',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver certificación →
              </a>
            </div>

            {/* Cert Card 4 - M365 Collaboration Communications Systems Engineer */}
            <div style={{
              background: 'var(--color-canvas)',
              borderRadius: 'var(--rounded-lg)',
              padding: '28px',
              border: '1px solid var(--color-hairline)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--rounded-md)',
                  background: 'linear-gradient(135deg, #00b294, #007652)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#007652',
                  background: '#e6f7f3',
                  padding: '2px 8px',
                  borderRadius: 'var(--rounded-pill)',
                }}>Intermedio · MS-721</span>
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: 'var(--color-ink)',
                margin: 0,
              }}>
                M365: Collaboration Communications Systems Engineer Associate
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
                margin: 0,
                flexGrow: 1,
              }}>
                Incorporada en 2026 como opción de habilidades en las especializaciones de Microsoft Teams (Calling y Meetings). Cubre soluciones de comunicación y colaboración empresarial.
              </p>
              <a
                href="https://learn.microsoft.com/credentials/certifications/m365-collaboration-communications-systems-engineer/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#007652',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver certificación →
              </a>
            </div>

            {/* Cert Card 5 - Azure Administrator Associate */}
            <div style={{
              background: 'var(--color-canvas)',
              borderRadius: 'var(--rounded-lg)',
              padding: '28px',
              border: '1px solid var(--color-hairline)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--rounded-md)',
                  background: 'linear-gradient(135deg, #0078d4, #004578)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#0078d4',
                  background: '#e8f4fd',
                  padding: '2px 8px',
                  borderRadius: 'var(--rounded-pill)',
                }}>Intermedio · AZ-104</span>
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: 'var(--color-ink)',
                margin: 0,
              }}>
                Azure Administrator Associate
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
                margin: 0,
                flexGrow: 1,
              }}>
                Gestión de suscripciones de Azure, identidad, gobernanza, almacenamiento, redes y recursos de cómputo. Una de las certificaciones cloud más demandadas en el mercado.
              </p>
              <a
                href="https://learn.microsoft.com/credentials/certifications/azure-administrator/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#0078d4',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver certificación →
              </a>
            </div>

            {/* Cert Card 6 - Azure Fundamentals */}
            <div style={{
              background: 'var(--color-canvas)',
              borderRadius: 'var(--rounded-lg)',
              padding: '28px',
              border: '1px solid var(--color-hairline)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--rounded-md)',
                  background: 'linear-gradient(135deg, #50e6ff, #005a9e)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#0078d4',
                  background: '#e8f4fd',
                  padding: '2px 8px',
                  borderRadius: 'var(--rounded-pill)',
                }}>Principiante · AZ-900</span>
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: 'var(--color-ink)',
                margin: 0,
              }}>
                Azure Fundamentals
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
                margin: 0,
                flexGrow: 1,
              }}>
                El punto de entrada al ecosistema Azure. Aprende conceptos de cloud, servicios de Azure, seguridad, privacidad y precios. Ideal para comenzar tu camino en la nube.
              </p>
              <a
                href="https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#0078d4',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver certificación →
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
