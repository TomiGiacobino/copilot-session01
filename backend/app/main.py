from fastapi import FastAPI, HTTPException, status
from jose import JWTError
from pydantic import BaseModel

from app.auth import (
    ACCESS_TOKEN_EXPIRE_SECONDS,
    authenticate_user,
    create_access_token,
    create_refresh_token,
    decode_token,
)

app = FastAPI(title="JWT Auth API", version="1.0.0")


class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str
    expires_in: int


class RefreshRequest(BaseModel):
    refresh_token: str


@app.post("/token", response_model=TokenResponse)
def login(body: LoginRequest):
    """Authenticate user and return access + refresh tokens."""
    user = authenticate_user(body.username, body.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token({"sub": user["username"]})
    refresh_token = create_refresh_token({"sub": user["username"]})
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        expires_in=ACCESS_TOKEN_EXPIRE_SECONDS,
    )


@app.post("/token/refresh", response_model=TokenResponse)
def refresh_token(body: RefreshRequest):
    """Use a valid refresh token to obtain a new access token."""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired refresh token",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = decode_token(body.refresh_token)
        if payload.get("type") != "refresh":
            raise credentials_exception
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    new_access_token = create_access_token({"sub": username})
    new_refresh_token = create_refresh_token({"sub": username})
    return TokenResponse(
        access_token=new_access_token,
        refresh_token=new_refresh_token,
        token_type="bearer",
        expires_in=ACCESS_TOKEN_EXPIRE_SECONDS,
    )


@app.get("/health")
def health():
    return {"status": "ok"}
