# Deliah-Api
*Esta es una Api generada para un Delivery Restó. Permite crear usuarios que podrán relizar pedidos de productos, y administradores que podrán editar, actualizar y eliminar productos, pedidos y usuarios.*

### Requisitos:
Node.js, descargar e instalar Mongo Compass Link:https://www.mongodb.com/products/compass, Postman o Insomnia para realizar las peticiones HTTP y un un IDE, como VCode por ejemplo.

### Empezar!
Ya podes descargar el repositorio, una vez descargado abrí la carpeta en tu IDE, y ejecutá el comando npm start para instalar las dependencias, y node server.js para hacer correr el proyecto. 
Copia el contenido json de la carpeta db.tables, en Mongo Compass crea una nueva database con el nombre Delilah, con la configuración del puerto estandar, crea las 3 colecciones: users, products y orders y pegá el json de los archivos correspondientes.
Listo! ya podes probar las peticiones en Insomnia o Postman!



### Verbos HTTP

* GET /users   *Obtiene todos los usuarios*
* GET /products *Obtiene todos los productos*
* GET /products/:productId  *Obtiene producto por Id*
* GET /orders  *Obtiene todas las ordenes*
* GET /orders:orderId  *Obtiene Orden por Id*
* POST /users/signup *Registrar nuevo usuario*
* POST /users/login *Registrar nuevo usuario*
* POST /products *Crear nuevo producto*
* POST /orders *Crear nueva orden*
* PATCH /products/:productId *Actualizar* producto por Id
* PATCH /orders/:orderId *Actualizar orden por Id.*


### API Endpoints:


**Autenticacion**
* POST /users/signup
* Url: http://localhost:8080/users/signup

*Ejemplo del cuerpo de la peticion:*

* Para Usuarios:

{


    "fullname": "User",
    "adress":"home",
    "email": "user@mail.com",
    "password": "123456",
    "role": "user"
    
}

* Para Administradores

{
    
    "fullname": "Admin",
    "adress":"home",
    "email": "admin@mail.com",
    "password": "123456",
    "role": "admin"
    
}



*  POST /users/login
* Url: http://localhost:8080/users/login

*Ejemplo del cuerpo de la peticion:*

Para Usuarios:

{

    "email": "user@mail.com",
    "password": "123456"
    
}


*Ejemplo de respuesta:*



{

  
  "message": "Authentication successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJ1c2VySWQiOiI1ZWExYzRmZTZlNmRkYzQyZGMyOGVmYzAiLCJyb2xlIjoidXNlciIsImlhdCI6MTU4NzY2MDE1NSwiZXhwIjoxNTg3NjYzNzU1fQ.S0sGI5bYXQ_9mGFQQp-MtSzEPIMI0daDtYlRAtKU9r4"

}

Para Administradores:


{

"email": "admin@mail.com",

"password": "123456"


}

*Ejemplo de respuesta:*

{
 
 
  "message": "Authentication successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwidXNlcklkIjoiNWVhMWM1M2U2ZTZkZGM0MmRjMjhlZmMxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTg3NjYwNTQ5LCJleHAiOjE1ODc2NjQxNDl9.0tJjfEEjK8zhpI8fXz2DvZys4mW7r0dH5aOg80frwhg"


}

*****Para acceder a las demás peticiones Usuario y Administrador deben estar Autenticados*****

* GET /users
*Sólo para administradores*
* Url: http://localhost:8080/users

Ejemplo de respuesta:

[

  {

    "role": "user",
    "_id": "5e9f3ce3f58d9d2c80ac4620",
    "email": "usuario@mail.com"
  },

  {

    "role": "admin",
    "_id": "5e9fc7afbc141532401b874e",
    "email": "ana@mail.com"
  },
  
  {

    "role": "user",
    "_id": "5ea1c4fe6e6ddc42dc28efc0",
    "fullname": "User",
    "email": "user@mail.com"
  },

  {

    "role": "admin",
    "_id": "5ea1c53e6e6ddc42dc28efc1",
    "fullname": "Admin",
    "email": "admin@mail.com"
  }

]

****Productos****
* GET /products
* Url: http://localhost:8080/products

Ejemplo de respuesta:

[
 
  {
   
    "_id": "5e9ebc5d3d2611333413f515",
    "name": "Ensalada Veggie",
    "price": 340
  },

  {

    "_id": "5e9ebd0c3d2611333413f517",
    "name": "Sandwich Veggie",
    "price": 310
  },

  {

    "_id": "5ea0ac8ec486271878d5e33a",
    "name": "lasagna",
    "price": 555555555555
  }

]

* GET /products/[id]
* Url: http://localhost:8080/products/[id]


Ejemplo de respuesta:

{

"product": {
    
    "_id": "5e9ebd0c3d2611333413f517",
    "name": "Sandwich Veggie",
    "price": 310
 
  },

  "request": {
    
    "type": "GET",
    "description": "Get product",
    "url": "http://localhost:8080/products/"
  }
}

* POST /products
*Sólo para administradores*
* Url: http://localhost:8080/products

Ejemplo del cuerpo de la peticion:

{

  "name":"Empanadas",
  "price":80


}

Ejemplo de respuesta:

{

  "message": "Product created succesfully",
  
  "createdProduct": {
    
    "name": "Empanadas",
    "_id": "5ea1c9b66e6ddc42dc28efc2",
    "request": {
    
      "type": "GET",
      "url": "http://localhost:8080/products/5ea1c9b66e6ddc42dc28efc2"

    }
  }
}

