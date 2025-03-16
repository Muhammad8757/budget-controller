# Budget Controller

Этот проект представляет собой веб-приложение для управления бюджетом. Он состоит из двух частей: клиента и сервера.

## Клиентская часть

Клиентская часть проекта находится в директории `client`. Здесь будет размещён код фронтенда.

## Серверная часть

Серверная часть проекта находится в директории `server`. Она разработана с использованием [FastAPI](https://fastapi.tiangolo.com/), [SQLAlchemy](https://www.sqlalchemy.org/) и [uvicorn](https://www.uvicorn.org/).

### Структура проекта

- **Конфигурация и запуск:**
  - Файл [src/base/main.py](server/src/base/main.py) инициализирует приложение, создаёт таблицы в БД и импортирует маршруты.
  - Файл [src/base/engine.py](server/src/base/engine.py) содержит настройку подключения к базе данных.

- **Слои приложения:**
  - **Модели**: Определены в [src/apps/accounts/models/user.py](server/src/apps/accounts/models/user.py).
  - **DTO**: Описаны в [src/apps/accounts/dtos/dto.py](server/src/apps/accounts/dtos/dto.py).
  - **Репозитории**: Логика работы с базой данных реализована в [src/apps/accounts/repositories/users.py](server/src/apps/accounts/repositories/users.py) с базовой логикой в [src/base/abstracts/repositories.py](server/src/base/abstracts/repositories.py).
  - **Сервисы**: Содержат бизнес-логику, например, [src/apps/accounts/services/users.py](server/src/apps/accounts/services/users.py).
  - **Представления (views)**: Определяют маршруты API. Пример – [src/apps/accounts/views/users.py](server/src/apps/accounts/views/users.py) с маршрутом для регистрации пользователя.

- **Конфигурация:**
  - Параметры подключения к БД загружаются из переменных окружения (см. [server/.env.example](server/.env.example)) через [src/configs/settings/base.py](server/src/configs/settings/base.py).

### Установка зависимостей

Установите зависимости, указанные в [server/requirements.txt](server/requirements.txt):

```sh
pip install -r server/requirements.txt
```

### Настройка переменных окружения

Создайте файл `.env` на основании `.env.example` и задайте переменную `SQLALCHEMY_DATABASE_URL`. Пример:

```sh
cp server/.env.example server/.env
```

### Запуск сервера

Вы можете запустить приложение с помощью uvicorn:

```sh
uvicorn server.src.base.main:app --reload
```

## Docker

Проект также поддерживает запуск с использованием Docker. Для этого используйте `Dockerfile` и `docker-compose.yml` в корневой директории проекта.

### Запуск с Docker

Соберите и запустите контейнеры с помощью Docker Compose:

```sh
docker-compose up --build
```
