from src.base.abstracts.app import app
from src.apps.accounts.dtos.dto import UserCreateDto, UserLoginDto
from src.apps.accounts.services.users import user_service
from fastapi import Response

@app.post("/register")
def register(user: UserCreateDto):
    try:
        print(user)
        user_service.create(user)
    except Exception as e:
        raise Exception(e) from e
    return Response(status_code=201)


@app.post("/login")
def login(user: UserLoginDto):
    pass