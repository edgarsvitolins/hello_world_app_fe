FROM python:3.11
RUN pip install django requests
WORKDIR /app
COPY django_fe .
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
