# Contact API Spec

## Create Contact API
Endpoint : POST /api/contacts

Headers : 
- Authorization : Token

Request Body :
```json
{
  "first_name": "novin",
  "last_name": "ardian",
  "email": "novin@novin.com",
  "phone": "62879187319"
}
```

Response Body Success :
```json
{
  "data": {
    "id": "1",
    "first_name": "novin",
    "last_name": "ardian",
    "email": "novin@novin.com",
    "phone": "62879187319"
  }
}
```

Response Body Error :
```json
{
  "errors": "email already used"
}
```


## Update Contact API
Endpoint : POST /api/contacts/:id

Headers :
- Authorization : Token

Request Body :
```json
{
  "first_name": "novin",
  "last_name": "ardian",
  "email": "novin@novin.com",
  "phone": "17293812837 "
}
```

Response Body Success :
```json
{
  "data": {
    "id": "1",
    "first_name": "novin",
    "last_name": "ardian",
    "email": "novin@novin.com",
    "phone": "17293812837"
  }
}
```

Response Body Error :
```json
{
  "errors": "email are not valid format haha"
}
```

## Get Contact API
Endpoint : GET /api/contacts/:id

Headers :
- Authorization : Token

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "first_name": "novin",
    "last_name": "ardian",
    "email": "novin@novin.com",
    "phone": "17293812837"
  }
}
```

Response Body Error
```json
{
  "errors": "contact not found"
}
```

## Search Contact API
Endpoint : GET /api/contacts

Query Params :
- select by first_name or last_name
- select email like
- phone select like
- page, number of page, default 1
- size, size per page, defaut 10

Headers :
- Authorization : Token

Response Body Success :
```json
{
  "data" : [
    {
      "id": "1",
      "first_name": "novin",
      "last_name": "ardian",
      "email": "novin@novin.com",
      "phone": "17293812837" 
    },
    {
      "id": "2",
      "first_name": "novin",
      "last_name": "ardian",
      "email": "novin@novin.com",
      "phone": "17293812837"
    }
  ],
  "paging" : {
    "page": 1,
    "total_page": 3,
    "total_item": 20
  }
}
```

## Remove Contact API
Endpoint : DELETE /api/contacts

Headers :
- Authorization : Token

Response Body Success :
```json
{
  "data": "OK"
}
```

Response Body Error :
```json
{
  "errors": "contact is not valid"
}
```