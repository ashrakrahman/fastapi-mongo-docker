#FROM python:3.11.1-alpine3.16

# nginx/unit:1.29.1-python3.11 ----> this version cant run nginx unit.
FROM nginx/unit:1.26.1-python3.9


WORKDIR /app/api

# This prevents Python from writing out pyc files
ENV PYTHONDONTWRITEBYTECODE 1

# This keeps Python from buffering stdin/stdout
ENV PYTHONUNBUFFERED 1

RUN apt update && apt install -y python3-pip

RUN pip install virtualenv

RUN virtualenv /opt/api-env --python=python3

RUN . /opt/api-env/bin/activate

COPY . .

COPY  config.json /docker-entrypoint.d/

ENV PATH="/opt/api-env/bin:$PATH"

RUN pip install -r requirements.txt

EXPOSE 80






