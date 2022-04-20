db.createCollection("alumnos", {
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre" , "apellido" ],
      properties: {
         nombre: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         apellido: {
            bsonType : "string",
            description: "must be a string and is required"
         }
      }
   } }
})

db.createCollection("docentes", {
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre" , "apellido" ],
      properties: {
         nombre: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         apellido: {
            bsonType : "string",
            description: "must be a string and is required"
         }
      }
   } }
   })

db.alumnos.insert( { nombre: "Amanda", apellido: "Sanchez" } )
db.alumnos.insert( { nombre: "Victor", apellido: "Ramirez" } )
db.alumnos.insert( { nombre: "Pedro", apellido: "Puyol" } )
db.docentes.insert( { nombre: "Pedro", apellido: "J" } )
db.docentes.insert( { nombre: "Sandra", apellido: "Martinez" } )
