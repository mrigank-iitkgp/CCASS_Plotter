FROM python:3.9
WORKDIR /Users/mrigank/Documents/Study Material/Project/CCASS_Plotter/backend
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8080
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]