# Base stage - Dependencies and common settings
FROM python:3.13.5 AS base
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
WORKDIR /code
COPY requirements.txt .

# Development stage
FROM base AS development
RUN python -m pip install --upgrade pip \
    && python -m pip install -r requirements.txt --no-cache-dir \
    && python -m pip install debugpy
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Production stage
FROM base AS production
RUN python -m pip install --upgrade pip \
    && python -m pip install -r requirements.txt --no-cache-dir
COPY . .
RUN python manage.py collectstatic --noinput
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "core.wsgi:application"]

# Testing stage
FROM base AS testing
RUN python -m pip install --upgrade pip \
    && python -m pip install -r requirements.txt --no-cache-dir \
    && python -m pip install pytest pytest-django
COPY . .
CMD ["pytest"]




