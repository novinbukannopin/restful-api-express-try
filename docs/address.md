## Address API SPEC

### Create Address SPEC
Endpoint : POST /api/contact/:id/addresses

Headers :
- Authorization : token

Request Body :
```json
{
  "street": "mawar",
  "city": "surabaya",
  "province": "east java",
  "country": "indonesia",
  "postal_code": "678162"
}
```

Response Body Success
```json
{
  "data": {
    "id": "1", 
    "street": "mawar",
    "city": "surabaya",
    "province": "east java",
    "country": "indonesia",
    "postal_code": "678162"
  }
}
```

Response Body Error
```json
{
  "errors": "country is required"
}
```

### Update Address SPEC
Endpoint : POST /api/contacts/:id/addresses/:addressId

Headers :
- Authorization : token

Request Body :
```json
{
  "data": {
    "id": "1", 
    "street": "mawar",
    "city": "surabaya",
    "province": "east java",
    "country": "indonesia",
    "postal_code": "678162"
  }
}
```

Response Body Success

Response Body Error
```json
{
  "errors": "country is required"
}
```

### Get Address SPEC
Endpoint: GET /api/contacts/:id/addresses/:addressId

Headers : 
- Authorization : token

Response Body Success
```json
{
  "data": {
    "id": "1", 
    "street": "mawar",
    "city": "surabaya",
    "province": "east java",
    "country": "indonesia",
    "postal_code": "678162"
  }
}
```


Response Body Error
```json
{
  "errors": "contact is not found"
}
```

### List Address SPEC
Endpoint : GET /api/contacts/:id/addresses

Header :
- Authorization :token

Response Body Success
```json
{
  "data": 
  [
    {
    "id": "1", 
    "street": "mawar",
    "city": "surabaya",
    "province": "east java",
    "country": "indonesia",
    "postal_code": "678162"
    },
    {
      "id": "1",
      "street": "mawar",
      "city": "surabaya",
      "province": "east java",
      "country": "indonesia",
      "postal_code": "678162"
    }
  ]
}
```

Response Body Error
```json
{
  "errors": "contact is not found"
}
```

### Remove Address SPEC
Endpoint : DELETE /api/contacts/:id/addresses/:idAddress

Headers :
- Authorization : token

Response Body Success
```json
{
  "message": "OK"
}
```

Response Body Error
```json
{
  "errors": "contact is not found"
}
```