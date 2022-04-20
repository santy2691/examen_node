# Node Exam

## Inicializar proyecto
Utiliza Docker para cargar todo el proyecto empezar a funcionar

Ejecutar: docker-compose up -d
Web: http://localhost:3000/
MongoAdmin: http://localhost:4000/


## Matricula de alumnos

- Queremos crear el sistema de matriculas de un instituto, para ello tenemos presente que:
- Existe un listado de asignaturas con las propiedades:

1. _id-ObjectID
2. Nombre-string
3. Num horas-string
4. Docente-ObjectID
5. Alumnos- array[ObjectID]

Existe un listado de alumno con las propiedades:
1. _id-ObjectID
2. Nombre-string
3. Apellido-string

Existe un listado de docentes con las propiedades:
1. _id-ObjectID
2. Nombre-string
3. Apellido-string

- Se pueden hacer consultas de creación, edición y eliminación de los tres tipos de objetos
- Existe una API con la que se pueden realizar todas las operaciones, además está configurada para seguir el modo HATEOS
- Se utiliza una base de datos mongo con 3 collections (docentes,alumnos,matricula)
- Las colecciones alumnos y docentes ya están creadas en la DB con datos
- La URL para acceder al formulario de creación de matrícula es **http://localhost:3000/asignatura/new**

## Chat

- Existe un chat en el que existen una ventana de mensajes y  dos campos.
- Campo de texto para enviar el chat
- Campo de texto para poner nombre del usuario
- Al enviar un mensaje, se envía al servidor mediante socket tanto el mensaje como el nombre de la persona que lo envía. El resto de clientes reciben el mensaje y lo imprimen en la ventana de mensajes. 
- Además existen varias salas:
1. Todos. Si se escribe un mensaje a través del canal “todos”, se recepciona por todos los clientes independientemente del canal en el que se encuentre.
2. Canal #. Si se escribe un mensaje a través de un canal se recepciona por los usuarios de ese canal. 

La URL para acceder a cada sala del chat son:
- http://localhost:3000/chat/all
- http://localhost:3000/chat/1
- http://localhost:3000/chat/2
- http://localhost:3000/chat/3
