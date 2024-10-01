from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Permitir solicitudes desde React

DATA_FILE = './backend/data/data.json'

# Función para cargar las tareas desde el archivo JSON
def load_tasks():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    return []

# Función para guardar las tareas en el archivo JSON
def save_tasks(tasks):
    with open(DATA_FILE, 'w') as file:
        json.dump(tasks, file, indent=4)

tasks = load_tasks()  # Cargar las tareas al iniciar la aplicación

@app.route('/api/tasks', methods=['POST'])
def add_task():
    # Obtener los datos en formato JSON
    task_data = request.get_json()
    print(tasks)
    # Agregar la nueva tarea a la lista de tareas
    tasks.append(task_data)
    
    # Guardar la lista de tareas actualizada en el archivo JSON
    save_tasks(tasks)
    
    # Imprimir la tarea recibida (opcional)
    print(f"Task added: {task_data}")
    
    # Retornar una respuesta exitosa
    return jsonify({"message": "Task added successfully!"}), 201

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    # Retornar la lista de tareas
    return jsonify(tasks), 200



if __name__ == '__main__':
    app.run(debug=True)
