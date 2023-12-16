# User API SPEC

## Register User API
Endpoint : Post /api/users

Request Body : 
```json
{
    "username"  : "novin",
    "password"  : "novinimut",
    "name"      : "Novin Ardian Yulianto"
}
```

Response Body Success :
```json
{
    "data": {
        "username"  : "novin",
        "name"      : "Novin Ardian Yulianto"
    }
}
```

Response Body Error :
```json
{
  "errors"  : "username already registered"
}
```


## Login User API
Endpoint : POST /api/users/login

Request Body :
```json
{
    "username": "novin",
    "password": "novinimut"
}        
```

Response Body Success :
```json
{
    "data": {
      "token": "unique-token"
    }
}
```

Response Body Error :
```json
{
  "errors": "username or password is wrong"
}
```

## Update User API
Header :
- Authorization : token

Endpoint : PATCH /api/users/current

Request Body :
```json
{
  "name": "Novin Ardian Yulianto",
  "password": "novin imut"
}
```

Response Body Success :
```json
{
  "username": "novin",
  "name": "Novin Ardian Yulianto"
}
```

Response Body Error :
```json
{
  "errors": "Name length max 100"
}
```
## Get User API
Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :
```json
{
  "data": {
    "username": "novin",
    "password": "novinimut"
  }
}
```

Response Body Error :
```json
{
  "errors": "unauthorized"
}
```

## Logout User API
Endpoint : DELETE /api/users/logout

Response Body Success
```json
{
  "data": "OK"
}
```

Response Body Error 
```json
{
  "errors": "unauthorized"
}
```