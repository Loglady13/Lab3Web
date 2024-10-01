from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir solicitudes desde React

tasks = []  # Lista para almacenar las tareas

@app.route('/api/tasks', methods=['POST'])
def add_task():
    # Obtener los datos en formato JSON
    task_data = request.get_json()
    
    # Agregar la nueva tarea a la lista de tareas
    tasks.append(task_data)
    
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
