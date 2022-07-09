# start by pulling the python image
FROM python:3.9.10-alpine

LABEL MAINTAINER="Manuel Carita <manuel.carita@utec.edu.pe>"

# copy the requirements file into the image
COPY backend/requirements.txt /app/requirements.txt

# switch working directory
WORKDIR /app

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY backend/. /app

EXPOSE 5000

# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]

CMD ["app.py"]