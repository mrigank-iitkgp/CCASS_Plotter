FROM --platform=linux/x86-64 python:3.9-slim
WORKDIR /Users/mrigank/Documents/Study Material/Project/CCASS_Plotter/backend
COPY requirements.txt requirements.txt
RUN python3 -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install uvicorn[standard]
RUN pip install websockets
EXPOSE 8080
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]