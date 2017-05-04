# Fake Api

## Stack
- [Json Server](https://github.com/typicode/json-server)
- [Casual](https://github.com/boo1ean/casual)
- [Now](https://zeit.co/now)

## Demo
[https://fake-evercheck-api-lzygarakdz.now.sh](https://fake-evercheck-api-lzygarakdz.now.sh)

## Routes
```
GET /me
```

```json
{
  "id": 89,
  "firstName": "Norwood",
  "middleName": "Ettie",
  "lastName": "Paucek",
  "userName": "Jacey_Steuber",
  "role": "omnis",
  "email": "Hettinger.Sandy@Mireya.com",
  "applications": {
    "humanResources": true,
    "education": true,
    "credentialing": false
  }
}
```

```
GET /employees
GET /api/v1/users/:id/employees
```

```json
[
  {
    "id": 4,
    "firstName": "Magnus",
    "middleName": "Teagan",
    "lastName": "Kuhn",
    "employeeId": 340,
    "status": "inactive",
    "stateId": 16,
    "professionId": 22,
    "workgroupValues": 13,
    "email": "Keyshawn_Franecki@yahoo.com",
    "licenses": [
      {
        "id": 606,
        "professionId": 440,
        "number": "UT506",
        "originalDate": "03-12-2009",
        "expirationDate": "08-02-1989",
        "label": "takeAction",
        "status": "eos"
      },
      {
        "id": 858,
        "number": "fQ755",
        "originalDate": "03-19-1989",
        "expirationDate": "11-28-1987",
        "label": "takeAction",
        "status": "sit"
      }
    ]
  },
  ...
]
```

```
GET /employees/:id
GET /api/v1/users/:id/employees/:id
```

```json
{
  "id": 2,
  "firstName": "Amy",
  "middleName": "Fae",
  "lastName": "Sawayn",
  "employeeId": 760,
  "status": "inactive",
  "stateId": 16,
  "professionId": 22,
  "workgroupValues": 13,
  "email": "Conn.Olen@yahoo.com",
  "licenses": [
    {
      "id": 411,
      "number": "Lm-388",
      "originalDate": "02-02-1990",
      "expirationDate": "08-08-2005",
      "label": "warning",
      "status": "delectus"
    },
    {
      "id": 197,
      "number": "iF362",
      "originalDate": "11-08-1977",
      "expirationDate": "03-09-1988",
      "label": "warning",
      "status": "dolorem"
    }
  ]
}
```

```
GET /states
GET /api/v1/users/:id/states
GET /api/v1/users/:id/employees/states
```

```json
[
  {
    "id": 0,
    "code": "IL",
    "name": "Alaska"
  },
  {
    "id": 1,
    "code": "NH",
    "name": "Vermont"
  },
  {
    "id": 2,
    "code": "LA",
    "name": "Delaware"
  },
  ...
]
```

```
GET /professions
GET /api/v1/users/:id/professions
GET /api/v1/users/:id/employees/states/:id/professions
```

```json
[
  {
    "id": 0,
    "name": "Velit et sint",
    "stateId": 18,
    "code": "TX"
  },
  {
    "id": 1,
    "name": "Fugiat aliquam provident",
    "stateId": 0,
    "code": "WA"
  },
  {
    "id": 2,
    "name": "Aut similique et",
    "stateId": 17,
    "code": "KY"
  },
  ...
]
```

```
GET /licenses
GET /api/v1/users/:id/licenses
```

```json
[
  {
    "id": 200,
    "number": "Rn-571",
    "originalDate": "02-29-2008",
    "expirationDate": "04-16-2014",
    "label": "clearToWork",
    "status": "ratione"
  },
  {
    "id": 373,
    "number": "dT-811",
    "originalDate": "12-03-2002",
    "expirationDate": "01-29-2013",
    "label": "warning",
    "status": "et"
  },
  ...
]
```

```
GET /workgroups
GET /api/v1/users/:id/workgroups
```

```json
[
  {
    "id": 0,
    "name": "Ut molestias"
  },
  {
    "id": 1,
    "name": "Repellendus soluta est"
  },
  {
    "id": 2,
    "name": "Quasi ut"
  },
  ...
]
```

```
GET /workgroupsValues
GET /api/v1/users/:id/workgroups/:id/values
```

```json
[
  {
    "id": 0,
    "workgroupId": 17,
    "name": "Qui atque"
  },
  {
    "id": 1,
    "workgroupId": 12,
    "name": "Aliquam pariatur ipsum"
  },
  ...
]
```
