# Backend JWT API

Aplicación Web API construida con **Python** y **FastAPI** que implementa autenticación mediante **JWT (JSON Web Tokens)**. La gestión de dependencias se realiza con **Poetry** y el despliegue con **Docker**.

---

## Características

- Endpoint de login que valida credenciales y devuelve un **access token** (vigencia de 300 segundos) y un **refresh token**.
- Endpoint para **refrescar** el access token usando el refresh token.
- Endpoint de health check.

---

## Requisitos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/)  
  _o bien_
- Python 3.11+ y [Poetry](https://python-poetry.org/)

---

## Despliegue con Docker

```bash
# Desde la carpeta backend/
docker compose up --build
```

La API quedará disponible en `http://localhost:8000`.

---

## Ejecución local con Poetry

```bash
# Desde la carpeta backend/
poetry install
poetry run uvicorn app.main:app --reload
```

---

## Endpoints

### `POST /token`

Autentica al usuario y devuelve los tokens.

**Body (JSON):**

```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Ejemplo con curl:**

```bash
curl -X POST "http://localhost:8000/token" \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

**Respuesta exitosa (200):**

```json
{
  "access_token": "<JWT>",
  "refresh_token": "<JWT>",
  "token_type": "bearer",
  "expires_in": 300
}
```

---

### `POST /token/refresh`

Genera un nuevo access token usando un refresh token válido.

**Body (JSON):**

```json
{
  "refresh_token": "<refresh_token_obtenido_en_login>"
}
```

**Ejemplo con curl:**

```bash
curl -X POST "http://localhost:8000/token/refresh" \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "<tu_refresh_token>"}'
```

**Respuesta exitosa (200):**

```json
{
  "access_token": "<nuevo_JWT>",
  "refresh_token": "<nuevo_refresh_JWT>",
  "token_type": "bearer",
  "expires_in": 300
}
```

---

### `GET /health`

Verifica que el servicio está activo.

```bash
curl http://localhost:8000/health
```

```json
{"status": "ok"}
```

---

## Documentación interactiva

FastAPI genera automáticamente la documentación Swagger en:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

---

## Credenciales por defecto

| Campo    | Valor      |
|----------|------------|
| Usuario  | `admin`    |
| Password | `admin123` |

> ⚠️ Para uso en producción, configura la variable de entorno `SECRET_KEY` con un valor seguro y gestiona los usuarios a través de una base de datos.