* PATCH /products/[id]
*Sólo para administradores*
* Url: http://localhost:8080/products/[id]

Ejemplo del cuerpo de la peticion para actualizar el precio:

[
	{
		"propName":"price",
		"value":450
	}
]

Ejemplo de respuesta:

{

  "message": "Product updated Succesfully",
  "request": {
    
    "type": "GET",
    "url": "http://localhost:8080/products/5ea0ac8ec486271878d5e33a"
  
  
  }
}


* DELETE /products/[id]
*Sólo para administradores*
* Url: http://localhost:8080/products/[id]

Ejemplo de respuesta: 

{
  
  "n": 1,
  
  "ok": 1,
  
  "deletedCount": 1

}

***Ordenes***
* GET /orders
*Sólo para administradores*
* Url: http://localhost:8080/orders

Ejemplo de respuesta:

{
  
  "count": 5,
  
  "orders": [
    {
      
      "_id": "5ea0812561748c27fca28d7c",
      "request": {
        "type": "GET",
        "url": "http://localhost:8080/orders/5ea0812561748c27fca28d7c"

      }
    },

    {
      
      "_id": "5ea0a772c486271878d5e337",
      "request": {
        "type": "GET",
        "url": "http://localhost:8080/orders/5ea0a772c486271878d5e337"
      }
    },
    {
      "_id": "5ea0aaa6c486271878d5e338",
      "request": {
        "type": "GET",
        "url": "http://localhost:8080/orders/5ea0aaa6c486271878d5e338"
      }
    },
    {
      "_id": "5ea0ab24c486271878d5e339",
      "request": {
        "type": "GET",
        "url": "http://localhost:8080/orders/5ea0ab24c486271878d5e339"
      }
    },
    {
      "_id": "5ea1e1c10db21743704cba25",
      "request": {
        "type": "GET",
        "url": "http://localhost:8080/orders/5ea1e1c10db21743704cba25"
      }
    }
  ]
}


* GET /orders/[id]
*Sólo para administradores*
* Url: http://localhost:8080/orders/[id]

Ejemplo de respuesta:

{

  "order": {
   
    "Status": "recieved",
    "_id": "5ea1e1c10db21743704cba25",
    "user": "5ea1c4fe6e6ddc42dc28efc0",
    "Items": [
      {
        "quantity": 2,
        "_id": "5ea1e1c10db21743704cba26",
        "product": "5e9ebc5d3d2611333413f515"
      },
      {
        "quantity": 3,
        "_id": "5ea1e1c10db21743704cba27",
        "product": "5e9ebd0c3d2611333413f517"
      }
    ],
    "paymentMethod": "card",
    "date": "2020-04-23T18:43:13.983Z",
    "__v": 0
  },
  
  "request": {
    
    "type": "GET",
    "url": "http://localhost:8080/orders"
  }
}


* POST /orders
* Url: http://localhost:8080/orders

Ejemplo del cuerpo de la peticion:

{

"user":"5ea1c4fe6e6ddc42dc28efc0",

  
    "cart": [
        {
            "product": "5e9ebc5d3d2611333413f515",
            "quantity": 2
        },
        {
            "product": "5e9ebd0c3d2611333413f517",
            "quantity": 3
        }
    ],


"paymentMethod": "card"
   
}


*Ejemplo de respuesta:*

{
  
  "message": "Order stored",
  
  "order": {
    
    "_id": "5ea1e1c10db21743704cba25",
    "user": "5ea1c4fe6e6ddc42dc28efc0",
    "Items": [
      {
    
        "quantity": 2,
        "_id": "5ea1e1c10db21743704cba26",
        "product": "5e9ebc5d3d2611333413f515"
      },
    
      {
    
        "quantity": 3,
        "_id": "5ea1e1c10db21743704cba27",
        "product": "5e9ebd0c3d2611333413f517"
      }

    ],
    
    "paymentMethod": "card"
  },

  "request": {
   
    "type": "GET",
    "url": "http://localhost:8080/orders/5ea1e1c10db21743704cba25"
  }
}


* PATCH /orders/[id]
*Sólo para administradores*
* Url: http://localhost:8080/orders/[id]

Ejemplo del cuerpo de la peticion para actualizar el precio:

[
	{
		"propName":"Status",
		"value":"sended"
	}
]


Ejemplo de respuesta:

{
  
  "message": "Order updated",
  
  "request": {
    
    "type": "GET",
    "url": "http://localhost:8080/orders/5ea1e1c10db21743704cba25"
  }
}

{
  
  "order": {
    
    "Status": "sended",
    "_id": "5ea1e1c10db21743704cba25",
    "user": "5ea1c4fe6e6ddc42dc28efc0",
    "Items": [
    
      {
    
        "quantity": 2,
        "_id": "5ea1e1c10db21743704cba26",
        "product": "5e9ebc5d3d2611333413f515"
      },

      {
      
        "quantity": 3,
        "_id": "5ea1e1c10db21743704cba27",
        "product": "5e9ebd0c3d2611333413f517"
      }
    ],

    "paymentMethod": "card",
    "date": "2020-04-23T18:43:13.983Z",
    "__v": 0
  },
  
  "request": {
    
    "type": "GET",
    "url": "http://localhost:8080/orders"
  }
}

* DELETE /orders/[id]
* Url: http://localhost:8080/orders/[id]


Ejemplo de respuesta:

{
  "message": "Order deleted",
  
  "request": {
    
    "type": "POST",
    "url": "http://localhost:8080/orders",
    "body": {
    
      "productId": "ID",
      "quantity": "Number"
    
    }
  }
}
