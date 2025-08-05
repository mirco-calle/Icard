FROM python:3.13.5
ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt /code/

RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

COPY . /code/  

# estoy quiere decir que voy a copiar todo en el directorio code
