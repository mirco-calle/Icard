# ICard - Sistema de Gestión de Restaurante

## 📋 Descripción
ICard es una aplicación web fullstack para la gestión de restaurantes, desarrollada con Django (Backend) y React (Frontend). Permite administrar pedidos, menús y pagos de manera eficiente.

## 🚀 Tecnologías Utilizadas

### Backend
- Python 3.13.5
- Django
- PostgreSQL 14.18
- Django REST Framework

### Frontend
- React + Vite
- Node.js

### Herramientas de Desarrollo
- Docker & Docker Compose
- pgAdmin 4

## 🛠️ Estructura del Proyecto
```
ICard/
├── backend/
│   ├── icard/
│   │   ├── settings/
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── Dockerfile
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔧 Configuración y Despliegue

### Requisitos Previos
- Docker
- Docker Compose
- Git

### Pasos para Ejecutar

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd ICard
```

2. **Configurar variables de entorno**
Crear archivo `.env` en la raíz del proyecto:
```env
POSTGRES_DB=icard
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
DATABASE_HOST=db
```

3. **Iniciar los servicios**
```bash
docker-compose up --build
```

4. **Acceder a los servicios**
- Backend API: http://localhost:8000
- Frontend: http://localhost:5173
- pgAdmin: http://localhost:80

## 🔑 Características Principales
- Multi-entorno (desarrollo, producción, testing)
- Contenerización completa
- Base de datos PostgreSQL
- Interfaz de administración pgAdmin
- API REST con Django
- Frontend moderno con React

## 👥 Contribución
Para contribuir al proyecto:
1. Fork del repositorio
2. Crear una rama para tu feature
3. Commit y push de tus cambios
4. Crear un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia [Tu Licencia] - ver el archivo LICENSE.md para detalles

## 📞 Contacto
[Tu Nombre] - [Tu Email]

---
⌨️ con ❤️ por [Tu Nombre]