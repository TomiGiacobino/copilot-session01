# Frontend — JWT Auth App

Aplicación web construida con **React** y **Vite** que proporciona una interfaz de usuario para el backend de autenticación JWT. Incluye una página de login y una página de bienvenida protegida.

---

## Características

- **Página de login** (`/login`) — formulario de usuario y contraseña que se comunica con el backend `POST /token`.
- **Página de bienvenida** (`/`) — ruta protegida que solo es accesible con sesión activa. Muestra el nombre del usuario extraído del JWT.
- **Sesión con `sessionStorage`** — el token se almacena en `sessionStorage`, por lo que se elimina automáticamente al cerrar el navegador.
- **Redirección automática** — usuarios no autenticados son redirigidos a `/login`; usuarios ya autenticados que visitan `/login` son redirigidos a `/`.
- **Diseño Stripi** — implementa el sistema de diseño definido en `DESIGN.md`: tipografía Inter, paleta índigo, fondo de malla degradada y botones tipo píldora.

---

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- El [backend](../backend/README.md) corriendo en `http://localhost:8000`

---

## Instalación y uso

### 1. Instalar dependencias

```bash
# Desde la carpeta frontend/
npm install
```

### 2. Iniciar el backend

Antes de ejecutar el frontend, asegúrate de que el backend está corriendo:

```bash
# Desde la carpeta backend/
docker compose up --build
# o con Poetry:
poetry run uvicorn app.main:app --reload
```

El backend debe estar disponible en `http://localhost:8000`.

### 3. Iniciar el servidor de desarrollo

```bash
# Desde la carpeta frontend/
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

> **Nota:** El servidor de desarrollo incluye un proxy que redirige `/token` al backend en `http://localhost:8000`, evitando problemas de CORS durante el desarrollo.

### 4. Build de producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`. Para previsualizar el build:

```bash
npm run preview
```

---

## Estructura del proyecto

```
frontend/
├── index.html              # Punto de entrada HTML (carga Inter desde Google Fonts)
├── vite.config.js          # Configuración de Vite + proxy al backend
├── package.json
└── src/
    ├── main.jsx            # Punto de entrada React
    ├── App.jsx             # Router principal (React Router v6)
    ├── auth.js             # Utilidades de sesión (sessionStorage + decodificación JWT)
    ├── index.css           # Tokens de diseño globales (CSS custom properties)
    ├── components/
    │   └── ProtectedRoute.jsx   # HOC que redirige a /login si no hay sesión
    └── pages/
        ├── LoginPage.jsx        # Página de login con formulario
        └── WelcomePage.jsx      # Página de bienvenida protegida
```

---

## Credenciales por defecto

Las credenciales están definidas en el backend:

| Campo      | Valor      |
|------------|------------|
| Usuario    | `admin`    |
| Contraseña | `admin123` |

---

## Flujo de autenticación

```
Usuario → /login → POST /token (backend) → 200 OK
                                          → access_token + refresh_token
                                          → sessionStorage.setItem(...)
                                          → Redirigir a /

Usuario → / → ProtectedRoute comprueba sessionStorage
            → Sin token → Redirigir a /login
            → Con token → Mostrar WelcomePage con username del JWT
```

---

## Notas técnicas

- El `access_token` expira en 300 segundos (5 minutos). La aplicación no implementa renovación automática con `refresh_token` — al expirar, el usuario deberá volver a iniciar sesión.
- El username se extrae decodificando el payload base64 del JWT (campo `sub`) — no se realiza ninguna llamada adicional al backend para obtenerlo.
- El proxy de Vite (`/token → http://localhost:8000`) solo aplica en modo desarrollo. En producción, configura el servidor web (Nginx, etc.) para que haga el proxy o actualiza las llamadas `fetch` para apuntar al backend directamente.
