import os
import secrets
import warnings
from datetime import datetime, timedelta, timezone
from typing import Optional

from jose import JWTError, jwt
from passlib.context import CryptContext

_secret_key_env = os.getenv("SECRET_KEY")
if _secret_key_env:
    SECRET_KEY = _secret_key_env
else:
    SECRET_KEY = secrets.token_hex(32)
    warnings.warn(
        "SECRET_KEY environment variable is not set. "
        "A random key has been generated for this session. "
        "Set SECRET_KEY for production deployments.",
        stacklevel=1,
    )

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_SECONDS = 300
REFRESH_TOKEN_EXPIRE_SECONDS = 3600

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Pre-computed bcrypt hash for "admin123"
_ADMIN_HASHED_PASSWORD = "$2b$12$hyH2pZy3AjcVS32NZio3iOIXTR.QqaTRe0Keikz42ECzT7GFsJAXm"

# In-memory user store (single admin user)
USERS_DB = {
    "admin": {
        "username": "admin",
        "hashed_password": _ADMIN_HASHED_PASSWORD,
    }
}


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(username: str, password: str) -> Optional[dict]:
    user = USERS_DB.get(username)
    if not user:
        return None
    if not verify_password(password, user["hashed_password"]):
        return None
    return user


def create_access_token(data: dict, expires_delta: int = ACCESS_TOKEN_EXPIRE_SECONDS) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(seconds=expires_delta)
    to_encode.update({"exp": expire, "type": "access"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def create_refresh_token(data: dict, expires_delta: int = REFRESH_TOKEN_EXPIRE_SECONDS) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(seconds=expires_delta)
    to_encode.update({"exp": expire, "type": "refresh"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> dict:
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
