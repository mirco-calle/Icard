FROM python:3.13.5 as builder
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt --no-cache-dir
COPY . /code/  

# Stage 2: dev - Entorno de desarrollo
# Este stage es ideal para el desarrollo local. Hereda todo del stage 'builder'.
# Está diseñado para ser usado con volúmenes de Docker para montar el código fuente,
# permitiendo cambios instantáneos sin reconstruir la imagen para cada cambio.
FROM builder AS dev
# Define el comando por defecto para el entorno de desarrollo.
# Asegúrate de reemplazar 'main.py' con el punto de entrada de tu aplicación en desarrollo.
CMD ["python", "main.py"]




# Stage 3: prod - Entorno de producción (incluye prod-deps)
# Este es el stage final para la imagen de producción.
# Utiliza una imagen base 'slim' para un tamaño mínimo y máxima seguridad.
# Solo copia lo estrictamente necesario del stage 'builder' y luego instala
# las dependencias de producción (incluyendo Gunicorn).
FROM python:3.13.5 as prod
ENV PYTHONUNBUFFERED=1
WORKDIR /app
# Copia el código fuente y cualquier artefacto de construcción del stage 'builder'.
# Esto asegura que solo el código de la aplicación (y no herramientas de desarrollo o construcción)
# esté presente en la imagen final.
COPY --from=builder /app/ /app/
# Copia el archivo requirements.txt del stage 'builder' para instalar las dependencias de producción.
# Si tus dependencias de producción son diferentes a las de desarrollo, es una buena práctica
# tener un archivo 'requirements_prod.txt' separado y copiarlo aquí en su lugar.
COPY --from=builder /app/requirements.txt /app/requirements.txt
# Instala las dependencias de producción, incluyendo Gunicorn.
# Limpia el caché de pip para asegurar el tamaño más pequeño posible de la imagen final.
RUN python -m pip install --upgrade pip && \
    python -m pip install gunicorn && \
    python -m pip install -r requirements.txt --no-cache-dir && \
    rm -rf /root/.cache/pip
# Define el comando para ejecutar la aplicación en producción con Gunicorn.
# ¡IMPORTANTE!: Reemplaza 'your_app_module:app' con el nombre de tu módulo Python
# y el objeto de aplicación WSGI/ASGI. Por ejemplo, si tu archivo es 'app.py'
# y tu aplicación se llama 'flask_app', sería 'app:flask_app'.
CMD ["gunicorn", "-b", "0.0.0.0:8000", "your_app_module:app"]

