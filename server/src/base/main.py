from src.base.abstracts.app import app
from src.base.engine import engine
from src.base.abstracts.models import Base
from src.apps.accounts.views.users import register
from fastapi.middleware.cors import CORSMiddleware
Base.metadata.create_all(bind=engine)


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)