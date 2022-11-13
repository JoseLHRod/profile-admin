// Create user

POST http://localhost:5000/users
Content-Type: application/json

{
    "first_name":"Jose",
    "family_name":"Hernandez",
    "date_of_birth":"21-07-1987",
    "email":"jose@google.com",
    "password":"123456",
    "confPassword":"123456",
    "role":"admin"
}

###
// Get All Users
GET http://localhost:5000/users

###
// Get sigle user
GET http://localhost:5000/users/afa1a116-a35f-4f88-bd1f-577ba1d46651

###
// Update user
PATCH http://localhost:5000/users/afa1a116-a35f-4f88-bd1f-577ba1d46651
Content-Type: application/json

{
    "first_name":"Jose Luis",
    "family_name":"Hernandez Rodriguez",
    "date_of_birth":"21-07-1987",
    "email":"jose@google.com",
    "password":"",
    "confPassword":"",
    "role":"admin"
}

###
// Delete User
DELETE http://localhost:5000/users/85d4b036-5a15-40a6-a4e5-4ea582fc8c4a

// Login

POST http://localhost:5000/login
Content-Type: application/json

{   
    "email":"jose@google.com",
    "password":"123456",    
}

###
GET http://localhost:5000/me

###
DELETE http://localhost:5000/logout